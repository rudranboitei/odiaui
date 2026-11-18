import { docs } from "collections/server";
import { llms, loader } from "fumadocs-core/source";

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
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
  renderPage: async (page) => `# ${page.data.title} (${page.url})

${await page.data.getText("processed")}`,
});
