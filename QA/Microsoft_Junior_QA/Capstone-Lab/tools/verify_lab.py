#!/usr/bin/env python3
"""Self-check for Capstone Module 1 lab completion."""

from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path

REQUIRED_TEST_CASE_FIELDS = ("id", "linked_story", "title", "preconditions", "steps", "expected_result")
REQUIRED_BUG_FIELDS = (
    "summary",
    "environment",
    "preconditions",
    "steps_to_reproduce",
    "expected_result",
    "actual_result",
    "severity",
    "priority",
    "evidence",
)
REQUIRED_EVIDENCE_PNGS = (
    "jira_board.png",
    "zephyr_testcase.png",
    "bug_report_ui.png",
    "bug_report_api.png",
)
RENDERED_PAGES = (
    "jira_board.html",
    "zephyr_testcase.html",
    "bug_report_ui.html",
    "bug_report_api.html",
)


def lab_root() -> Path:
    return Path(__file__).resolve().parent.parent


def load_json(path: Path) -> dict | list | None:
    if not path.is_file():
        return None
    try:
        with path.open(encoding="utf-8") as handle:
            return json.load(handle)
    except (json.JSONDecodeError, OSError):
        return None


def contains_todo(value: object) -> bool:
    if isinstance(value, str):
        return "TODO" in value
    if isinstance(value, list):
        return any(contains_todo(item) for item in value)
    if isinstance(value, dict):
        return any(contains_todo(item) for item in value.values())
    return False


def normalized_text(*parts: object) -> str:
    return " ".join(str(part) for part in parts if part is not None).lower()


def check_backlog(root: Path) -> tuple[bool, str]:
    label = "Backlog contains one Epic and exactly three User Stories"
    path = root / "supporting-files" / "GreenLeaf_Backlog.csv"
    if not path.is_file():
        return False, label + " (GreenLeaf_Backlog.csv missing)"

    try:
        with path.open(encoding="utf-8", newline="") as handle:
            rows = list(csv.DictReader(handle))
    except OSError:
        return False, label + " (unable to read backlog CSV)"

    epics = [row for row in rows if row.get("Issue Type", "").strip().lower() == "epic"]
    stories = [row for row in rows if row.get("Issue Type", "").strip().lower() == "story"]
    passed = len(epics) == 1 and len(stories) == 3
    return passed, label


def check_test_cases(root: Path) -> tuple[bool, str]:
    label = "Three completed test cases cover guest checkout, validation, and promo edge cases"
    path = root / "workspace" / "test_cases.json"
    data = load_json(path)
    if not isinstance(data, dict):
        return False, label + " (test_cases.json missing or invalid JSON)"

    cases = data.get("test_cases")
    if not isinstance(cases, list) or len(cases) != 3:
        return False, label + " (expected exactly 3 test cases)"

    for case in cases:
        if not isinstance(case, dict):
            return False, label + " (invalid test case entry)"
        for field in REQUIRED_TEST_CASE_FIELDS:
            if field not in case or case[field] in (None, ""):
                return False, label + f" (missing field: {field})"
        if contains_todo(case):
            return False, label + " (remove TODO placeholders from test cases)"
        steps = case.get("steps")
        if not isinstance(steps, list) or len(steps) < 2:
            return False, label + " (each test case needs at least two steps)"

    coverage = {"guest": False, "validation": False, "promo": False}
    for case in cases:
        blob = normalized_text(
            case.get("linked_story"),
            case.get("title"),
            case.get("preconditions"),
            case.get("expected_result"),
            " ".join(case.get("steps", [])),
        )
        if case.get("linked_story") == "GL-101" or "guest" in blob:
            coverage["guest"] = True
        if case.get("linked_story") == "GL-103" or any(
            token in blob for token in ("validation", "required", "missing", "empty field")
        ):
            coverage["validation"] = True
        if case.get("linked_story") == "GL-102" or any(
            token in blob for token in ("promo", "expired20", "discount")
        ):
            coverage["promo"] = True

    if not all(coverage.values()):
        missing = ", ".join(name for name, ok in coverage.items() if not ok)
        return False, label + f" (missing coverage: {missing})"

    return True, label


