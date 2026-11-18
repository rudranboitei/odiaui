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
