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

export default defineConfig();
