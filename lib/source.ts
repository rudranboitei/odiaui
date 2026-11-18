import { docs, docsOr } from "collections/server";
import { llms, loader } from "fumadocs-core/source";
import type { Item, Node, Root } from "fumadocs-core/page-tree";
import type { ReactNode } from "react";

import { odiaLabels } from "@/lib/i18n";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

/** Odia translations. Pages missing here fall back to the English docs. */
export const sourceOr = loader({
  baseUrl: "/or/docs",
  source: docsOr.toFumadocsSource(),
});

/**
 * Markdown renderer for LLMs and agents.
 *
 * `renderPage` reads the processed Markdown, enabled by
 * `docs.postprocess.includeProcessedMarkdown` in `source.config.ts`.
 */
export const docsLlms = llms(source, {
  // Serve `/docs/components/llms-full.txt` for agents that only need the
  // component reference.
  section: (folder) => folder.index?.url === "/docs/components",
  renderPage: async (page) => {
    const markdown = await page.data.getText("processed");

    return `# ${page.data.title} (${page.url})

${withInstallCommands(markdown)}`;
  },
});

/**
 * `<InstallCommand />` is a client component, so it stays as JSX in processed
 * Markdown. Replace it with the command agents can actually run.
 */
function withInstallCommands(markdown: string) {
  return markdown.replace(/<InstallCommand\b([^>]*)\/>/g, (tag, attrs) => {
    const match = /command="([^"]+)"/.exec(attrs);
    return match ? `\`\`\`bash\nbunx ${match[1]}\n\`\`\`` : tag;
  });
}

/**
 * The English page tree with Odia URLs, labels, and translated titles.
 *
 * Building the tree from the English docs keeps the Odia sidebar complete:
 * untranslated pages simply keep their English title and link to the fallback
 * rendering.
 */
export function getOdiaPageTree(): Root {
  const titles = new Map(
    sourceOr.getPages().map((page) => [
      page.url.replace(/^\/or/, ""),
      page.data.title,
    ])
  );

  return {
    ...source.pageTree,
    name: "ଡକ୍ସ",
    children: localizeNodes(source.pageTree.children, titles),
  };
}

function localizeNodes(nodes: Node[], titles: Map<string, string>): Node[] {
  return nodes.map((node) => {
    if (node.type === "page") return localizePage(node, titles);

    if (node.type === "separator") {
      return { ...node, name: localizeLabel(node.name) };
    }

    return {
      ...node,
      name: localizeLabel(node.name),
      index: node.index ? localizePage(node.index, titles) : undefined,
      children: localizeNodes(node.children, titles),
    };
  });
}

function localizePage(node: Item, titles: Map<string, string>): Item {
  return {
    ...node,
    url: `/or${node.url}`,
    name: titles.get(node.url) ?? localizeLabel(node.name),
  };
}

function localizeLabel(name: ReactNode): ReactNode {
  return typeof name === "string" ? (odiaLabels[name] ?? name) : name;
}
