# CODEX TASK 01 — Base Routing & Pages v1.5 White Premium

Read these files first if they exist in the repo:

```text
PRD.md
docs/PRD_EXECUTION_PATCH_v1_5_WHITE_PREMIUM.md
```

## Task Scope

TASK 1 ONLY: Base Routing & Page Structure.

Goal:

Prepare the V1 multi-page structure without redesigning the full website.

Create or verify these routes:

```text
/
/work
/capabilities
/library
/workspace
```

Create `/process` only if the existing project already expects it or if it is needed as a fallback alias. Do not create unnecessary routes.

---

## Strict Rules

Do not redesign the homepage yet.

Do not build:

```text
- full header
- rich dropdown navigation
- Creative Finder
- motion/video section
- full homepage sections
- AI Workspace generator logic
- dynamic /work/[slug] routes yet
```

Do not add:

```text
- AI API
- Gemini API
- OpenAI API
- external search libraries
- Algolia
- ElasticSearch
- vector search
- database search
- dark/light theme toggle
- flag icons
- random dummy content
- fake client logos
- fake achievements
```

Do not remove:

```text
- Download CV requirement
- Hire Me requirement
- ID / EN requirement
```

Do not include:

```text
- Carlos
- fashion designer positioning
- old PDF content as final content
- generic lorem ipsum
```

---

## Important Note About Creative Finder Dictionary

Do not implement Creative Finder in this task.

Do not add the dictionary yet unless the repo already has a clear data folder and the project convention is obvious.

When Creative Finder is implemented later, the dictionary file must be named:

```text
creativeFinderDictionary.ts
```

Preferred path:

```text
src/data/creativeFinderDictionary.ts
```

If the project does not use `/src`, use the closest existing data convention.

---

## Page Placeholder Requirements

Use minimal intentional placeholders only.

### Home `/`

Page title:

```text
Gustiansyah
```

Note:

```text
Homepage structure will follow the locked PRD order.
```

Show the locked order as a simple list:

```text
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
```

### Work `/work`

Page title:

```text
Featured Work
```

Include placeholders:

```text
- STARMAP
- ALFAS FRAGRANCE
- FABIL NATURAL
- FAT SPORT
```

Do not create dynamic detail pages yet.

### Capabilities `/capabilities`

Page title:

```text
Capabilities
```

Include placeholders:

```text
- AI Product Visuals
- AI Video Production
- AI Photoshoot
- Ecommerce Campaigns
- UGC Content Direction
- Motion Design
- PDP / Product Display Design
- Branding & Packaging
```

### Library `/library`

Page title:

```text
Creative Library
```

Include category placeholders:

```text
- Product Visuals
- AI Photoshoot
- AI Video
- Catalog
- Lookbook
- UGC
- Motion
- PDP / Product Page
- Campaign
- Packaging
- Branding
- China Ecommerce
- Korean Minimalist / Coming Soon
- Experiments
```

### Workspace `/workspace`

Page title:

```text
AI Workspace Preview
```

Include workflow placeholders:

```text
- Product Input
- Reference & Direction
- AI Photoshoot Output
- Catalog / Lookbook Output
- Campaign Output
- UGC Concept Output
- AI Video Direction
- PDP / Product Page Output
- Motion Reveal
```

---

## Visual Foundation for Placeholders

Use the original v1.0 visual direction:

```text
- Clean, premium white-based canvas.
- Editorial style with expansive negative space / whitespace.
- High contrast typography with deep grey or soft black on white.
- Premium spacing.
- Clean readable structure.
- Not a generic CV template.
```

Do not create a dark mode or dark neutral background.

Recommended placeholder style:

```text
background: #FFFFFF or #FAFAFA
text: #111111 / #1E1E1E / #333333
secondary text: #555555
borders/dividers: #E8E8E8 or #D8D8D8
```

---

## Technical Expectations

- Use existing project conventions.
- Do not introduce unnecessary dependencies.
- Do not break existing routes.
- Make sure the app runs locally with:

```bash
npm run dev
```

- If the project uses TypeScript, avoid type errors.
- If the project has lint/build rules, do not knowingly violate them.

---

## Localhost Testing Requirement

After finishing, the project must be testable locally:

```bash
npm run dev
```

Expected routes:

```text
http://localhost:3000
http://localhost:3000/work
http://localhost:3000/capabilities
http://localhost:3000/library
http://localhost:3000/workspace
```

---

## Report Back

After implementation, report:

1. Files changed
2. Routes created or verified
3. Any assumptions made
4. How to test locally with `npm run dev`
5. Anything intentionally not completed because it belongs to later tasks
