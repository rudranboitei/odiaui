---
name: odiaui-registry
description: Build, add, update, document, validate, and troubleshoot components, hooks, blocks, and themes in the OdiaUI hosted shadcn registry. Use whenever working on registry items or their docs.
---

# OdiaUI Registry Skill

Use this skill whenever adding, modifying, reviewing, documenting, or debugging an OdiaUI registry item. Follow the repository's existing implementation rather than assuming a generic shadcn project layout.

## 1. Project identity and fixed decisions

- Project: **OdiaUI**, an open-source React component library built on the shadcn registry model.
- Philosophy: **Modern UI. Rooted in Odisha. Built for everyone.**
- Distribution: hosted shadcn registry at `https://odiaui.xyz`.
- Registry namespace: `@odiaui`.
- Framework: Next.js App Router.
- UI stack: React, TypeScript, Tailwind CSS v4, shadcn registry conventions, Radix primitives as configured by the project.
- Documentation: Fumadocs with MDX.
- Package manager: **Bun only**. Use the existing `bun.lock`; do not introduce npm, pnpm, or yarn lockfiles.
- Registry style: `new-york`.
- This is a single repository, not a monorepo.

Do not change these architectural decisions unless the user explicitly asks.

## 2. Inspect before editing

Before making changes:

1. Read `DESIGN.md` and the closest existing component before touching styles or APIs.
2. Read `package.json`, `components.json`, `.scn-stack.json`, and the root `registry.json`.
3. Read `registry/new-york/ui/registry.json` and, when relevant, `registry/new-york/themes/registry.json`.
4. Inspect the closest existing component in `registry/new-york/ui/` and its matching page in `content/docs/components/`.
5. Inspect the related example/demo under the existing examples/components structure before creating a new preview.
6. Check the current Git diff and avoid overwriting unrelated user changes.

Do not assume paths, scripts, aliases, dependencies, or Fumadocs conventions. Confirm them in the repository first.

## 3. Repository map

The current repository uses this structure:

```text
odiaui/
├── .agents/skills/registry/SKILL.md  # This skill
├── DESIGN.md                          # Canonical design system & UI rules
├── app/                              # Next.js App Router
├── components/                       # Website and documentation UI
├── content/docs/                     # Fumadocs MDX pages
│   ├── meta.json                     # Main docs navigation
│   └── components/
│       ├── meta.json                 # Component docs navigation
│       └── <name>.mdx                # Component documentation
├── lib/                              # Shared project utilities
├── public/r/                         # Generated registry JSON; never edit by hand
├── registry/
│   └── new-york/
│       ├── ui/
│       │   ├── registry.json         # UI registry items
│       │   └── *.tsx                 # Installable component source
│       └── themes/
│           ├── registry.json         # Theme registry items
│           └── *.css                 # Installable theme files
├── components.json                   # shadcn aliases and @odiaui namespace
├── registry.json                     # Root registry; includes sub-registries
├── package.json
└── bun.lock
```

Important registry details:

- The root `registry.json` is the registry entry point. It currently includes the UI and theme registry manifests.
- `registry/new-york/ui/registry.json` is the manifest for UI items. Its `files[].path` values are relative to `registry/new-york/ui/` (for example, `button.tsx`).
- `registry/new-york/themes/registry.json` is the manifest for theme items. Its file paths are relative to `registry/new-york/themes/`.
- `public/r/` contains generated output. Never hand-edit generated JSON there.
- Keep the root `registry.json` include list in sync if a genuinely new sub-registry is introduced. Do not create a new registry directory or alter the include list for an ordinary component.

## 4. OdiaUI design principles

Every new item must fit the product, not just compile.

**Canonical spec:** [`DESIGN.md`](../../../DESIGN.md) at the repository root is the
source of truth for color, contrast, dark mode, motion, accessibility, component API,
and the pre-ship checklist. Read it before creating or restyling any item, and verify
the checklist before declaring work complete.

### Visual direction

- Modern, minimal, polished, reusable UI.
- Odisha heritage can inform details through restrained motifs, geometry, linework, or ornamentation.
- Cultural details must feel intentional and contemporary, not like tourism-site decoration.
- Do not add robots, generic AI visuals, random gradients, excessive glow, or decorative noise.
- Do not force an Odisha motif into a component where it harms clarity or usability.
- Heritage treatment should be optional/configurable when appropriate (for example, a documented `watermark` or decoration control), not hard-coded into generic behavior.
- Do not add a separate component just to duplicate an existing base component. OdiaUI has one shared/base `Button`; build on it instead of creating another competing button API.

### Styling and host-project independence

- A component installed into another app must retain its documented appearance and behavior in different host themes.
- Prefer explicit, local Tailwind utilities for component-specific visual treatment.
- Do not depend accidentally on a consumer's global CSS, custom theme, or undocumented CSS variables.
- Use semantic shadcn tokens only when theme adaptation is an intentional part of the component contract; document that behavior.
- Do not modify the consumer's global stylesheet, shadcn base components, or unrelated shared styles to make one registry item work.
- Keep styles scoped to the component and its supporting files.
- Test in both light and dark mode and against a host app with a different theme.

