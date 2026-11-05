# Test Case Field Guide

Use this checklist when completing `workspace/test_cases.json`. Each case must link to one backlog story and be executable by someone who has never seen the feature.

## Required fields

| Field | Guidance |
| --- | --- |
| **id** | Stable identifier, e.g. `TC-GL-01` |
| **linked_story** | Issue key from the backlog (`GL-101`, `GL-102`, or `GL-103`) |
| **title** | Action-oriented: what behaviour is verified |
| **preconditions** | System state *before* steps — cart contents, page location, data already entered |
| **steps** | Numbered, atomic actions (one user action per step) |
| **expected_result** | Observable outcome after the final step |

## Quality bar

- **Atomic steps:** "Click **Submit Order**" and "Observe the confirmation page" are separate steps.
- **Observable results:** "Order confirmation page shows order total and thank-you message" beats "checkout works."
- **No duplication:** three cases must cover three different behaviours (happy path, validation, promo edge case).
- **Traceability:** each case maps to exactly one user story.

## Coverage targets for this lab

1. **Guest checkout happy path** — linked to GL-101
2. **Required-field validation** — linked to GL-103
3. **Promo code edge case** — linked to GL-102 (include invalid or expired code behaviour)
