/**
 * Internal routes are relative so local development stays on localhost.
 * `site` stays absolute: it builds copyable registry install commands that
 * must point at the public registry even when viewed locally.
 */
export const LINKS = {
  site: "https://odiaui.xyz",
  docs: "/docs",
  install: "/docs/installation",
  components: "/docs/components",
  blocks: "/blocks",
  github: "https://github.com/rudranboitei/odiaui",
  discussions: "https://github.com/rudranboitei/odiaui/discussions",
  author: "https://rudranboitei.com",
  x: "https://x.com/rudranboitei",
  llms: "/llms.txt",
} as const;

export type RegistryItem = { slug: string; name: string; note: string };

export const COMPONENTS: RegistryItem[] = [
  { slug: "button", name: "Button", note: "Ready-made buttons for real use cases" },
  { slug: "accordion", name: "Accordion", note: "Four style families, nested and timeline layouts" },
  { slug: "alert", name: "Alert", note: "Tinted container, icon tile, floating status pill" },
  { slug: "avatar", name: "Avatar", note: "Heritage frames, accent colours, status badges" },
  { slug: "badge", name: "Badge", note: "Status pills with cultural icons drawn inline" },
  { slug: "card", name: "Card", note: "Tonal surface with a deula, chakra or padma watermark" },
  { slug: "dialog", name: "Dialog", note: "Borderless rounded surface for real dialog flows" },
  { slug: "label", name: "Label", note: "Required, optional, invalid and disabled states" },
  { slug: "input", name: "Input", note: "Search, email, password and file presets with addons" },
  { slug: "radio-group", name: "Radio Group", note: "Token-based states, full keyboard navigation" },
  { slug: "separator", name: "Separator", note: "Heritage ornaments and repeating craft patterns" },
  { slug: "sheet", name: "Sheet", note: "Rekha deula watermark, ikat strip, grabber handle" },
  { slug: "skeleton", name: "Skeleton", note: "Pulse, shimmer, ikat and pida variants" },
  { slug: "slider", name: "Slider", note: "A mini Konark wheel thumb with ikat tick markers" },
  { slug: "spinner", name: "Spinner", note: "Turning chakra, breathing deula, opening lotus" },
  { slug: "switch", name: "Switch", note: "Two sizes, token track colours, keyboard support" },
  { slug: "toggle-group", name: "Toggle Group", note: "Pill toggles with single or multiple selection" },
  { slug: "textarea", name: "Textarea", note: "Live character counter and built-in errors" },
  { slug: "toast", name: "Toast", note: "Undo, promise, progress and rich content" },
];

export const PACKAGE_MANAGERS = {
  pnpm: "pnpm dlx shadcn@latest add",
  npm: "npx shadcn@latest add",
  bun: "bunx --bun shadcn@latest add",
  yarn: "yarn dlx shadcn@latest add",
} as const;

export type PackageManager = keyof typeof PACKAGE_MANAGERS;

export const registryUrl = (slug: string) => `${LINKS.site}/r/${slug}.json`;
export const docsUrl = (slug: string) =>
  slug === "button" ? `${LINKS.components}/button` : `${LINKS.components}/${slug}`;
export const installCommand = (pm: PackageManager, slug: string) =>
  `${PACKAGE_MANAGERS[pm]} ${registryUrl(slug)}`;
