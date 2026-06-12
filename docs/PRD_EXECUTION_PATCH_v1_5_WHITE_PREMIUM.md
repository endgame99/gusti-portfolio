# PRD Execution Patch v1.5 — White-based Premium + Localhost Pipeline

This patch supersedes earlier operational patches.

It locks the final execution workflow and restores the original visual direction:

**White-based Premium.**

Figma is removed from the live execution pipeline.  
Localhost QA using `npm run dev` is mandatory before GitHub/Vercel milestone deployment.

---

## 1. Final Execution Pipeline

Use this pipeline:

```text
GPT / Gemini
→ Codex
→ Localhost Preview using npm run dev
→ Local Visual QA
→ GitHub
→ Vercel only after milestone
```

Do not use this pipeline:

```text
GPT / Gemini
→ Codex
→ Figma live sync
→ GitHub
→ Vercel every task
```

The old pipeline is rejected because it is slow, memory-heavy, and creates CI/CD review loops.

---

## 2. Figma Policy — Removed from Live Pipeline

Figma must not be part of the live coding/debugging pipeline.

### Not allowed during active coding

- Do not run Figma MCP live with Codex.
- Do not expect Codex to “look at Figma” during implementation.
- Do not use Figma as a live design-code sync tool.
- Do not keep Figma open during localhost QA if the PC becomes slow.
- Do not use Figma as a mandatory step before every code task.

### Allowed use

Figma may only be used as:

- A static visual reference.
- A moodboard.
- A separate offline visual canvas.
- A rough layout reference if opened separately and then closed before coding.

Figma is optional, not operational.

---

## 3. Localhost QA Is Mandatory

Localhost Preview means running the project locally using:

```bash
npm run dev
```

Then opening the local URL, usually:

```text
http://localhost:3000
```

If port 3000 is busy, use the port shown by the terminal, for example:

```text
http://localhost:3001
```

### Localhost QA must happen before:

- approving a Codex task
- merging a PR
- pushing to main
- deploying a milestone to Vercel

### Localhost QA checks

For every task, test:

- page loads without terminal error
- no TypeScript/runtime error
- no broken import
- no layout crash
- no wrong dummy content
- no Carlos
- no fashion designer positioning
- no dark/light toggle
- no flag icon
- no accidental removal of Download CV
- no accidental removal of Hire Me
- responsive sanity check if the task affects layout

---

## 4. Vercel Usage Rule

Vercel is not a task review tool.

Vercel is only used after a milestone is stable locally.

### Do not use Vercel for:

- checking a text change
- checking a dropdown
- checking spacing
- checking hero copy
- checking one component
- debugging TypeScript errors
- debugging route errors

### Use Vercel only after milestones such as:

- Milestone 1: Base routes + header + rich dropdown stable locally
- Milestone 2: Homepage full flow stable locally
- Milestone 3: Work / Capabilities / Library stable locally
- Milestone 4: Final V1 QA

---

## 5. Visual Direction Update — White-based Premium

The website must utilize a clean, white-based interface.

### Direction

The UI should feel:

- premium
- restrained
- intentional
- white-based with gallery/editorial feel
- expansive whitespace inspired by AKQA / Apple / Behance / Pinterest clarity
- harmonized
- confident
- not too decorative
- not like a generic CV template

### Background

Use a clean, premium white or soft off-white canvas.

Recommended canvas values:

```text
#FFFFFF
#FAFAFA
#F7F8FA
#F6F6F4
```

Do not create a dark mode or dark neutral background for V1.

### Typography

Use crisp typography with high contrast:

- deep grey
- soft black
- charcoal text on the white canvas

Recommended text values:

```text
#111111
#1E1E1E
#333333
#555555
```

Avoid pure black everywhere if it creates harshness. Use visual hierarchy.

### Library Direction

`/library` should feel like an organized visual vault, not a chaotic moodboard.

Use a high-density Pinterest-style fluid masonry grid, but grounded in a clean white canvas with mathematically precise gaps.

The Library should feel:

- dense but not messy
- editorial but expandable
- easy to scan
- premium and organized
- like a visual archive, not a random dump

### Harmonization Rule

The website must not look like screenshots from different websites stitched together.

All sections must share one unified design language.

White-based does not mean boring. The work provides the color, texture, contrast, and visual power.

---

## 6. GitHub File Placement — Locked

Commit these docs/reference files to the repo:

