/**
 * Placeholder portraits shipped with `@odiaui/avatar`.
 *
 * The SVGs are installed into `public/avatars/`, so `src` is a root-relative
 * path on your own site — no remote URL and no image host required. Use them
 * with `AvatarImage` in seeded data, story fixtures, or demos.
 */

export type AvatarPlaceholder = {
  /** Root-relative path to the installed SVG. */
  src: string
  /** Description of the artwork, suitable for `AvatarImage` alt text. */
  label: string
}

/** All 14 placeholder portraits, in the order shown in the docs. */
export const avatarPlaceholders = [
  { src: "/avatars/chakra-silhouette.svg", label: "Silhouette with Konark chakra" },
  { src: "/avatars/deula-papercut.svg", label: "Deula arch paper-cut portrait" },
  { src: "/avatars/duotone-turban.svg", label: "Man in a pagadi, duotone" },
  { src: "/avatars/dusk-young-man.svg", label: "Young man at dusk" },
  { src: "/avatars/ikat-hood.svg", label: "Woman in Sambalpuri ikat" },
  { src: "/avatars/lineart-woman.svg", label: "Line art Odia woman" },
  { src: "/avatars/pattachitra-portrait.svg", label: "Pattachitra style portrait" },
  { src: "/avatars/pattern-chakra.svg", label: "Chakra pattern avatar" },
  { src: "/avatars/pattern-deula.svg", label: "Deula temple pattern avatar" },
  { src: "/avatars/pattern-ikat.svg", label: "Sambalpuri ikat pattern avatar" },
  { src: "/avatars/pattern-padma.svg", label: "Padma lotus pattern avatar" },
  { src: "/avatars/pattern-pida.svg", label: "Pida diamond pattern avatar" },
  { src: "/avatars/santal-woman.svg", label: "Santal woman with flowers" },
  { src: "/avatars/sticker-elder-woman.svg", label: "Sticker style elder woman" },
] as const satisfies readonly AvatarPlaceholder[]
