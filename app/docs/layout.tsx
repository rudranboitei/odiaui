import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import Image from "next/image";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
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
    >
      {children}
    </DocsLayout>
  );
}
