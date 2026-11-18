import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Badge                                                              */
/*  The six shadcn variants (default, secondary, destructive, outline, ghost,   */
/*  link) plus three OdiaUI tones (sand, success, warning). Colours come from   */
/*  --odia-* tokens only, so the badge keeps its look in any host theme.        */
/* -------------------------------------------------------------------------- */

/**
 * Scoped token defaults. The CLI also injects these into the consumer's CSS;
 * declaring them here means a copy-and-paste install still renders correctly.
 */
const BADGE_TOKENS = [
  "[--odia-surface:oklch(1_0_0)] dark:[--odia-surface:oklch(0.205_0_0)]",
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
  "[--odia-muted:oklch(0.556_0_0)] dark:[--odia-muted:oklch(0.708_0_0)]",
  "[--odia-border:oklch(0.88_0_0)] dark:[--odia-border:oklch(0.32_0_0)]",
  "[--odia-ring:oklch(0.55_0_0)] dark:[--odia-ring:oklch(0.72_0_0)]",
  "[--odia-danger:oklch(0.46_0.19_27)] dark:[--odia-danger:oklch(0.48_0.17_27)]",
  "[--odia-danger-foreground:oklch(1_0_0)] dark:[--odia-danger-foreground:oklch(1_0_0)]",
  "[--odia-sand:oklch(0.9_0.045_76)] dark:[--odia-sand:oklch(0.27_0.03_60)]",
  "[--odia-sand-foreground:oklch(0.28_0.09_58)] dark:[--odia-sand-foreground:oklch(0.93_0.08_82)]",
  "[--odia-success:oklch(0.94_0.05_155)] dark:[--odia-success:oklch(0.26_0.06_155)]",
  "[--odia-success-foreground:oklch(0.25_0.1_155)] dark:[--odia-success-foreground:oklch(0.92_0.08_155)]",
  "[--odia-warning:oklch(0.95_0.06_85)] dark:[--odia-warning:oklch(0.27_0.06_75)]",
  "[--odia-warning-foreground:oklch(0.27_0.1_75)] dark:[--odia-warning-foreground:oklch(0.93_0.08_85)]",
]

const badgeVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-1 rounded-full border",
    "whitespace-nowrap font-medium tracking-[0.02em] select-none",
    "transition-colors duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--odia-ring)",
    "[&_[data-icon]]:size-3.5 [&_[data-icon]]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-(--odia-ink) text-(--odia-surface)",
        secondary:
          "border-(--odia-border) bg-(--odia-ink)/[0.06] text-(--odia-ink)",
        destructive:
          "border-transparent bg-(--odia-danger) text-(--odia-danger-foreground)",
        outline: "border-(--odia-border) bg-transparent text-(--odia-ink)",
        ghost: "border-transparent bg-transparent text-(--odia-muted)",
        link: "border-transparent bg-transparent text-(--odia-ink) underline underline-offset-4",
        sand: "border-(--odia-sand-foreground)/25 bg-(--odia-sand) text-(--odia-sand-foreground)",
        success:
          "border-(--odia-success-foreground)/25 bg-(--odia-success) text-(--odia-success-foreground)",
        warning:
          "border-(--odia-warning-foreground)/25 bg-(--odia-warning) text-(--odia-warning-foreground)",
      },
      size: {
        sm: "h-5 px-2 text-[0.6875rem]",
        default: "h-6 px-2.5 text-xs",
        lg: "h-7 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional, decorative Odisha motif rendered before the label. */
  motif?: BadgeIconName
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, motif, children, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="badge"
      data-variant={variant ?? "default"}
      className={cn(BADGE_TOKENS, badgeVariants({ variant, size }), className)}
      {...props}
    >
      {motif ? <BadgeIcon name={motif} className="size-3 opacity-70" /> : null}
      {children}
    </div>
  )
)
Badge.displayName = "Badge"

/* -------------------------------------------------------------------------- */
/*  BadgeIcon                                                                 */
/*  Decorative Odisha motifs used as faint watermarks by other registry items  */
/*  (for example the Card). Names match the Card's `watermark` values so the   */
/*  artwork ships with the registry instead of depending on website-only code. */
/* -------------------------------------------------------------------------- */

export type BadgeIconName = "deula" | "chakra" | "padma"

/** One Kalinga rekha deula: plinth, bada, curved gandi, amalaka and flag. */
function DeulaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 150"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("pointer-events-none shrink-0", className)}
    >
      <path d="M18 142h84M24 136h72" />
      <path d="M36 136V104h48v32Z" fill="currentColor" fillOpacity={0.4} />
      <path d="M54 136v-16a6 6 0 0 1 12 0v16" />
      <path
        d="M36 104C38 78 46 58 54 44c3-6 5-9 6-12 1 3 3 6 6 12 8 14 16 34 18 60Z"
        fill="currentColor"
        fillOpacity={0.4}
      />
      <path d="M60 44v52M48 56c-2 14-4 26-4 40M72 56c2 14 4 26 4 40" />
      <path d="M39 78h42M42 92h36" />
      <path d="M54 32h12M50 26h20M56 20h8M60 20V6" />
      <path d="M61 6c6-2 12 0 16 4-6 1-11 0-16-2Z" fill="currentColor" />
    </svg>
  )
}

/** Konark wheel: double rim, sixteen spokes and a three-ring hub. */
function ChakraIcon({ className }: { className?: string }) {
  const spokes = React.useMemo(
    () => Array.from({ length: 16 }, (_, i) => i * 22.5),
    []
  )

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("pointer-events-none shrink-0", className)}
    >
      <circle cx="50" cy="50" r="48" strokeWidth={2.2} />
      <circle cx="50" cy="50" r="41" strokeWidth={1} />
      {spokes.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="30"
            strokeWidth={angle % 45 === 0 ? 3 : 1.2}
          />
          {angle % 45 === 0 ? (
            <circle cx="50" cy="19" r="2.8" strokeWidth={1} />
          ) : null}
        </g>
      ))}
      <circle cx="50" cy="50" r="13" strokeWidth={1.5} />
      <circle cx="50" cy="50" r="8" strokeWidth={1} />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Padma: two offset rings of petals around a seed pod. */
function PadmaIcon({ className }: { className?: string }) {
  const petals = React.useMemo(
    () => Array.from({ length: 8 }, (_, i) => i * 45),
    []
  )

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("pointer-events-none shrink-0", className)}
    >
      {petals.map((angle) => (
        <path
          key={angle}
          d="M50 50Q61 22 50 6Q39 22 50 50Z"
          fill="currentColor"
          fillOpacity={0.25}
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {petals.map((angle) => (
        <path
          key={`inner-${angle}`}
          d="M50 50Q58 32 50 19Q42 32 50 50Z"
          transform={`rotate(${angle + 22.5} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="9" fill="currentColor" fillOpacity={0.4} />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

const BADGE_ICONS: Record<BadgeIconName, React.ComponentType<{ className?: string }>> = {
  deula: DeulaIcon,
  chakra: ChakraIcon,
  padma: PadmaIcon,
}

/** Faint, decorative Odisha artwork. Purely visual — always aria-hidden. */
function BadgeIcon({
  name,
  className,
}: {
  name: BadgeIconName
  className?: string
}) {
  const Icon = BADGE_ICONS[name]
  return <Icon className={className} />
}

export { Badge, BadgeIcon, badgeVariants }