### API and quality

- Use clear, predictable prop names and sensible defaults.
- Support `className` where it makes sense and merge classes with the repository's existing `cn` utility.
- Preserve native HTML attributes and event handlers by extending the correct React element attribute type.
- Use correct semantic elements, accessible labels, keyboard behavior, visible focus states, and disabled states.
- Support responsive layouts and avoid fixed dimensions unless the design requires them.
- Avoid unnecessary dependencies, abstractions, effects, client components, and duplicated state.
- Keep TypeScript strict and avoid `any` unless there is a documented reason.
- Follow the existing component's export and ref-forwarding pattern. Do not mechanically add `forwardRef` to every component; use it when refs are part of the component API or the established pattern requires it.

## 5. Adding a UI component

For a normal reusable component:

1. Choose a kebab-case registry item name, such as `segmented-control`.
2. Create its source under `registry/new-york/ui/`.
3. Add its metadata to `registry/new-york/ui/registry.json`.
4. Add an MDX page at `content/docs/components/<name>.mdx`.
5. Add the page name to `content/docs/components/meta.json`.
6. Add or update a live example using the repository's existing preview pattern.
7. Build the registry and run available checks.
8. Test the generated item in a separate consumer app.

Do not put a component only in `components/` and assume it is installable. The installable source belongs in `registry/new-york/ui/` and must be included in the registry manifest.

### Registry item example

The UI manifest currently stores paths relative to `registry/new-york/ui/`:

```json
{
  "name": "segmented-control",
  "type": "registry:ui",
  "title": "Segmented Control",
  "description": "A compact control for selecting one option from a set.",
  "files": [
    {
      "path": "segmented-control.tsx",
      "type": "registry:ui"
    }
  ]
}
```

Only add dependency fields when the source actually needs them:

```json
{
  "dependencies": ["lucide-react"],
  "registryDependencies": ["button"]
}
```

Keep JSON valid. Preserve existing entries and ordering conventions. Do not replace the whole manifest just to add one item.

## 6. Registry types and dependency rules

Use the narrowest correct item type:

- `registry:ui` — reusable UI primitives such as Button, Card, Badge, Input.
- `registry:component` — a custom React component that is not a primitive/UI primitive.
- `registry:block` — a larger composed pattern or ready-to-use section, often containing multiple files.
- `registry:hook` — reusable React hook.
- `registry:lib` — reusable utility/helper file.
- `registry:theme` — theme CSS and related theme metadata.
- `registry:file` — supporting file that does not fit another type.
- `registry:page` — page/route-oriented item when genuinely appropriate.

Dependency rules:

- `dependencies`: npm packages the installing project needs at runtime (for example, `lucide-react`, `motion`, or `sonner`). Add only packages imported by the shipped files.
- `devDependencies`: packages needed only to develop/build the registry item, not by the installed component. Do not put ordinary runtime imports here.
- `registryDependencies`: other registry items required by this item. For an item in this same OdiaUI registry, use its actual item name (for example, `button`), not a guessed path or package name.
- For a component from another registry, use the exact supported namespace item or URL format and verify it before adding it.
- Do not list a dependency merely because it exists in the repository. Trace actual imports and usage.
- Do not duplicate a primitive that already exists in OdiaUI. Reuse the existing item where appropriate.
- If a dependency is already supplied by the target project's normal shadcn setup, still declare it only when the registry schema and installation contract require it. Verify behavior with a real install rather than guessing.

A multi-file block should list every required source file in `files[]`. Give each file the correct registry type (`registry:component`, `registry:hook`, `registry:lib`, etc.). Missing a helper file is a common cause of broken installs.

## 7. Adding hooks

- Place hook source in the location used by the existing registry conventions; inspect the current registry structure before choosing a path.
- Register it as `registry:hook` in the appropriate included manifest.
- Keep hooks focused and framework-appropriate.
- Document required inputs, returned values, side effects, and a usage example.
- Include every helper file the hook imports.
- Avoid adding a hook when a small local function or existing React primitive is sufficient.

## 8. Adding blocks

A block is a composed pattern, not simply a large primitive.

Before implementation:

1. Identify the intended use case and the consumer-facing result.
2. Break the block into its source components, hooks, and helper files.
3. Reuse OdiaUI primitives (especially the shared Button) instead of copying their implementation.
4. Decide which dependencies are npm packages and which are registry items.
5. Define a clear, documented public API and sensible defaults.

For the registry item:

- Use `registry:block` for the top-level item.
- List every shipped file in `files[]` with its correct file type.
- List every required npm package in `dependencies`.
- List required registry items in `registryDependencies`.
- Avoid relying on files that exist only in the OdiaUI website repository unless those files are included in the installable item or are guaranteed by the consumer's standard shadcn setup.

