#!/usr/bin/env python3
"""POST EXPIRED20 to the local GreenLeaf promo endpoint and capture the response."""

from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

DEFAULT_URL = "http://localhost:3000/api/promo/validate"
REQUEST_BODY = {"code": "EXPIRED20"}


def lab_root() -> Path:
    return Path(__file__).resolve().parent.parent


def post_promo(url: str = DEFAULT_URL) -> dict:
    payload = json.dumps(REQUEST_BODY).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=10) as response:
            body_bytes = response.read()
            status = response.status
    except urllib.error.HTTPError as err:
        body_bytes = err.read()
        status = err.code
    except urllib.error.URLError as err:
        print(f"Connection error: {err.reason}", file=sys.stderr)
        raise SystemExit(1) from err

    body_text = body_bytes.decode("utf-8", errors="replace")
    try:
        response_body = json.loads(body_text)
    except json.JSONDecodeError:
        response_body = body_text

    return {
        "method": "POST",
        "url": url,
        "request_body": REQUEST_BODY,
        "status_code": status,
        "response_body": response_body,
    }


def main() -> int:
    result = post_promo()
    evidence_dir = lab_root() / "evidence"
    evidence_dir.mkdir(parents=True, exist_ok=True)
    output_path = evidence_dir / "api_response.json"
    output_path.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")

    print(f"Method: {result['method']}")
    print(f"URL: {result['url']}")
    print(f"Request body: {json.dumps(result['request_body'])}")
    print(f"Status: {result['status_code']}")
    print(f"Response: {json.dumps(result['response_body'])}")
    print(f"Saved: {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
