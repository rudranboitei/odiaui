# OdiaUI — Design System & UI Rules

> **Modern UI. Rooted in Odisha. Built for everyone.**
>
> This is the canonical design spec for every OdiaUI registry item. Read it before
> creating, restyling, or reviewing any component. If a rule here conflicts with a
> generic shadcn tutorial, **this file wins** for OdiaUI.

---

## 1. Identity

- Modern, minimal, polished, reusable UI first. Heritage second.
- Odisha heritage appears as **restrained detail** — geometry, linework, motifs,
  or ornamentation. Never tourism-site decoration.
- Heritage treatment must be **optional/configurable** when appropriate
  (e.g. a documented `showChakra` / decoration prop), never forced into generic behavior.
- No robots, generic AI visuals, random gradients, excessive glow, or decorative noise.
- One shared base `Button`. Do not create competing button APIs.

---

## 2. Color & contrast (non-negotiable)

### Contrast requirements

| Content | Minimum ratio |
| --- | --- |
| Normal text (< 24px, or < 18.66px bold) | **4.5:1** (WCAG AA) |
| Large text (≥ 24px, or ≥ 18.66px bold) | **3:1** |
| UI boundaries, focus indicators, icons | **3:1** |

**Measure it — do not eyeball it.** A gradient means the *worst* point must pass,
not the average.

### Verified heritage palette

Use these values for heritage accents. They are tested in light and dark mode.

| Token | Value | Notes |
| --- | --- | --- |
| Heritage gradient (top) | `#b45309` | white text = **5.0:1** ✅ |
| Heritage gradient (bottom) | `#7c2d12` | white text = **9.3:1** ✅ |
| Gradient border | `#d18a3e` at `/50` | subtle copper edge |
| Outline text (light) | `amber-800` | on white = ~6.3:1 ✅ |
| Outline text (dark) | `amber-300` | on near-black ≈ 14:1 ✅ |
| Focus ring | `amber-600` | ≥ 3:1 against surfaces |
| Ring offset | `background` token | adapts to host theme |

### Contrast traps — never ship these

| Mistake | Measured | Why it fails |
| --- | --- | --- |
| White on `#e9a34c` | 2.1:1 | ❌ WCAG AA |
| White on `#b86b22` | 4.0:1 | ❌ under 4.5:1 for `text-sm` |
| `amber-800` text with no dark variant | ≈ 1.4:1 on dark | ❌ unreadable |
| Focus ring with default offset on dark bg | — | white halo artifact |

> Gradient rule: if white text sits on a gradient, **every stop including the
> midpoint** must reach 4.5:1. Deepen the gradient or switch to dark text.

---

## 3. Dark mode

Every item ships theme-aware. No exceptions.

- Never hard-code a light-only or dark-only color. If a variant uses a dark hue,
  pair it with a `dark:` counterpart (`text-amber-800 dark:text-amber-300`).
- Alpha borders must remain visible in both modes
  (`border-amber-700/40 dark:border-amber-300/40`).
- Focus indicators: always set `ring-offset-background` when using an offset,
  otherwise the default white offset shows as a halo on dark surfaces.
- Test in **light mode, dark mode, and a foreign host theme** before declaring done.

---

## 4. Typography & radii

- **Fonts:** never hard-code font families in registry components — inherit the host.
- **Sizes:** `text-sm` (14px) is the button default; `text-xs` for `sm`; `text-base` for `lg`.
- **Radii:** choose one shape language per component and document it.
  Base `Button` uses `rounded-md`; `HeritageButton` intentionally uses the pill
  `rounded-full`. Do not mix shapes inside one component family.

---

## 5. Motion

- Use scoped transitions: `transition` or `transition-colors`. **Never `transition-all`.**
- Standard duration: `duration-200` for buttons, `duration-150` for micro-interactions.
- Any transform beyond ~2px must respect reduced motion:
  `motion-reduce:transition-none motion-reduce:active:scale-100`.
- No infinite animations in registry items unless the component is inherently animated
  (and document that fact).

---

## 6. Accessibility rules

- Use the correct semantic element (`<button>`, `<a>`, `<input>` …). Never a `<div>` with handlers.
- Preserve native attributes and events: extend `React.ButtonHTMLAttributes<…>` etc.
- Destructure custom props so they never leak to the DOM as invalid attributes.
- **Icon-only** sizes: the docs example and props table must show `aria-label`.
- Decorative SVG: `aria-hidden="true"` + `shrink-0`. Never give decorative art a label.
- Disabled: `disabled:pointer-events-none disabled:opacity-50`; keep focus visible when enabled.
- Keyboard: every interactive element gets a visible focus state and reachable tab order.
- Never rely on color alone to convey state.

---

## 7. Component API rules

- Variants via `cva`, with explicit `defaultVariants`.
- `className` merges **last** through the repo's `cn` utility, so consumers can override:
  ```tsx
  cn(heritageButtonVariants({ variant, size }), className)
  ```
- `forwardRef` + `displayName` for interactive/native elements, matching the
  established pattern in `registry/new-york/ui/button.tsx`.
- Sizes are a closed set; include `icon` for icon-capable components (`size-10 p-0`).
- Props: predictable names, sensible defaults, JSDoc on non-obvious defaults.
- No unnecessary dependencies, effects, client components, or duplicated state.
- TypeScript strict; no `any` without a documented reason.

---

## 8. Host-project independence

- The installable source in `registry/new-york/ui/` is the source of truth.
- Component styles must survive a different host theme:
  prefer explicit local utilities for component-specific looks.
- Use semantic shadcn tokens **only** when theme adaptation is part of the contract
  (e.g. `ring-offset-background`) — and document it.
- Never require edits to the consumer's global CSS, shadcn primitives, fonts, or aliases.
- Docs demos must import the **real registry component**, not a look-alike mock.

---

## 9. Pre-ship checklist

Copy this into your PR / task notes and tick every box:

```md
- [ ] Light mode verified
- [ ] Dark mode verified
- [ ] Foreign-theme consumer verified
- [ ] Text contrast ≥ 4.5:1 at worst gradient/background point
- [ ] UI/focus contrast ≥ 3:1
- [ ] Focus ring visible with correct offset color
- [ ] Icon-only usage has aria-label
- [ ] Decorative SVG is aria-hidden
- [ ] Native props/events pass through; ref works
- [ ] className override works (cn merge)
- [ ] Scoped transition (no transition-all)
- [ ] Reduced motion respected
- [ ] Registry manifest updated + `bun run registry:build` run
- [ ] Docs page + meta.json entry
- [ ] Demo imports registry source
- [ ] Clean consumer install tested (`bunx shadcn@latest add <local-url>`)
- [ ] `bunx tsc --noEmit` passes
```

---

## 10. Known bad patterns → correct fix

| Bad pattern | Fix |
| --- | --- |
| `transition-all` | `transition` / `transition-colors` |
| `focus-visible:ring-offset-2` with no offset color | add `focus-visible:ring-offset-background` |
| White text on light amber | deepen the gradient (see §2) or use dark text |
| `text-amber-800` with no `dark:` variant | add `dark:text-amber-300` |
| Hard-coded `font-sans` / font family | inherit the host font |
| Icon-only button without label | add `aria-label` + document it |
| Demo re-implements the component styles | import from `registry/new-york/ui/` |
| Editing `public/r/*.json` by hand | edit source/manifest, rerun `registry:build` |
| Publishing stale registry output | `bun run registry:build` before commit |
