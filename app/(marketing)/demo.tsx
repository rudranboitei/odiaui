import { useState, type ReactNode } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { ArrowUpRight, Bell, Loader, SlidersHorizontal, Tag, ToggleRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Chakra, Deula, Padma } from "./motifs";
import { docsUrl } from "./data";
import { InstallCommand } from "./install-command";

function ChakraSlider() {
  const [value, setValue] = useState([64]);
  const v = value[0] ?? 0;
  return (
    <div className="w-full max-w-sm">
      <div className="mb-4 flex items-baseline justify-between text-sm">
        <span className="text-muted-foreground">Rath speed</span>
        <span className="font-mono tabular-nums text-foreground">{v}</span>
      </div>
      <SliderPrimitive.Root
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        aria-label="Rath speed"
        className="relative flex h-9 w-full touch-none select-none items-center"
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-accent">
          <SliderPrimitive.Range className="absolute h-full bg-foreground" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block size-9 cursor-grab rounded-full bg-foreground text-background outline-none focus-visible:ring-4 focus-visible:ring-foreground/25 active:cursor-grabbing">
          <Chakra detailed={false} className="size-9" style={{ transform: `rotate(${v * 3.6}deg)` }} />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </div>
  );
}

function Spinners() {
  return (
    <div className="flex items-end gap-14 text-foreground">
      {[
        { label: "chakra", el: <Chakra detailed={false} className="size-14 animate-spin-chakra" title="Chakra spinner" /> },
        { label: "deula", el: <Deula className="h-14 w-11 origin-bottom animate-breathe" title="Deula spinner" /> },
        { label: "padma", el: <Padma className="size-14 animate-bloom" title="Padma spinner" /> },
      ].map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-4">
          {s.el}
          <span className="font-mono text-xs text-faint-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function SwitchRow({ label, hint, defaultChecked = false }: { label: string; hint: string; defaultChecked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-8 py-4">
      <span>
        <span className="block text-[15px] text-foreground">{label}</span>
        <span className="block text-sm text-faint-foreground">{hint}</span>
      </span>
      <SwitchPrimitive.Root
        defaultChecked={defaultChecked}
        className="inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=checked]:bg-foreground data-[state=unchecked]:bg-accent"
      >
        <SwitchPrimitive.Thumb className="block size-5 rounded-full transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-background data-[state=unchecked]:bg-muted-foreground" />
      </SwitchPrimitive.Root>
    </label>
  );
}

function Toasts() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button
        onClick={() =>
          toast("Moved to archive", {
            description: "3 files from Cuttack/2026",
            action: { label: "Undo", onClick: () => toast("Restored") },
          })
        }
      >
        Archive files
      </Button>
      <Button variant="secondary" onClick={() => toast("Namaskar from odiaui")}>
        Say namaskar
      </Button>
    </div>
  );
}

function Badges() {
  const base = "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium";
  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      <span className={cn(base, "bg-foreground text-background")}>
        <span className="size-1.5 rounded-full bg-background" /> Live
      </span>
      <span className={cn(base, "bg-secondary text-foreground")}>
        <Chakra detailed={false} className="size-4" /> Konark
      </span>
      <span className={cn(base, "bg-secondary text-foreground")}>
        <Deula className="size-4" /> Puri
      </span>
      <span className={cn(base, "border border-input text-muted-foreground")}>
        <Padma className="size-4" /> Draft
      </span>
    </div>
  );
}

type Screen = { id: string; label: string; icon: ReactNode; title: string; body: string; render: () => ReactNode };

const SCREENS: Screen[] = [
  {
    id: "slider",
    label: "Slider",
    icon: <SlidersHorizontal />,
    title: "A Konark wheel on the thumb.",
    body: "Drag it. The wheel turns with the value.",
    render: () => <ChakraSlider />,
  },
  {
    id: "spinner",
    label: "Spinner",
    icon: <Loader />,
    title: "Three ways to wait.",
    body: "A turning chakra, a breathing temple and an opening lotus.",
    render: () => <Spinners />,
  },
  {
    id: "switch",
    label: "Switch",
    icon: <ToggleRight />,
    title: "Small, quiet, accessible.",
    body: "Two sizes, token colours and full keyboard support.",
    render: () => (
      <div className="w-full max-w-xs divide-y divide-border">
        <SwitchRow label="Sound" hint="Soft click on press" defaultChecked />
        <SwitchRow label="Haptics" hint="On supported devices" />
      </div>
    ),
  },
  {
    id: "toast",
    label: "Toast",
    icon: <Bell />,
    title: "Messages that can be undone.",
    body: "Undo, promise, progress and rich content toasts.",
    render: () => <Toasts />,
  },
  {
    id: "badge",
    label: "Badge",
    icon: <Tag />,
    title: "Status with a sense of place.",
    body: "Pills with cultural icons drawn inline.",
    render: () => <Badges />,
  },
];

export function ProductDemo() {
  const [active, setActive] = useState(SCREENS[0]!.id);
  const screen = SCREENS.find((s) => s.id === active) ?? SCREENS[0]!;

  return (
    <div className="mt-14 md:mt-16">
      <div className="flex justify-center px-5">
        <div
          role="tablist"
          aria-label="Components"
          className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl bg-secondary p-1.5 [scrollbar-width:none]"
        >
          {SCREENS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === active}
              onClick={() => setActive(s.id)}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-2 rounded-xl px-4 text-sm transition-colors md:px-5 [&_svg]:size-4",
                s.id === active ? "bg-accent text-foreground" : "text-faint-foreground hover:text-foreground",
              )}
            >
              {s.icon}
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card">
        <div className="px-6 pb-2 pt-10 text-center md:pt-12">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-[1.75rem]">{screen.title}</h2>
          <p className="mt-2 text-[15px] text-muted-foreground">{screen.body}</p>
        </div>
        <div key={screen.id} className="flex min-h-[200px] animate-rise items-center justify-center px-6 py-10 md:min-h-[220px]">
          {screen.render()}
        </div>
        <div className="flex flex-col gap-3 border-t border-border p-4 md:flex-row md:items-center md:p-5">
          <InstallCommand slug={screen.id} className="min-w-0 flex-1" />
          <a
            href={docsUrl(screen.id)}
            className="inline-flex items-center justify-center gap-1 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {screen.label} docs <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
