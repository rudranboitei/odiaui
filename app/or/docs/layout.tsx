import type { ReactNode } from "react";

import { DocsShell } from "@/components/docs-shell";
import { getOdiaPageTree } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsShell tree={getOdiaPageTree()} locale="or">
      {children}
    </DocsShell>
  );
}
