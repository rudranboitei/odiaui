import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      githubUrl="https://github.com/rudranboitei/odiaui"
      links={[
        { type: "main", text: "Components", url: "/docs/components" },
        { type: "main", text: "MCP", url: "/docs/mcp" },
        {
          type: "main",
          text: "Registry",
          url: "/r/registry.json",
          external: true,
        },
      ]}
      nav={{
        url: "/",
        title: (
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
        ),
      }}
      sidebar={{
        defaultOpenLevel: 1,
        banner: (
          <Link
            href="/docs/mcp"
            className="flex flex-col gap-1 rounded-lg border bg-fd-card p-3 text-sm transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="size-3.5 text-fd-primary" />
              AI-ready docs
            </span>
            <span className="text-xs text-fd-muted-foreground">
              Search and read these docs from your editor with MCP.
            </span>
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
