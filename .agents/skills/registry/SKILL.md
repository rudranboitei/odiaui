---
name: odiaui-registry
description: Build, add, update, document, validate, and troubleshoot components, hooks, blocks, and themes in the OdiaUI hosted shadcn registry. Use whenever working on registry items or their docs.
---

# OdiaUI Registry Skill

Build and maintain registry items in `rudranboitei/odiaui` (`https://odiaui.xyz`, namespace `@odiaui`). Follow the exact repository layout and `DESIGN.md` rules—never assume generic shadcn paths.

## 1. Hard Rules (Zero Exceptions)

1. **Read `DESIGN.md` first** before creating or restyling any item. Obey all `--odia-*` token, contrast, motion, and API rules.
2. **Package manager is Bun only.** Use `bun`, `bun run`, `bunx`. Never run `npm`, `pnpm`, or `yarn`, and never create non-Bun lockfiles.
3. **Manifest `files[].path` is relative to the manifest's folder:**
   - Inside `registry/new-york/ui/registry.json` → `"path": "button.tsx"` (NEVER `"registry/new-york/ui/button.tsx"`).
   - Inside `registry/new-york/themes/registry.json` → `"path": "theme-odiaui.css"`.
4. **Demo files live in `components/examples/`** (e.g., `components/examples/button-demo.tsx`), NOT inside `registry/`.
5. **Never hand-edit `public/r/*.json`.** Always regenerate via `bun run registry:build`.
6. **Styling & Token Rules (Tailwind CSS v4):**
   - Use OdiaUI tokens with Tailwind v4 syntax: `bg-(--odia-surface)`, `text-(--odia-ink)`, `border-(--odia-border)`.
   - Never use host shadcn tokens (`bg-card`, `border-input`, `ring-ring`, `text-muted-foreground`) for component colors (only `ring-offset-background` is permitted if documented).
   - Every `--odia-*` token used in `.tsx` MUST appear in that item's `cssVars` (`light` and `dark`) without the `--` prefix (e.g., `"odia-surface": "oklch(...)"`). Every declared token MUST be used.
7. **Consumer-safe imports only:** Shipped files in `registry/` may only import `@/lib/utils`, npm packages listed in `dependencies`, or other registry items listed in `registryDependencies`. Never import from `@/components/examples/` or website-only files.

## 2. Exact Repository Map

```text
odiaui/
├── .agents/skills/registry/SKILL.md   # This skill
├── DESIGN.md                           # Source of truth for tokens, contrast, API & checklist
├── app/                                # Next.js App Router
├── components/
│   ├── examples/                       # Live demos imported by MDX (<name>-demo.tsx)
│   └── ...                             # Website & docs UI wrappers (e.g., ComponentPreview)
├── content/docs/
│   ├── meta.json                       # Main docs navigation
│   └── components/
│       ├── meta.json                   # Component sidebar navigation (slugs without .mdx)
│       └── <name>.mdx                  # Fumadocs component documentation
├── lib/                                # Shared utilities (cn)
├── public/r/                           # Auto-generated registry JSON output
├── registry/
│   └── new-york/
│       ├── ui/
│       │   ├── registry.json           # UI items manifest (paths relative to this folder)
│       │   └── <name>.tsx              # Installable component source
│       └── themes/
│           ├── registry.json           # Theme items manifest
│           └── <name>.css              # Installable theme CSS
├── components.json                     # shadcn config & @odiaui namespace
├── registry.json                       # Root manifest including sub-registries
└── package.json
```

## 3. Mandatory Pre-Edit Inspection

Before writing code, read:
1. `DESIGN.md` (especially token definitions and the pre-ship checklist).
2. Closest existing component in `registry/new-york/ui/*.tsx` + its entry in `registry/new-york/ui/registry.json`.
3. Closest existing demo in `components/examples/*-demo.tsx` + its doc in `content/docs/components/*.mdx`.
4. `package.json` to confirm exact script names.

## 4. Workflow: Adding or Updating a UI Item

Execute these steps in order:

1. **Create Component (`registry/new-york/ui/<name>.tsx`)**
   - Kebab-case filename.
   - Extend native HTML element props; merge `className` via `cn` from `@/lib/utils`.
   - Keep Odisha motifs refined, optional/configurable via props when appropriate, and functional in both light and dark modes.
   - Match existing ref-forwarding and export conventions.

2. **Register Item (`registry/new-york/ui/registry.json`)**
   - Add entry with `"path": "<name>.tsx"` (relative path only).
   - List runtime npm imports in `"dependencies"` and OdiaUI/shadcn items in `"registryDependencies"` (e.g., `["utils"]` or `["button"]`).
   - Declare exact `"cssVars"` (`light` and `dark`) for every `--odia-*` variable used.

3. **Create Demo (`components/examples/<name>-demo.tsx`)**
   - Import the real registry component from `@/registry/new-york/ui/<name>`.
   - Showcase key variants, states, and Odisha heritage options cleanly.

4. **Create Docs (`content/docs/components/<name>.mdx`) & Update Nav (`content/docs/components/meta.json`)**
   - Match frontmatter and `<ComponentPreview>` / `<Tabs>` structure of neighboring `.mdx` files.
   - Document installation (`bunx shadcn@latest add @odiaui/<name>`), usage, variants, props table, and accessibility notes.
   - Add `"<name>"` (no `.mdx` extension) to `content/docs/components/meta.json`.

5. **Build & Validate**
   ```bash
   bun run registry:build
   bunx tsc --noEmit
   ```
   - Inspect `public/r/<name>.json` to verify `files`, `dependencies`, `registryDependencies`, and `cssVars` are accurate.
   - Run any lint/format/build scripts defined in `package.json`.

## 5. Registry Item Types & Dependencies

| Type | Use For |
| :--- | :--- |
| `registry:ui` | Base primitives (`button`, `card`, `badge`, `slider`, `switch`) |
| `registry:component` | Composite or domain-specific React components |
| `registry:block` | Multi-file composed sections/patterns (list every file in `files[]`) |
| `registry:hook` | Reusable React hooks |
| `registry:lib` | Helper/utility modules |
| `registry:theme` | Theme CSS files (`registry/new-york/themes/`) |

- **`dependencies`**: Only npm packages imported by shipped registry files.
- **`registryDependencies`**: Only registry item names (e.g., `"button"`, `"utils"`), never npm packages.

## 6. Consumer Installation Verification

Never claim an item works for end users until verified in a clean consumer Next.js + shadcn project:

```bash
# Terminal 1 (in odiaui/)
bun run dev

# Terminal 2 (in clean consumer app)
bunx shadcn@latest add http://localhost:3000/r/<name>.json
```

Verify in the consumer app:
- Component installs into `components/ui/<name>.tsx` with zero broken imports.
- All `--odia-*` variables inject cleanly into the consumer's CSS with light and dark values.
- `bunx tsc --noEmit` passes and light/dark modes render properly without modifying global CSS.

## 7. Pre-Completion Audit

Before finishing any task, verify:
- [ ] `DESIGN.md` checklist passed.
- [ ] `files[].path` in `registry/new-york/ui/registry.json` has no folder prefix (`<name>.tsx`).
- [ ] Every `--odia-*` token in `.tsx` matches `cssVars` 1:1 (and uses Tailwind v4 `bg-(--odia-*)` syntax).
- [ ] Demo exists at `components/examples/<name>-demo.tsx` and imports `@/registry/new-york/ui/<name>`.
- [ ] Slug added to `content/docs/components/meta.json`.
- [ ] `bun run registry:build` succeeded and `public/r/<name>.json` was inspected.
