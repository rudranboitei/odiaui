import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { COMPONENTS, LINKS } from "./data";
import { CtaButton } from "./cta";
import { ProductDemo } from "./demo";
import { InstallCommand } from "./install-command";
import { Brand } from "./site-header";

const WRAP = "mx-auto w-[min(1120px,calc(100%-2.5rem))]";

export function Hero() {
  return (
    <section className={`${WRAP} pb-20 pt-14 text-center md:pb-28 md:pt-24`}>
      <h1 className="display mx-auto max-w-212.5 animate-rise text-[2.75rem] md:text-[4.5rem]">
        A component library.
        <br />
        <span className="text-soft-foreground">With a hometown.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-147.5 animate-rise text-base text-muted-foreground [animation-delay:60ms] md:text-lg">
        Open-source React components shaped by the Konark wheel, Odisha's temples and Sambalpuri
        ikat. Copied into your project as source, so they're yours to change.
      </p>
      <div className="mt-8 animate-rise [animation-delay:120ms]">
        <CtaButton href={LINKS.install}>Get started</CtaButton>
      </div>
      <p className="mx-auto mt-5 max-w-85 text-xs text-faint-foreground md:max-w-none">
        Free and MIT licensed. {COMPONENTS.length} components, built on shadcn/ui.
      </p>
      <ProductDemo />
    </section>
  );
}

export function UsageSection() {
  return (
    <section id="usage" className={`${WRAP} border-t border-rule py-20 md:py-28`}>
      <div className="text-center">
        <h2 className="display text-[2.5rem] md:text-[3.5rem]">
          Two steps. <span className="text-soft-foreground">Then it's just React.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-muted-foreground">
          Works in Next.js, Remix, Astro, Gatsby, Vite, or anywhere else you write React with
          Tailwind.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-[22px] border border-border bg-card p-6 md:p-7">
          <h3 className="text-[17px] font-semibold tracking-[-0.015em]">Add a component</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            The shadcn CLI copies the source into your components folder.
          </p>
          <InstallCommand slug="button" className="mt-6" />
        </article>
        <article className="rounded-[22px] border border-border bg-card p-6 md:p-7">
          <h3 className="text-[17px] font-semibold tracking-[-0.015em]">Use it like your own</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Import it, rename it, restyle it. Nothing to upgrade later.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-xl border border-border bg-background p-4 font-mono text-[0.8125rem] leading-6 text-foreground">
            <span className="text-faint-foreground">import</span> {"{ Button }"}{" "}
            <span className="text-faint-foreground">from</span> "@/components/ui/button";{"\n\n"}
            <span className="text-faint-foreground">export function</span> Greeting() {"{"}
            {"\n  "}
            <span className="text-faint-foreground">return</span> {"<"}Button{">"}Namaskar{"</"}Button{">"};
            {"\n}"}
          </pre>
        </article>
      </div>
    </section>
  );
}

const FAQ = [
  {
    q: "Why copy and paste instead of an npm package?",
    a: "Ownership. Every component is copied into your project, so you can shape it to your exact needs without fighting library constraints or waiting on upstream releases.",
  },
  {
    q: "Which frameworks are supported?",
    a: "odiaui components are plain React. They work in Next.js, Remix, Astro, Gatsby, Vite and any other React setup with Tailwind CSS.",
  },
  {
    q: "Do I have to use the Odisha motifs?",
    a: "No. Watermarks, ornaments and cultural icons are opt-in or opt-out props. The components stand on their own as a clean, minimal set.",
  },
  {
    q: "Can AI coding assistants install it?",
    a: "Yes. odiaui ships llms.txt, llms-full.txt and an API catalog, so coding assistants can find and install components correctly.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className={`${WRAP} grid grid-cols-1 gap-6 border-t border-rule py-20 md:grid-cols-[1fr_1.7fr] md:gap-12 md:py-28`}>
      <h2 className="display text-[2.5rem] md:text-[3.5rem]">Questions</h2>
      <Accordion type="single" collapsible>
        {FAQ.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="border-border">
            <AccordionTrigger className="py-5 text-[15px] font-medium hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className={`${WRAP} border-t border-rule py-20 text-center md:py-28`}>
      <h2 className="display text-[2.75rem] md:text-[4rem]">
        Namaskar. <span className="text-soft-foreground">Now go build.</span>
      </h2>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        Pick a component, copy one command, and make it yours.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <CtaButton href={LINKS.install}>Get started</CtaButton>
        <Button asChild variant="secondary" size="lg">
          <a href={LINKS.github}>Star on GitHub</a>
        </Button>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className={`${WRAP} flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between`}>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
          <Brand />
          <p className="text-[13px] text-faint-foreground">
            Built in Odisha by{" "}
            <a href={LINKS.author} className="text-muted-foreground hover:text-foreground">
              Rudra Narayan Boitei
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
          <a href={LINKS.docs} className="hover:text-foreground">Docs</a>
          <a href={LINKS.github} className="hover:text-foreground">GitHub</a>
          <a href={LINKS.x} className="hover:text-foreground">X</a>
          <a href={LINKS.llms} className="hover:text-foreground">llms.txt</a>
        </nav>
      </div>
    </footer>
  );
}
