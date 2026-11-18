import Link from "next/link";
import { notFound } from "next/navigation";
import { findNeighbour } from "fumadocs-core/page-tree";
import { Callout } from "fumadocs-ui/components/callout";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  PageLastUpdate,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/docs/page";

import { getMDXComponents } from "@/components/mdx";
import { getOdiaPageTree, source, sourceOr } from "@/lib/source";

const githubRepo = "rudranboitei/odiaui";

/**
 * `/or/docs/**` renders the Odia translation when it exists and the English
 * page otherwise, so switching language never lands on a 404.
 */
export default async function OdiaPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const odiaPage = sourceOr.getPage(slug);
  const page = odiaPage ?? source.getPage(slug);

  if (!page) notFound();

  const tree = getOdiaPageTree();
  const MDX = page.data.body;
  const translated = Boolean(odiaPage);
  const directory = translated ? "content/docs-or" : "content/docs";
  const pageUrl = `/or${page.url.replace(/^\/or/, "")}`;
  const githubUrl = `https://github.com/${githubRepo}/blob/main/${directory}/${encodeURI(
    page.path
  )}`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: true }}
      footer={{ items: findNeighbour(tree, pageUrl) }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <DocsTitle>{page.data.title}</DocsTitle>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <ViewOptionsPopover
            githubUrl={githubUrl}
            pageUrl={`https://odiaui.xyz${pageUrl}`}
          />
        </div>
      </div>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <DocsBody>
        {translated ? null : (
          <Callout title="ଏହି ପୃଷ୍ଠାର ଓଡ଼ିଆ ଅନୁବାଦ ଶୀଘ୍ର ଆସୁଛି" type="info">
            ତଳେ ଇଂରାଜୀ ବିଷୟବସ୍ତୁ ଦେଖାଯାଉଛି।{" "}
            <Link href={page.url}>ଇଂରାଜୀ ପୃଷ୍ଠାରେ ପଢ଼ନ୍ତୁ</Link>।
          </Callout>
        )}
        <MDX components={getMDXComponents()} />
      </DocsBody>
      {page.data.lastModified ? (
        <PageLastUpdate date={page.data.lastModified} />
      ) : null}
    </DocsPage>
  );
}

export function generateStaticParams() {
  return [...source.generateParams(), ...sourceOr.generateParams()];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const page = sourceOr.getPage(slug) ?? source.getPage(slug);

  if (!page) notFound();

  const enUrl = page.url.replace(/^\/or/, "");

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `/or${enUrl}`,
      languages: {
        en: enUrl,
        or: `/or${enUrl}`,
      },
    },
  };
}
