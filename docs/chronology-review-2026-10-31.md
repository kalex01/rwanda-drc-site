# Chronology reconciliation — 31 October 2026

## Scope and editorial result

The Context page and appendix timeline now use one source-controlled chronology in `app/data/chronology.ts`. Both render the same dates, titles and summaries; the appendix also explains significance. Marker counts derive from the data. The source register uses the same reference registry. This removes the duplicated data that allowed the original inconsistency.

The shared coverage date is **31 October 2026**, a research cutoff rather than a claim of exhaustive coverage. The latest selected milestone is dated 28 October. No later events are inferred from the cutoff.

The update distinguishes the First Congo War (1996–1997), Second Congo War (1998–2003), and subsequent insecurity. It dates M23's renewed rebellion from 2021. Recent coverage includes the 2025 military escalation, UN demands, Washington and Doha agreements, Uvira, March 2026 sanctions and commitments, subsequent verification work, sanctions, African mediation and October developments.

## Evidence register

Every event links to its supporting documents on both pages. Exact URLs are maintained in the shared registry and displayed in `/appendix/sources`.

- Historical background: UN MONUC account and UN peacekeeping historical overview. MONUSCO's *Pathways Home* retrospective supports the 2012–2013 military chronology.
- 2025 escalation and demands: UN reporting and Security Council Resolution 2773. The resolution explicitly addresses RDF support to M23 as well as Congolese military support to the FDLR; the entry preserves both without presenting them as legally identical conduct.
- Washington: the 27 June agreement text preserved by Refworld and UN reporting on the 4 December endorsement. These are separate milestones, not contradictory signing dates.
- Doha: Qatar's announcements of the 19 July declaration and 15 November framework. These involve the DRC and AFC/M23, distinct from the interstate Washington track.
- March 2026: OFAC's dated list establishes the RDF and four officer designations. Treasury supplies its stated grounds. Rwanda's 2 March statement documents its objections, not independent proof of its accusations. Treasury also describes the Uvira offensive and subsequent exit.
- March talks: the 18 March tripartite statement is reproduced by Mirage News and independently corroborated by Reuters (19 March). The original State Department URL returned 403 in the research service, so the reproduced statement is clearly labelled. The April joint oversight statement published by Qatar News Agency also confirms the March 17–18 meetings.
- April–June: joint statements establish the Montreux verification arrangements and London oversight meeting; Treasury documents the Kabila, M23/FDLR commander and minerals-network designations. The London statement is a State Department release reproduced by PublicNow, labelled as a joint statement rather than independent reporting.
- August: Qatar's 27 August statement records the 24 August Minembwe EJVM+ field mission. Its favourable interpretation is not treated as proof of an effective region-wide ceasefire.
- October: the AU's 9 October statement dates its Kigali consultations to 6 October. Treasury's 28 October release documents the defence ministry and Zigama designations; Reuters reports Rwanda's and the DRC's responses separately.

## Claims deliberately not made

This update does not assert that announced troop disengagement or FDLR neutralization was completed, that every protocol was concluded, that a durable ceasefire was established, or that sanctions constitute criminal convictions. Those claims require further implementation evidence. It does not adjudicate every underlying government allegation. Dates used to order year-only or multi-month events are internal sorting keys, not claims about precise start dates.

Existing images, assets, layout and navigation are retained. Their exact photographed occasions and licensing were not re-audited; generic existing descriptions do not claim an image depicts a newly added 2026 event. Unrelated narrative chapters, legal-accountability biographies and current-officeholder details were not comprehensively re-audited.

## Validation and release

Baseline: `52a3aa6ab5ac793b69f3b89aac173a1a0ea41c0b` (21 April 2026).

- Installed locked dependencies with `npm ci` and read the installed Next.js 16.2.1 server-component/page guides required by AGENTS.md.
- `npx tsc --noEmit`: passed.
- ESLint on the five changed application files: passed.
- Full `npm run lint`: fails on the pre-existing `react-hooks/set-state-in-effect` error in unchanged `app/components/SiteHeader.tsx:26`. No suppression or unrelated header change is included.
- `npm run build`: passed for all 42 generated routes with the final 22-event chronology.
- `git diff --check`: passed.
- Built HTML validation: all 22 event titles and summaries occur on both pages in chronological order, all per-event citations render, and the source register contains all references.
- Managed local browser preview is unavailable: it appends Vite flags (`--host`, `--strictPort`) to Next.js, which rejects them. Do not change the application's working dev script to compensate. Browser QA must use the repository's Vercel branch preview before merging.

Before merge, inspect both pages and the source register at mobile, tablet and desktop widths; confirm dates, all events in the same order, images, source links, keyboard focus, navigation and no horizontal overflow. Verify the preview deployment's commit. Merge only the reviewed head; then verify the production alias against the resulting merge commit and check the live rendered content.

Vercel team access is required to confirm the existing project's release configuration. Do not change project audience, domains, billing, integrations or unrelated projects. Record final PR, merge SHA, deployment ID/URL and live checks in the completion report.

## Release preparation checkpoint

GitHub API writes returned HTTP 403 (`Resource not accessible by integration`). Alex authorized a browser fallback and signed in; the review branch was created through GitHub’s web interface. Vercel team access was subsequently confirmed. Browser validation, PR review and production verification are release steps; their final results belong in the PR/completion report. The full-repository lint finding is unchanged and outside the authorized correction scope.
