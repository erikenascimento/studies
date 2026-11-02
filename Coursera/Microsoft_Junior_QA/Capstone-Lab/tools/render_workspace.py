#!/usr/bin/env python3
"""Render local Jira/Zephyr-style HTML views from lab workspace JSON and CSV."""

from __future__ import annotations

import csv
import html
import json
from pathlib import Path


def lab_root() -> Path:
    return Path(__file__).resolve().parent.parent


def load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def load_backlog(path: Path) -> list[dict[str, str]]:
    with path.open(encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle))


def esc(value: object) -> str:
    if value is None:
        return ""
    if isinstance(value, (dict, list)):
        return html.escape(json.dumps(value, indent=2))
    return html.escape(str(value))


def page_shell(title: str, subtitle: str, body: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{esc(title)}</title>
  <style>
    :root {{
      color-scheme: light;
      --bg: #f4f5f7;
      --panel: #ffffff;
      --border: #dfe1e6;
      --text: #172b4d;
      --muted: #5e6c84;
      --accent: #0052cc;
      --accent-soft: #deebff;
      --success: #00875a;
      --warn: #ff991f;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: "Segoe UI", system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.5;
    }}
    header {{
      background: linear-gradient(135deg, #0747a6, #0052cc);
      color: #fff;
      padding: 1.25rem 1.5rem;
    }}
    header h1 {{ margin: 0 0 0.25rem; font-size: 1.35rem; }}
    header p {{ margin: 0; opacity: 0.92; }}
    main {{ max-width: 1100px; margin: 0 auto; padding: 1.5rem; }}
    .panel {{
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      margin-bottom: 1rem;
      box-shadow: 0 1px 2px rgba(9, 30, 66, 0.08);
    }}
    h2 {{ margin: 0 0 0.75rem; font-size: 1.05rem; }}
    h3 {{ margin: 1rem 0 0.5rem; font-size: 0.95rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.04em; }}
    table {{ width: 100%; border-collapse: collapse; font-size: 0.92rem; }}
    th, td {{ border: 1px solid var(--border); padding: 0.55rem 0.65rem; vertical-align: top; text-align: left; }}
    th {{ background: #fafbfc; color: var(--muted); font-weight: 600; }}
    .badge {{
      display: inline-block;
      padding: 0.15rem 0.45rem;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 600;
      background: var(--accent-soft);
      color: var(--accent);
    }}
    .badge.epic {{ background: #e3fcef; color: var(--success); }}
    .badge.story {{ background: #fff0b3; color: #974f0c; }}
    .badge.bug {{ background: #ffebe6; color: #bf2600; }}
    ol {{ margin: 0.25rem 0 0 1.25rem; padding: 0; }}
    li {{ margin-bottom: 0.35rem; }}
    dl {{ display: grid; grid-template-columns: 160px 1fr; gap: 0.35rem 1rem; margin: 0; }}
    dt {{ color: var(--muted); font-weight: 600; }}
    dd {{ margin: 0; }}
    pre {{
      background: #091e420a;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.75rem;
      overflow-x: auto;
      font-size: 0.85rem;
    }}
    .note {{ color: var(--muted); font-size: 0.9rem; }}
    .focus {{ border-left: 4px solid var(--accent); padding-left: 0.75rem; }}
  </style>
</head>
<body>
  <header>
    <h1>Local QA Workspace</h1>
    <p>{esc(subtitle)}</p>
  </header>
  <main>
    {body}
  </main>
</body>
</html>
"""


def render_jira_board(backlog: list[dict[str, str]]) -> str:
    rows = []
    for row in backlog:
        issue_type = row.get("Issue Type", "")
        badge_class = "epic" if issue_type.lower() == "epic" else "story"
        rows.append(
            "<tr>"
            f"<td><span class=\"badge {badge_class}\">{esc(issue_type)}</span></td>"
            f"<td><strong>{esc(row.get('Issue Key', ''))}</strong></td>"
            f"<td>{esc(row.get('Summary', ''))}</td>"
            f"<td>{esc(row.get('Priority', ''))}</td>"
            f"<td>{esc(row.get('Epic Name', ''))}</td>"
            f"<td>{esc(row.get('Labels', ''))}</td>"
            "</tr>"
        )
    body = f"""
    <section class="panel">
      <h2>Backlog board</h2>
      <p class="note">Atlas equivalent: Jira board after importing <code>GreenLeaf_Backlog.csv</code>.</p>
      <table>
        <thead>
          <tr>
            <th>Type</th><th>Key</th><th>Summary</th><th>Priority</th><th>Epic</th><th>Labels</th>
          </tr>
        </thead>
        <tbody>{''.join(rows)}</tbody>
      </table>
    </section>
    """
    return page_shell("Jira Board", "Backlog view — GreenLeaf Checkout Overhaul", body)


def render_test_cases(cases: list[dict]) -> str:
    sections = []
    for index, case in enumerate(cases):
        steps = case.get("steps") or []
        step_items = "".join(f"<li>{esc(step)}</li>" for step in steps)
        focus = " focus" if index == 0 else ""
        sections.append(
            f"""
            <section class="panel{focus}">
              <h2>{esc(case.get('id', ''))}: {esc(case.get('title', ''))}</h2>
              <dl>
                <dt>Linked story</dt><dd>{esc(case.get('linked_story', ''))}</dd>
                <dt>Preconditions</dt><dd>{esc(case.get('preconditions', ''))}</dd>
                <dt>Expected result</dt><dd>{esc(case.get('expected_result', ''))}</dd>
              </dl>
              <h3>Test steps</h3>
              <ol>{step_items or '<li class="note">No steps yet.</li>'}</ol>
            </section>
            """
        )
    body = f"""
    <section class="panel">
      <p class="note">Atlas equivalent: Zephyr test case view. The first case is highlighted for portfolio capture.</p>
    </section>
    {''.join(sections)}
    """
    return page_shell("Test Cases", "Zephyr-style test design — GreenLeaf Grocers", body)


def render_bug_report(title: str, bug: dict, api_evidence: dict | None = None) -> str:
    env = bug.get("environment") or {}
    env_items = "".join(
        f"<dt>{esc(key.replace('_', ' ').title())}</dt><dd>{esc(value)}</dd>"
        for key, value in env.items()
    )
    steps = bug.get("steps_to_reproduce") or []
    step_items = "".join(f"<li>{esc(step)}</li>" for step in steps)
    evidence_block = ""
    if api_evidence is not None:
        evidence_block = f"""
        <h3>Captured API evidence</h3>
        <pre>{esc(api_evidence)}</pre>
        """
    body = f"""
    <section class="panel">
      <h2><span class="badge bug">{esc(bug.get('issue_type', 'Bug'))}</span> {esc(bug.get('summary', ''))}</h2>
      <dl>
        <dt>Severity</dt><dd>{esc(bug.get('severity', ''))}</dd>
        <dt>Priority</dt><dd>{esc(bug.get('priority', ''))}</dd>
        <dt>Evidence</dt><dd>{esc(bug.get('evidence', ''))}</dd>
      </dl>
      <h3>Environment</h3>
      <dl>{env_items}</dl>
      <h3>Preconditions</h3>
      <p>{esc(bug.get('preconditions', ''))}</p>
      <h3>Steps to reproduce</h3>
      <ol>{step_items or '<li class="note">No steps yet.</li>'}</ol>
      <h3>Expected result</h3>
      <p>{esc(bug.get('expected_result', ''))}</p>
      <h3>Actual result</h3>
      <p>{esc(bug.get('actual_result', ''))}</p>
      {evidence_block}
    </section>
    """
    return page_shell(title, "Defect report — local Jira-style bug ticket", body)


def main() -> int:
    root = lab_root()
    supporting = root / "supporting-files"
    workspace = root / "workspace"
    rendered = workspace / "rendered"
    rendered.mkdir(parents=True, exist_ok=True)

    backlog = load_backlog(supporting / "GreenLeaf_Backlog.csv")
    test_data = load_json(workspace / "test_cases.json")
    ui_bug = load_json(workspace / "bug_reports" / "ui_bug.json")
    api_bug = load_json(workspace / "bug_reports" / "api_bug.json")

    api_evidence = None
    api_path = root / "evidence" / "api_response.json"
    if api_path.is_file():
        api_evidence = load_json(api_path)

    outputs = {
        "jira_board.html": render_jira_board(backlog),
        "zephyr_testcase.html": render_test_cases(test_data.get("test_cases", [])),
        "bug_report_ui.html": render_bug_report("UI Bug Report", ui_bug),
        "bug_report_api.html": render_bug_report("API Bug Report", api_bug, api_evidence),
    }

    for filename, content in outputs.items():
        (rendered / filename).write_text(content, encoding="utf-8")
        print(f"Wrote {rendered / filename}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
