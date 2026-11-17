import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { PACKAGE_MANAGERS, installCommand, registryUrl, type PackageManager } from "./data";
import { useCopy } from "./use-copy";

export function InstallCommand({ slug, className }: { slug: string; className?: string }) {
  const [pm, setPm] = useState<PackageManager>("pnpm");
  const { copied, copy } = useCopy();

  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-background text-left", className)}>
      <div role="tablist" aria-label="Package manager" className="flex gap-1 border-b border-border px-2 pt-1">
        {(Object.keys(PACKAGE_MANAGERS) as PackageManager[]).map((key) => (
          <button
            key={key}
            role="tab"
            aria-selected={pm === key}
            onClick={() => setPm(key)}
            className={cn(
              "relative px-2.5 py-2 font-mono text-xs transition-colors",
              pm === key ? "text-foreground" : "text-faint-foreground hover:text-foreground",
            )}
          >
            {key}
            {pm === key && <span className="absolute inset-x-2.5 -bottom-px h-px bg-foreground" />}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 py-2.5 pl-4 pr-2">
        <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[0.8125rem] text-muted-foreground [scrollbar-width:none]">
          {PACKAGE_MANAGERS[pm]} <span className="text-foreground">{registryUrl(slug)}</span>
        </code>
        <button
          onClick={() => copy(installCommand(pm, slug))}
          aria-label={copied ? "Copied" : `Copy install command for ${slug}`}
          className="grid size-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        </button>
      </div>
    </div>
  );
}
