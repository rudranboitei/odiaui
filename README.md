<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/brand/odiaui-logo-white.svg">
  <img src="public/brand/odiaui-logo-black.svg" alt="odiaui" width="380">
</picture>

### A custom shadcn/ui registry for distributing beautifully crafted components.

[![License: MIT](https://img.shields.io/badge/License-MIT-0A0A0A?style=flat-square)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-0A0A0A?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-0A0A0A?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Bun](https://img.shields.io/badge/Bun-🥟-0A0A0A?style=flat-square)](https://bun.sh)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-registry-0A0A0A?style=flat-square&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/docs/registry)

[**Website**](https://odiaui.xyz) &nbsp;·&nbsp; [**Documentation**](https://odiaui.xyz/docs) &nbsp;·&nbsp; [**Registry JSON**](https://odiaui.xyz/r/registry.json)

</div>

---

## ✨ Features

- 🧩 **Custom components** — cleanly built, styled with Tailwind CSS v4
- 🚀 **shadcn CLI native** — install straight into your project with `bunx shadcn`
- 📦 **Static registry output** — every item ships as JSON in `public/r/`
- 📝 **MDX documentation** — powered by Fumadocs at [odiaui.xyz/docs](https://odiaui.xyz/docs)
- 🌗 **Dark mode ready** — every component ships theme-aware

## 🎨 Design rules

Every registry item follows the design system spec in [`DESIGN.md`](DESIGN.md) —
color and contrast rules, dark mode, motion, accessibility, component API conventions,
and the pre-ship checklist. Read it before adding or restyling a component.

## 📦 Install

Add the `@odiaui` registry to your project:

```bash
bunx shadcn@latest registry add @odiaui=https://odiaui.xyz/r/{name}.json
```

Or add it manually to your `components.json`:

```json
{
  "registries": {
    "@odiaui": "https://odiaui.xyz/r/{name}.json"
  }
}
```

Then install any component:

```bash
bunx shadcn@latest add @odiaui/button
```

## 🧩 Components

| Component                                              | Description                                       |
| ------------------------------------------------------ | ------------------------------------------------- |
| [`Button`](https://odiaui.xyz/docs/components/button)   | A button component with multiple variants.        |
| [`Card`](https://odiaui.xyz/docs/components/card)       | A card component with header, content, and footer.|
| [`Badge`](https://odiaui.xyz/docs/components/badge)     | A badge component with multiple variants.         |
| [`Skeleton`](https://odiaui.xyz/docs/components/skeleton)| A heritage-inspired loading placeholder.          |

> More components are on the way — watch the repo for updates. ⭐

## 🎨 Themes

| Theme                                                      | Description          |
| ---------------------------------------------------------- | -------------------- |
| [`theme-odiaui`](https://odiaui.xyz/docs)                   | Custom odiaui theme. |

```bash
bunx shadcn@latest add @odiaui/theme-odiaui
```

## 🛠 Development

```bash
# Install dependencies
bun install

# Start the dev server (docs + site)
bun run dev

# Build the registry (outputs JSON to public/r/)
bun run registry:build
```

## 📁 Project Structure

```
├── registry.json              # Registry definition
├── registry/new-york/ui/      # Component source files
├── registry/new-york/themes/  # Theme files
├── public/r/                  # Built registry output (generated)
├── content/docs/              # Documentation (MDX)
└── components.json            # shadcn config
```

## ➕ Adding Components, Hooks & Blocks

The fastest way:

```bash
npx create-scn-stack add-component <name> -d "Description"
npx create-scn-stack add-hook <name> -d "Description"
npx create-scn-stack add-block <name> -d "Description"
```

Or manually:

1. Create your component in `registry/new-york/ui/<name>.tsx`
2. Add the item to `registry/new-york/ui/registry.json`
3. Run `bun run registry:build`
4. Add a doc page in `content/docs/components/<name>.mdx`

## 📄 License

Licensed under the [MIT License](LICENSE).

---

<div align="center">

Crafted with 🖤 by [rudranboitei](https://github.com/rudranboitei)

</div>
