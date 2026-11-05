# GreenLeaf Grocers — Checkout Overhaul Requirements

This document summarises the preloaded backlog for Capstone Module 1. The full import file is `GreenLeaf_Backlog.csv` in this folder (already on your lab VM — do not download anything).

## Epic: GreenLeaf Checkout Overhaul (GL-E01)

GreenLeaf Grocers is refreshing its checkout flow. The goal is a faster, clearer purchase path for grocery shoppers using the local storefront at `http://localhost:3000`.

## User stories (deliberately high level)

| Key | Summary | What testers must clarify |
| --- | --- | --- |
| GL-101 | Guest Checkout Without Account | Which fields are required? What confirms success? |
| GL-102 | Apply Promo Code at Checkout | Which codes are valid? How is failure shown? |
| GL-103 | Checkout Form Validation | Which fields block submission? What messages appear? |

Professional QA turns vague stories into concrete, traceable test cases before execution begins.

## Application context

- **Catalog:** browse products at `/`
- **Cart:** review items at `/cart`
- **Checkout:** complete purchase at `/checkout` (guest flow — no login)
- **Promo API:** `POST /api/promo/validate` with JSON body `{ "code": "<CODE>" }`
- **Valid promo codes (baseline):** `SAVE10` (10% off), `FRESH5` (5% off)
- **Known test edge input:** `EXPIRED20` (not on the whitelist; behaviour must be verified during execution)

## Atlas skill mapping (local equivalents)

| Professional workflow (Atlas) | This lab VM |
| --- | --- |
| Import backlog into Jira Cloud | Inspect preloaded `GreenLeaf_Backlog.csv`; complete `workspace/test_cases.json`; render `jira_board.html` |
| Author test cases in Zephyr | Complete test case JSON; render `zephyr_testcase.html` |
| Mobile testing on BrowserStack | Chrome DevTools device toolbar at **390 x 844** (localhost is not reachable from cloud device farms without a tunnel) |
| API isolation in Postman | Run `python3 tools/api_probe.py` (stdlib HTTP client; writes `evidence/api_response.json`) |
| File bugs in Jira with evidence | Complete `workspace/bug_reports/*.json`; render bug report pages; save PNG screenshots to `evidence/` |

These substitutions preserve the same QA skills — requirements traceability, structured test design, device-specific UI verification, API-layer isolation, and evidence-backed defect reporting — without external accounts or internet access.
