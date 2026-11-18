import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    // Show "last updated" dates from Git.
    lastModified: true,
    // Expose processed Markdown so the docs can be served to LLMs and agents.
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
});

/**
 * Odia translations of the docs.
 *
 * Pages that are not translated yet fall back to the English content, so the
 * language switch never leads to a 404.
 */
export const docsOr = defineDocs({
  dir: "content/docs-or",
  docs: {
    lastModified: true,
  },
});

export default defineConfig();
