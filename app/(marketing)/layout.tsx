import type { ReactNode } from "react";
import { Instrument_Serif } from "next/font/google";

import { SiteFooter } from "./sections";
import { SiteHeader } from "./site-header";

import "./styles.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${instrumentSerif.variable} min-h-svh bg-background text-foreground`}
    >
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
