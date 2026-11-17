import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Image
              src="/brand/odiaui-icon-black.svg"
              alt="odiaui logo"
              width={24}
              height={24}
              className="dark:hidden"
            />
            <Image
              src="/brand/odiaui-icon-white.svg"
              alt="odiaui logo"
              width={24}
              height={24}
              className="hidden dark:block"
            />
            odiaui
          </Link>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
