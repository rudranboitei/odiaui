import type { ReactNode } from "react";

import { SiteFooter } from "./sections";
import { SiteHeader } from "./site-header";

import "./styles.css";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=Instrument+Serif:ital@0;1&display=swap"
      />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