```text
PRD.md
docs/PRD_EXECUTION_PATCH_v1_5_WHITE_PREMIUM.md
docs/TUTORIAL_EKSEKUSI_GUSTI_PORTFOLIO_v1_5_WHITE_PREMIUM.md
docs/CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md
docs/CHECKLIST_LOCALHOST_QA_v1_5_WHITE_PREMIUM.md
```

Creative Finder dictionary must not be committed at root.

When Creative Finder is implemented, place it here if the project uses `/src`:

```text
src/data/creativeFinderDictionary.ts
```

If the project does not use `/src`, use the nearest project convention:

```text
data/creativeFinderDictionary.ts
```

or:

```text
app/data/creativeFinderDictionary.ts
```

The file name must be:

```text
creativeFinderDictionary.ts
```

---

## 7. Creative Finder Route Safety

Creative Finder V1 must not route users to pages that do not exist yet.

Do not use dynamic detail URLs such as:

```text
/work/alfas-fragrance
```

unless the dynamic route has already been implemented.

Until dynamic work detail pages exist, use safe existing routes such as:

```text
/work?project=alfas-fragrance
/library?tag=fragrance
/capabilities#ai-product-visuals
/workspace?input=fragrance
```

Later, if `/work/[slug]` is implemented, the route can be upgraded to:

```text
/work/alfas-fragrance
```

---

## 8. Work Detail Route Requirement

A future task must create dynamic work detail routes or an equivalent detail structure.

Recommended future route:

```text
/work/[slug]
```

Required initial slugs:

```text
/work/starmap
/work/alfas-fragrance
/work/fabil-natural
/work/fat-sport
```

Until that task is complete, dictionary links should avoid those dynamic paths.

---

## 9. Creative Finder Implementation Rule

Creative Finder V1 must use a hardcoded dictionary array.

Required file name:

```text
creativeFinderDictionary.ts
```

Required file path:

```text
src/data/creativeFinderDictionary.ts
```

or project-equivalent data path.

Forbidden in V1:

- AI API
- Gemini API
- OpenAI API
- Algolia
- ElasticSearch
- vector database
- external search library
- semantic embedding search
- backend database search

Required logic:

```text
input
→ normalize lowercase
→ match keywords
→ score matches
→ return route suggestions
→ fallback to custom brief / Hire Me
```

---

## 10. Codex Task Rule

Codex must receive only one micro-task at a time.

Do not ask Codex to build the whole website in one task.

Each Codex prompt must include:

- exact task scope
- files/route target if known
- what not to touch
- acceptance criteria
- localhost test requirement
- output report format

---

## 11. Updated Implementation Order

Use this order:

1. Task 1 — Base Routing & Pages
2. Task 2 — Header + Rich Dropdown Navigation
3. Task 3 — Homepage Opening Hero Text + Motion Slot + Core Hero Text
4. Task 4 — Creative Finder + hardcoded JSON dictionary
5. Task 5 — Featured Work section
6. Task 6 — Capabilities Preview section
7. Task 7 — Creative Library Preview section
8. Task 8 — AI Workspace / Generator Preview section
9. Task 9 — Footer
10. Task 10 — Work page
11. Task 11 — Capabilities page
12. Task 12 — Library page
13. Task 13 — Workspace / Process page
14. Task 14 — Responsive QA
15. Task 15 — Milestone Vercel deploy

Each task must pass localhost QA before moving forward.

---

## 12. Updated Homepage Order

Homepage order remains locked:

1. Header
2. Opening Hero Text
3. Motion / Video Journey Preview
4. Core Hero Text
5. Creative Finder
6. Featured Work
7. Capabilities Preview
8. Creative Library Preview
9. AI Workspace / Generator Preview
10. Footer

### Opening Hero Text

```text
Hello everyone.
Where should we start?
```

### Core Hero Text

```text
Informed by data.
Shaped by imagination.
Produced with AI.
```

### Core Hero Subheadline

```text
Product visuals, AI videos, ecommerce campaigns, and brand content shaped through research, creative direction, and production workflows.
```

---

## 13. Header V1 Requirement

Header must include rich dropdown navigation in V1.

Header structure:

```text
[GS] Gustiansyah | Work | Capabilities | Library | Download CV | Hire Me | ID / EN
```

Rules:

- `[GS] Gustiansyah` is one unified brand lockup.
- GS logo is circular for V1.
- Work / Capabilities / Library use rich dropdowns on desktop.
- Mobile uses accordion navigation.
- Download CV remains in header.
- Hire Me remains in header and links to WhatsApp.
- ID / EN is text-based.
- No flag icon.
- No dark/light toggle.
