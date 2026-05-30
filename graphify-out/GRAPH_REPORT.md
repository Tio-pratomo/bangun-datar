# Graph Report - mini_project_membuat_perhitungan_bangun_datar  (2026-05-30)

## Corpus Check
- 28 files · ~33,411 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 223 nodes · 241 edges · 24 communities (14 shown, 10 thin omitted)
- Extraction: 88% EXTRACTED · 9% INFERRED · 3% AMBIGUOUS · INFERRED: 22 edges (avg confidence: 0.78)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `429177ed`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]

## God Nodes (most connected - your core abstractions)
1. `Bangun Datar` - 17 edges
2. `What You Must Do When Invoked` - 15 edges
3. `Step by Step (Action Plan)` - 15 edges
4. `/graphify` - 14 edges
5. `Bangun Ruang` - 9 edges
6. `Glossary` - 6 edges
7. `Kubus (Implementation)` - 6 edges
8. `caveman-commit` - 5 edges
9. `grill-with-docs` - 5 edges
10. `Balok (Implementation)` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Mini Project Perhitungan Bangun Datar` --references--> `Graphify Agent Rules`  [INFERRED]
  readme.md → AGENTS.md
- `App (Navigation)` --references--> `Bangun Ruang`  [EXTRACTED]
  docs/development_log.md → CONTEXT.md
- `Balok Cuboid Illustration PNG` --semantically_similar_to--> `Balok Cuboid Illustration SVG`  [INFERRED] [semantically similar]
  src/img/Balok.png → src/img/balok.svg
- `Mini Project Perhitungan Bangun Datar` --references--> `Bangun Datar`  [EXTRACTED]
  readme.md → CONTEXT.md
- `App (Navigation)` --references--> `Bangun Datar`  [EXTRACTED]
  docs/development_log.md → CONTEXT.md

## Hyperedges (group relationships)
- **Bangun Ruang Calculator Implementations** — devlog_kubus, devlog_balok, devlog_tabung, devlog_kerucut, devlog_bola [EXTRACTED 1.00]
- **Bangun Datar 2D Shapes** — context_persegi, context_persegi_panjang, context_segitiga, context_lingkaran, context_trapesium_datar, context_jajar_genjang, context_belah_ketupat, context_layang_layang [EXTRACTED 1.00]
- **Shared UI Components** — devlog_shapeinput, devlog_shapelayout, devlog_themecontext [EXTRACTED 1.00]
- **3D Shape Illustrations** — img_Balok_png, img_balok_svg, img_Bola_png, img_bola_svg [INFERRED 0.80]
- **2D Flat Shape Illustrations** — img_Belah_Ketupat_png, img_Jajar_Genjang_png [INFERRED 0.80]
- **Geometric Shape Image Assets** — img_Balok_png, img_balok_svg, img_Belah_Ketupat_png, img_Bola_png, img_bola_svg, img_Jajar_Genjang_png [INFERRED 0.90]
- **SVG Vector Illustrations** — img_balok_svg, img_bola_svg [EXTRACTED 1.00]
- **Bangun Ruang (3D Shapes) in Chunk 3** — concept_kerucut, concept_kubus, concept_limas [INFERRED 0.80]
- **Flat Shape Icon Assets** — img_Lingkaran_png, img_Lingkaran_2x_png, img_Persegi_png, img_Persegi_Panjang_png, img_Segitiga_png [INFERRED 0.90]

## Communities (24 total, 10 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.11
Nodes (6): Lingkaran (Circle) Icon @2x Retina, Lingkaran (Circle) Icon, Persegi Panjang (Rectangle) Icon, Persegi (Square) Icon, Segitiga (Triangle) Icon, shapes

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (19): Balok, Bangun Ruang, Bola, Kerucut, Kubus, Limas, Prisma, Tabung (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.09
Nodes (23): Graphify Agent Rules, Bangun Datar, Belah Ketupat, Dark Mode, Jajar Genjang, Konversi Satuan, Layang-layang, Lingkaran (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.11
Nodes (17): dependencies, react, react-dom, devDependencies, daisyui, tailwindcss, @tailwindcss/vite, vite (+9 more)

### Community 4 - "Community 4"
Cohesion: 0.21
Nodes (6): Navbar(), ThemeContext, ThemeProvider(), useTheme(), types, unitData

### Community 5 - "Community 5"
Cohesion: 0.15
Nodes (12): computedHash, skillPath, source, sourceType, computedHash, skillPath, source, sourceType (+4 more)

### Community 7 - "Community 7"
Cohesion: 0.52
Nodes (7): Balok Cuboid Illustration PNG, Belah Ketupat Rhombus Illustration PNG, Bola Sphere Illustration PNG, Jajar Genjang Parallelogram Illustration PNG, Balok Cuboid Illustration SVG, Website Banner Image, Bola Sphere Illustration SVG

### Community 8 - "Community 8"
Cohesion: 0.11
Nodes (18): Log Pengembangan Proyek, Rencana Jangka Pendek, Status Saat Ini, Step 10 — Testing Manual ✅, Step 11 — Finalisasi ✅, Step 12 — Setup daisyUI (Navbar), Step 13 — Refactor Navbar dengan daisyUI, Step 14 — QA Navbar (+10 more)

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (18): Part A - Structural extraction for code files, Part B - Semantic extraction (parallel subagents), Part C - Merge AST + semantic into final extraction, Step 1 - Ensure graphify is installed, Step 2.5 - Transcribe video / audio files (only if video files detected), Step 2 - Detect files, Step 3 - Extract entities and relationships, Step 4 - Build graph, cluster, analyze, generate outputs (+10 more)

### Community 20 - "Community 20"
Cohesion: 0.14
Nodes (13): For --cluster-only, For git commit hook, For /graphify add, For /graphify explain, For /graphify path, For /graphify query, For native CLAUDE.md integration, For --update (incremental re-extraction) (+5 more)

### Community 21 - "Community 21"
Cohesion: 0.22
Nodes (8): Arsitektur, Bangun Datar, Bangun Ruang, Context, Features, Glossary, Konversi Satuan, Tech Stack

### Community 22 - "Community 22"
Cohesion: 0.33
Nodes (5): DESCRIPTION, DESKRIPSI, MATH CALCULATIONS | TWO-DIMENTIONAL FIGURE, PERHITUNGAN MATEMATIKA | BANGUN DATAR, TRANSLATE TO ENGLISH

## Ambiguous Edges - Review These
- `Balok Cuboid Illustration PNG` → `Website Banner Image`  [AMBIGUOUS]
  src/img/banner.jpg · relation: conceptually_related_to
- `Website Banner Image` → `Belah Ketupat Rhombus Illustration PNG`  [AMBIGUOUS]
  src/img/banner.jpg · relation: conceptually_related_to
- `Website Banner Image` → `Bola Sphere Illustration PNG`  [AMBIGUOUS]
  src/img/banner.jpg · relation: conceptually_related_to
- `Website Banner Image` → `Jajar Genjang Parallelogram Illustration PNG`  [AMBIGUOUS]
  src/img/banner.jpg · relation: conceptually_related_to
- `Kerucut.png` → `Kerucut (Cone)`  [AMBIGUOUS]
  src/img/Kerucut.png · relation: references
- `Kubus.png` → `Kubus (Cube)`  [AMBIGUOUS]
  src/img/Kubus.png · relation: references
- `Layang-Layang.png` → `Layang-Layang (Kite)`  [AMBIGUOUS]
  src/img/Layang-Layang.png · relation: references

## Knowledge Gaps
- **116 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+111 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Balok Cuboid Illustration PNG` and `Website Banner Image`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Website Banner Image` and `Belah Ketupat Rhombus Illustration PNG`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Website Banner Image` and `Bola Sphere Illustration PNG`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Website Banner Image` and `Jajar Genjang Parallelogram Illustration PNG`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Kerucut.png` and `Kerucut (Cone)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Kubus.png` and `Kubus (Cube)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._
- **What is the exact relationship between `Layang-Layang.png` and `Layang-Layang (Kite)`?**
  _Edge tagged AMBIGUOUS (relation: references) - confidence is low._