def check_api_evidence(root: Path) -> tuple[bool, str]:
    label = "api_response.json shows POST EXPIRED20 returned HTTP 500"
    path = root / "evidence" / "api_response.json"
    data = load_json(path)
    if not isinstance(data, dict):
        return False, label + " (run tools/api_probe.py while GreenLeaf is running)"

    body = data.get("request_body") or {}
    code = body.get("code") if isinstance(body, dict) else None
    passed = (
        data.get("method") == "POST"
        and str(data.get("url", "")).endswith("/api/promo/validate")
        and code == "EXPIRED20"
        and data.get("status_code") == 500
    )
    return passed, label


def check_bug_report(path: Path, report_kind: str) -> tuple[bool, str]:
    label = f"{report_kind} bug report is complete and accurate"
    data = load_json(path)
    if not isinstance(data, dict):
        return False, label + " (missing or invalid JSON)"

    for field in REQUIRED_BUG_FIELDS:
        if field not in data or data[field] in (None, ""):
            return False, label + f" (missing field: {field})"
    if contains_todo(data):
        return False, label + " (remove TODO placeholders)"

    steps = data.get("steps_to_reproduce")
    if not isinstance(steps, list) or len(steps) < 2:
        return False, label + " (need at least two reproduction steps)"

    blob = normalized_text(
        data.get("summary"),
        data.get("preconditions"),
        data.get("expected_result"),
        data.get("actual_result"),
        " ".join(steps),
        json.dumps(data.get("environment", {})),
    )

    if report_kind == "UI":
        has_viewport = bool(re.search(r"768|390\s*[x×]\s*844|mobile|viewport", blob))
        has_overlap = (
            "overlap" in blob
            or "overlaps" in blob
            or "overlapping" in blob
            or ("over" in blob and "submit order" in blob)
            or ("block" in blob and "submit" in blob)
        )
        has_buttons = "apply promo" in blob and "submit order" in blob
        if not (has_viewport and has_overlap and has_buttons):
            return False, label + " (describe mobile overlap under 768px between Apply Promo and Submit Order)"
        return True, label

    has_endpoint = "/api/promo/validate" in blob
    has_code = "expired20" in blob
    has_500 = "500" in blob
    has_expected_4xx = bool(re.search(r"4\d\d|400|graceful|invalid promo", blob))
    if not (has_endpoint and has_code and has_500 and has_expected_4xx):
        return False, label + " (name endpoint, EXPIRED20, HTTP 500, and expected graceful 4xx)"
    return True, label


def check_rendered_pages(root: Path) -> tuple[bool, str]:
    label = "Rendered HTML pages exist under workspace/rendered/"
    rendered = root / "workspace" / "rendered"
    missing = [name for name in RENDERED_PAGES if not (rendered / name).is_file()]
    if missing:
        return False, label + f" (missing: {', '.join(missing)}; run tools/render_workspace.py)"
    return True, label


def check_evidence_pngs(root: Path) -> tuple[bool, str]:
    label = "Four required PNG evidence files exist and are non-empty"
    evidence = root / "evidence"
    problems: list[str] = []
    for name in REQUIRED_EVIDENCE_PNGS:
        path = evidence / name
        if not path.is_file() or path.stat().st_size == 0:
            problems.append(name)
    if problems:
        return False, label + f" (missing or empty: {', '.join(problems)})"
    return True, label


def main() -> int:
    root = lab_root()
    checks = [
        check_backlog(root),
        check_test_cases(root),
        check_api_evidence(root),
        check_bug_report(root / "workspace" / "bug_reports" / "ui_bug.json", "UI"),
        check_bug_report(root / "workspace" / "bug_reports" / "api_bug.json", "API"),
        check_rendered_pages(root),
        check_evidence_pngs(root),
    ]

    all_passed = True
    for passed, label in checks:
        print(f"{'PASS' if passed else 'FAIL'}  {label}")
        all_passed = all_passed and passed

    print("")
    if all_passed:
        print("All checks passed. Your lab is complete.")
        return 0

    print("One or more checks failed. Revisit the steps noted above, then re-run verify_lab.py.")
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
