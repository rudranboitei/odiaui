import { findNeighbour } from "fumadocs-core/page-tree";
import { source } from "@/lib/source";
import { getMDXComponents } from "@/components/mdx";
import { OpenInV0 } from "@/components/open-in-v0";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import {
  MarkdownCopyButton,
  PageLastUpdate,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/docs/page";
import { notFound } from "next/navigation";

const githubRepo = "rudranboitei/odiaui";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = `${page.url}.md`;
  const githubUrl = `https://github.com/${githubRepo}/blob/main/content/docs/${encodeURI(
    page.path
  )}`;
  const componentName =
    page.slugs[0] === "components" && page.slugs.length === 2
      ? page.slugs[1]
      : undefined;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: true }}
      footer={{ items: findNeighbour(source.pageTree, page.url) }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <DocsTitle>{page.data.title}</DocsTitle>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {componentName ? <OpenInV0 name={componentName} /> : null}
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={githubUrl}
          />
        </div>
      </div>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
      {page.data.lastModified ? (
        <PageLastUpdate date={page.data.lastModified} />
      ) : null}
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      types: {
        "text/markdown": `${page.url}.md`,
      },
    },
  };
}