Document installation, imports, props, composition, and at least one complete working example. Test the block in a clean consumer project, not only on the OdiaUI documentation site.

## 9. Fumadocs documentation

For each public component or block, create or update:

`content/docs/components/<name>.mdx`

Follow the frontmatter and MDX component conventions of nearby pages. The current component docs use frontmatter similar to:

```mdx
---
title: Segmented Control
description: A compact control for selecting one option from a set.
---
```

A useful page should include, as relevant:

- Preview using the repository's existing `ComponentPreview` pattern.
- Installation command: `bunx shadcn@latest add @odiaui/<name>`.
- Import path matching the installed file and configured aliases.
- Basic usage example that compiles.
- Variants, sizes, states, and composition examples.
- Important props and defaults.
- Accessibility and keyboard notes for interactive components.
- Any required dependencies or limitations.

Update `content/docs/components/meta.json` by adding the page slug to its `pages` array. Preserve existing pages. Do not add `.mdx` to the slug unless neighboring metadata does so.

If the page uses a live demo, create/update the demo following existing examples and preview components. Ensure imports resolve and the preview demonstrates the actual registry component rather than a separate mock implementation.

## 10. Examples and source parity

- The installable source in `registry/new-york/ui/` is the source of truth for what users receive.
- A documentation demo must import/use the same component behavior and API that the registry ships.
- Do not implement a visually different copy solely for the docs preview.
- Keep demo-only code out of the registry item unless consumers need it.
- When updating a component API, update its docs, examples, and any internal site usage in the same change.

## 11. Build and validation workflow

Use Bun and the scripts that actually exist in `package.json`.

Typical workflow:

```bash
bun install
bun run registry:build
bun run dev
```

The current `registry:build` script runs `shadcn build` and generates registry JSON under `public/r/`.

Before finishing:

1. Walk through the pre-ship checklist in `DESIGN.md` §9 and verify every box.
2. Run `bun run registry:build` after changing registry source or manifests.
3. Confirm the expected generated file exists under `public/r/` and contains the correct item name, files, dependencies, and registry dependencies.
4. Run the repository's available lint/check scripts. Inspect `package.json` first; do not invent script names.
5. Run `bunx tsc --noEmit` when TypeScript validation is relevant and the repository's tsconfig supports it.
6. Run the Next.js production build when practical: `bun run build`.
7. Inspect `git diff` and ensure no generated, unrelated, or user-owned files were accidentally changed.

Do not hand-edit `public/r/*.json`; fix the source manifests/files and rebuild.

## 12. Consumer installation test

A successful website build does not prove a registry item installs correctly.

Test each new or materially changed item in a separate clean shadcn consumer project:

```bash
bunx shadcn@latest add http://localhost:3000/r/<name>.json
```

Start the OdiaUI dev server first if using the local URL. If local static output is not served by the dev server, use the built/deployed registry URL only after verifying it is current.

Also test the namespace flow when relevant:

```bash
bunx shadcn@latest registry add '@odiaui=https://odiaui.xyz/r/{name}.json'
bunx shadcn@latest add @odiaui/<name>
```

In the consumer project, verify:

- All files are installed at the expected paths.
- Imports resolve without manual patching.
- Required npm and registry dependencies are installed.
- No missing aliases, CSS, fonts, assets, or helper files.
- TypeScript passes.
- Interactive behavior works with mouse and keyboard.
- Appearance remains correct in light mode, dark mode, and a different host theme.
- The component does not require edits to the consumer's global CSS or existing shadcn primitives.

Never claim an item is installation-tested unless this test was actually performed.

## 13. Common failure prevention

Before declaring the task complete, check for these mistakes:

- Wrong source path in `files[]`.
- Wrong relative-path convention for the manifest being edited.
- Item added to the wrong registry manifest or omitted from the root include chain.
- Invalid JSON, duplicate item names, or mismatched item/file types.
- npm package placed in `registryDependencies` or registry item placed in `dependencies`.
- Missing supporting files in a multi-file item.
- Imports that point to website-only code or aliases unavailable in the consumer.
- Documentation import path that differs from the actual installed file path.
- MDX page missing from `content/docs/components/meta.json`.
- Preview using a mock or outdated component API.
- Accidental changes to global CSS, shadcn primitives, unrelated components, or generated JSON.
- Using `pnpm`, `npm install`, or `yarn` in this Bun project.
- Claiming a build or consumer install passed without running it.

## 14. Working style for AI agents

When the user asks to add or modify an item:

1. Inspect the existing code and identify the closest pattern.
2. Determine the item type and all files needed before editing.
3. Implement the component, registry metadata, docs, navigation, and demo together when applicable.
4. Preserve existing APIs and avoid unrelated refactors.
5. Build and validate using the actual project scripts.
6. Test installation in a separate consumer app when the task requires a production-ready registry item.
7. Report exactly what changed, commands run, and any checks that were not run.

If an important design or behavior requirement is missing, ask one focused clarification instead of inventing a public API. Otherwise make a reasonable implementation consistent with nearby components and this skill.
