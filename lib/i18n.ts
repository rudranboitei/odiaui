/**
 * Languages available in the docs.
 *
 * English lives at `/docs`, Odia at `/or/docs`. Add a language here (plus
 * translations in `content/docs-<locale>`) to show it in the switcher.
 */
export const locales: { locale: string; name: string }[] = [
  { locale: "en", name: "English" },
  { locale: "or", name: "ଓଡ଼ିଆ" },
];

export const defaultLocale = "en";

/** Prefix of the docs for a locale. English keeps its unprefixed URLs. */
export function docsPrefix(locale: string) {
  return locale === defaultLocale ? "/docs" : `/${locale}/docs`;
}

/**
 * Labels that live in `meta.json` files or in the registry, not in a page's
 * frontmatter.
 */
export const odiaLabels: Record<string, string> = {
  "Getting Started": "ଆରମ୍ଭ କରନ୍ତୁ",
  "For AI": "AI ପାଇଁ",
  Components: "କମ୍ପୋନେଣ୍ଟସ୍",
  Registry: "ରେଜିଷ୍ଟ୍ରି",
  "AI-ready docs": "AI ପାଇଁ ପ୍ରସ୍ତୁତ ଡକ୍ସ",
  "Search and read these docs from your editor with MCP.":
    "MCP ସହିତ ଆପଣଙ୍କ ଏଡିଟରରୁ ଏହି ଡକ୍ସ ଖୋଜନ୍ତୁ ଏବଂ ପଢ଼ନ୍ତୁ।",
};
