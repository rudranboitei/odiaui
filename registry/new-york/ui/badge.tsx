import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

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
