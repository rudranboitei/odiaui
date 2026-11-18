import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import type { Root } from "fumadocs-core/page-tree";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { I18nProvider } from "fumadocs-ui/contexts/i18n";

import { DocsHeader } from "@/components/docs-header";
import { defaultLocale, docsPrefix, locales, odiaLabels } from "@/lib/i18n";

function BrandLogo() {
  return (
    <>
      <Image
        src="/brand/odiaui-logo-black.svg"
        alt="odiaui"
        width={1382}
        height={303}
        className="h-6 w-auto dark:hidden"
        unoptimized
        priority
      />
      <Image
        src="/brand/odiaui-logo-white.svg"
        alt="odiaui"
        width={1382}
        height={303}
        className="hidden h-6 w-auto dark:block"
        unoptimized
        priority
      />
    </>
  );
}

interface DocsShellProps {
  tree: Root;
  locale?: string;
  children: ReactNode;
}

/**
 * Shared docs chrome for every locale.
 *
 * The header carries the language switcher, GitHub, and theme toggle, so the
 * sidebar footer can stay empty. `--fd-header-height` gives the layout room for
 * the header on desktop, where Fumadocs does not render one by default.
 */
export function DocsShell({
  tree,
  locale = defaultLocale,
  children,
}: DocsShellProps) {
  const prefix = docsPrefix(locale);
  const isOdia = locale === "or";

  return (
    <I18nProvider
      locale={locale}
      defaultLanguage={defaultLocale}
      hideLocale="default-locale"
      locales={locales}
    >
      <DocsLayout
        tree={tree}
        containerProps={{
          style: { "--fd-header-height": "3.5rem" } as CSSProperties,
        }}
        githubUrl="https://github.com/rudranboitei/odiaui"
        slots={{ header: DocsHeader }}
        links={[
          {
            type: "main",
            text: isOdia ? odiaLabels.Components : "Components",
            url: `${prefix}/components`,
          },
          { type: "main", text: "MCP", url: `${prefix}/mcp` },
          {
            type: "main",
            text: isOdia ? odiaLabels.Registry : "Registry",
            url: "/r/registry.json",
            external: true,
          },
        ]}
        nav={{ url: "/", title: <BrandLogo /> }}
        sidebar={{
          defaultOpenLevel: 1,
          // GitHub, the language switcher, and the theme toggle are in the
          // header (desktop) and the drawer header (mobile), not the sidebar
          // footer. The footer is the last direct child of the sidebar.
          className: "[&>div:last-child]:hidden",
          banner: (
            <Link
              href={`${prefix}/mcp`}
              className="flex flex-col gap-1 rounded-lg border bg-fd-card p-3 text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles className="size-3.5 text-fd-primary" />
                {isOdia ? odiaLabels["AI-ready docs"] : "AI-ready docs"}
              </span>
              <span className="text-xs text-fd-muted-foreground">
                {isOdia
                  ? odiaLabels["Search and read these docs from your editor with MCP."]
                  : "Search and read these docs from your editor with MCP."}
              </span>
            </Link>
          ),
        }}
      >
        {children}
      </DocsLayout>
    </I18nProvider>
  );
}
