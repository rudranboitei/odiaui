import Image from "next/image";

import { CtaButton } from "./cta";
import { LINKS } from "./data";
import Link from "next/link";

const NAV = [
  { label: "Docs", href: LINKS.docs },
  { label: "Components", href: LINKS.components },
  { label: "GitHub", href: LINKS.github },
];

export function Brand() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center" aria-label="odiaui home">
      <Image
        src="/brand/logo.svg"
        alt="odiaui"
        width={1021}
        height={251}
        className="h-5 w-auto md:h-6"
        priority
        unoptimized
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-8 px-5 md:h-22 md:px-8">
        <Brand />
        <nav className="ml-auto hidden items-center gap-7 text-[15px] text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <CtaButton href={LINKS.install} size="default" className="ml-auto md:ml-0">
          Get started
        </CtaButton>
      </div>
    </header>
  );
}
