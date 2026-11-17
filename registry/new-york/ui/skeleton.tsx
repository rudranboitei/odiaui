import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* ── Patterns ──────────────────────────────────────────── */

/** Dash · outlined diamond · dash, tiled along the band (ikat). */
const IKAT_MASK = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='16' viewBox='0 0 28 16' fill='none' stroke='black' stroke-width='1.2'%3E%3Cpath d='M0 8H6M22 8H28'/%3E%3Cpath d='M14 2.5L19.5 8L14 13.5L8.5 8Z'/%3E%3Cpath d='M14 5.5L16.5 8L14 10.5L11.5 8Z'/%3E%3C/svg%3E")`

/**
 * Stepped pidha (tiered roof) silhouette: three roof tiers narrowing toward the
 * ridge, a full-width body and a slightly inset plinth. Reads as a temple roof
 * from a small tag up to a full-width banner.
 */
const PIDA_CLIP =
  "[clip-path:polygon(34%_0,66%_0,66%_14%,78%_14%,78%_28%,90%_28%,90%_42%,100%_42%,100%_92%,94%_92%,94%_100%,6%_100%,6%_92%,0_92%,0_42%,10%_42%,10%_28%,22%_28%,22%_14%,34%_14%)]"

/* ── Art (drawn inside the skeleton) ───────────────────── */
/*
 * All art uses currentColor. Solids are drawn at half opacity and carry an
 * outline plus engraved detail lines at full strength, so the detail reads
 * as carved relief in both light and dark themes.
 */

const FILL = 0.5

/**
 * One Kalinga-style rekha deula, drawn at the origin (base y = 0, centred on x = 0,
 * ≈ 60 wide × 127 tall). From the ground up: plinth, bada with doorway and niches,
 * curved gandi with rekha ribs, bhumi ledges and angashikhara turrets, beki,
 * ribbed amalaka, khapuri, kalasa, ayudha staff and the fluttering patita-pavana flag.
 * `porch` adds a jagamohana — the tiered pidha roof hall in front of the tower.
 */
function Deula({ x, s, porch = false }: { x: number; s: number; porch?: boolean }) {
  return (
    <g
      transform={`translate(${x} 130) scale(${s})`}
      stroke="currentColor"
      strokeWidth={0.9 / s}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* jagamohana porch */}
      {porch && (
        <g>
          <g fill="currentColor" fillOpacity={FILL}>
            <rect x={28} y={-6} width={50} height={6} />
            <rect x={31} y={-30} width={42} height={24} />
            <rect x={29} y={-37} width={46} height={7} />
            <rect x={34} y={-43} width={36} height={6} />
            <rect x={39} y={-48} width={26} height={5} />
            <rect x={44} y={-52} width={16} height={4} />
            <rect x={48} y={-55} width={8} height={3} />
            <ellipse cx={52} cy={-58} rx={3.2} ry={2.2} />
          </g>
          <g fill="none">
            <path d="M47 -6V-19A5 5 0 0 1 57 -19V-6" />
            <path d="M36 -26V-12M68 -26V-12M31 -22H73" />
            <path d="M52 -60V-67" />
          </g>
          <path d="M52.4 -67Q58 -68.5 63 -64.5Q58 -64 52.4 -61.5Z" fill="currentColor" />
        </g>
      )}

      {/* plinth + bada (wall) */}
      <g fill="currentColor" fillOpacity={FILL}>
        <rect x={-30} y={-6} width={60} height={6} />
        <rect x={-26} y={-11} width={52} height={5} />
        <rect x={-22} y={-34} width={44} height={23} />
        {/*
         * gandi: nearly straight sides with a slight inward lean, then a strong
         * inward curve at the shoulder — the rekha profile. No outward bulge, so
         * it never reads as an onion dome.
         */}
        <path d="M-22 -34C-21.5 -50 -20.5 -62 -16 -72C-13 -78.5 -9 -82 -7 -84H7C9 -82 13 -78.5 16 -72C20.5 -62 21.5 -50 22 -34Z" />
        {/* angashikhara turrets — mini-spires hugging the shoulder */}
        <path d="M21 -42C23.5 -47 24 -53 22.5 -58C21.5 -52 21 -46 21 -42Z" />
        <path d="M-21 -42C-23.5 -47 -24 -53 -22.5 -58C-21.5 -52 -21 -46 -21 -42Z" />
        <path d="M16 -60C18.5 -63 19 -68 17.5 -73C16.5 -67 16 -63 16 -60Z" />
        <path d="M-16 -60C-18.5 -63 -19 -68 -17.5 -73C-16.5 -67 -16 -63 -16 -60Z" />
        {/* beki, wide fluted amalaka disc, khapuri, kalasa */}
        <rect x={-8} y={-88} width={16} height={4} />
        <ellipse cx={0} cy={-91.5} rx={13} ry={3.4} />
        <ellipse cx={0} cy={-96} rx={6} ry={2} />
        <path d="M-3 -98C-6.5 -102 -5 -108 0 -108C5 -108 6.5 -102 3 -98Z" />
      </g>

      {/* engraved detail */}
      <g fill="none">
        {/* doorway + niches + pilasters + mouldings */}
        <path d="M-5 -11V-21A5 5 0 0 1 5 -21V-11" />
        <rect x={-20} y={-27} width={5} height={10} />
        <rect x={15} y={-27} width={5} height={10} />
        <path d="M-11 -34V-11M11 -34V-11" />
        <path d="M-22 -30H22M-22 -33H22" />
        {/* rekha ribs following the gandi */}
        <path d="M-11 -34C-10.6 -50 -10 -62 -7.5 -73" />
        <path d="M0 -34V-80" />
        <path d="M11 -34C10.6 -50 10 -62 7.5 -73" />
        {/* bhumi ledges */}
        <path d="M-21.7 -42H21.7M-20.8 -50H20.8M-19.5 -58H19.5M-17.5 -66H17.5M-14.8 -73H14.8" />
        {/* amalaka flutes */}
        <path d="M-10 -94V-89M-6.5 -94.7V-88.8M-3 -95V-88.6M0 -95.2V-88.5M3 -95V-88.6M6.5 -94.7V-88.8M10 -94V-89" />
        {/* kalasa band + staff */}
        <path d="M-4.2 -102.5H4.2" />
        <path d="M0 -108V-118" />
      </g>

      {/* flag (patita-pavana bana) */}
      <circle cx={0} cy={-118} r={1.3} fill="currentColor" />
      <path d="M0.8 -118Q8 -120.5 16 -115.5Q8 -115 0.8 -110Z" fill="currentColor" />
    </g>
  )
}

// [centre x, scale] on a 330 × 132 canvas; only the main tower gets a porch
const TEMPLES = [
  { x: 42, s: 0.5 },
  { x: 118, s: 1, porch: true },
  { x: 240, s: 0.62 },
  { x: 300, s: 0.42 },
] as const

function TempleSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 330 132"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
    >
      <path d="M6 130H324" stroke="currentColor" strokeWidth={1} />
      {TEMPLES.map((t) => (
        <Deula key={t.x} {...t} />
      ))}
    </svg>
  )
}

const SPOKES_24 = Array.from({ length: 24 }, (_, i) => i * 15)
const SPOKES_8 = Array.from({ length: 8 }, (_, i) => i * 45)
const SPOKES_8_OFFSET = SPOKES_8.map((a) => a + 22.5)

/**
 * Konark wheel: double rim with a bead ring, eight bold spokes with
 * medallions, eight slender spokes, lotus petals around a three-ring hub.
 */
function WheelSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* rims */}
      <circle cx="50" cy="50" r="48" strokeWidth="2.2" />
      <circle cx="50" cy="50" r="40.5" strokeWidth="1" />
      {/* bead ring */}
      {SPOKES_24.map((a) => (
        <circle
          key={a}
          cx="50"
          cy="6.5"
          r="1.5"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      {/* bold spokes with medallions */}
      {SPOKES_8.map((a) => (
        <g key={a} transform={`rotate(${a} 50 50)`}>
          <line x1="50" y1="11" x2="50" y2="30" strokeWidth="3.2" />
          <circle cx="50" cy="19" r="3.4" strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* slender spokes */}
      {SPOKES_8_OFFSET.map((a) => (
        <line
          key={a}
          x1="50"
          y1="12"
          x2="50"
          y2="30"
          strokeWidth="1"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      {/* lotus petals */}
      {SPOKES_8_OFFSET.map((a) => (
        <path
          key={a}
          d="M50 38Q54.5 33 50 27Q45.5 33 50 38Z"
          strokeWidth="0.9"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      {/* hub */}
      <circle cx="50" cy="50" r="13" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="8" strokeWidth="1" />
      <circle cx="50" cy="50" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Deula doorway arch: three nested arch mouldings, a keystone diamond, threshold steps. */
function ArchSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      stroke="currentColor"
      strokeWidth={1}
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <path d="M2 80V32A28 28 0 0 1 58 32V80Z" fill="currentColor" fillOpacity={FILL} />
      <path d="M8 80V32A22 22 0 0 1 52 32V80" fill="none" />
      <path d="M14 80V32A16 16 0 0 1 46 32V80" fill="none" />
      <path d="M30 13L34.5 19.5L30 26L25.5 19.5Z" fill="currentColor" />
      <path d="M30 32V80" fill="none" />
      <path d="M2 72H58M2 76H58" fill="none" />
    </svg>
  )
}

/**
 * Inset diamond mouldings, drawn square and rotated inside the diamond-clipped
 * box so the mouldings read as concentric diamonds.
 */
function DiamondSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinejoin="round"
    >
      <rect x="14" y="14" width="72" height="72" rx="3" />
      <rect x="30" y="30" width="40" height="40" rx="2" />
      <circle cx="50" cy="50" r="6" />
      <circle cx="50" cy="50" r="1.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

/**
 * Pidha tier lines, drawn edge-to-edge so the pida clip trims them into the
 * stepped roof silhouette. `preserveAspectRatio="none"` lets a single path
 * serve any width/height, and `non-scaling-stroke` keeps each line hairline-thin.
 */
function PidaSilhouette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      <path
        d="M0 14H100M0 28H100M0 42H100M0 92H100"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/* ── Variants ──────────────────────────────────────────── */

const skeletonVariants = cva(
  [
    "relative block overflow-hidden",
    "pointer-events-none select-none",
    "bg-foreground/[0.08] dark:bg-foreground/[0.12]",
  ],
  {
    variants: {
      variant: {
        /** Classic pulse */
        default: "animate-pulse motion-reduce:animate-none",
        /**
         * Soft sheen across the surface. Uses the built-in pulse animation so
         * the item never depends on consumer keyframes.
         */
        shimmer: [
          "animate-pulse motion-reduce:animate-none",
          "before:absolute before:inset-0 before:bg-linear-to-tr",
          "before:from-transparent before:via-background before:to-transparent",
          "dark:before:via-foreground/[0.16]",
        ],
        /** Ikat dash-and-diamond border band */
        ikat: [
          "animate-pulse motion-reduce:animate-none",
          "after:absolute after:inset-0 after:bg-foreground/20",
          "after:[mask-image:var(--ikat-mask)]",
          "after:[mask-position:center] after:[mask-repeat:repeat-x] after:[mask-size:28px_16px]",
        ],
      },
      shape: {
        /** Free-form: size it with className */
        none: "rounded-md",
        /** Konark wheel */
        chakra: "aspect-square rounded-full",
        /** Deula doorway arch */
        arch: "aspect-[3/4] rounded-t-full rounded-b-md",
        /** Rotated square, clipped so the layout box stays square */
        diamond:
          "aspect-square [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]",
        /** Stepped pida silhouette */
        pida: PIDA_CLIP,
        /** Thin text line */
        line: "h-2.5 w-full rounded-full",
      },
    },
    defaultVariants: { variant: "default", shape: "none" },
  }
)

type SkeletonArtName = "temple" | "wheel" | "arch"

type SkeletonShape = NonNullable<
  VariantProps<typeof skeletonVariants>["shape"]
>

const ART: Record<SkeletonArtName, React.ComponentType<{ className?: string }>> =
  {
    temple: TempleSilhouette,
    wheel: WheelSilhouette,
    arch: ArchSilhouette,
  }

/** Placement for a single art layer. Every layer is explicitly sized. */
const ART_PLACEMENT: Record<SkeletonArtName, string> = {
  temple: "inset-0 size-full",
  wheel: "-right-2 -top-2 w-[38%] aspect-square",
  arch: "bottom-0 left-1/2 h-[86%] aspect-[3/4] -translate-x-1/2",
}

/**
 * When several art layers are combined, each one shrinks into its own zone so
 * the scene stays readable instead of collapsing into overlapping outlines.
 */
const ART_PLACEMENT_MULTI: Record<SkeletonArtName, string> = {
  temple: "inset-0 size-full",
  wheel: "-right-2 -top-2 w-[30%] aspect-square",
  arch: "bottom-0 left-1/2 h-[58%] aspect-[3/4] -translate-x-1/2",
}

/** Shapes carry their own carved artwork automatically. */
const SHAPE_ART: Partial<Record<SkeletonShape, React.ReactNode>> = {
  chakra: (
    <WheelSilhouette className="inset-0 size-full text-foreground/[0.15] dark:text-foreground/[0.18]" />
  ),
  arch: (
    <ArchSilhouette className="inset-0 size-full text-foreground/[0.15] dark:text-foreground/[0.18]" />
  ),
  diamond: (
    <DiamondSilhouette className="inset-[15%] size-[70%] rotate-45 text-foreground/[0.15] dark:text-foreground/[0.18]" />
  ),
  pida: (
    <PidaSilhouette className="inset-0 size-full text-foreground/[0.15] dark:text-foreground/[0.18]" />
  ),
}

/**
 * Paint order when several art layers are combined: the sky (wheel) and the
 * gateway (arch) sit behind the temple silhouette, never in front of it.
 */
const ART_Z: Record<SkeletonArtName, number> = { wheel: 0, arch: 1, temple: 2 }

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  /**
   * Faint artwork inside the skeleton, for media placeholders.
   * Pass one value or an array, e.g. `["temple", "wheel"]`.
   * - `temple` — Kalinga deula towers with flags and a pidha porch, along the bottom
   * - `wheel` — Konark wheel cropped by the top-right corner
   * - `arch` — nested deula doorway arch standing at the bottom centre
   */
  art?: SkeletonArtName | SkeletonArtName[]
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, shape, art, style, children, ...props }, ref) => {
    const artList = art ? (Array.isArray(art) ? art : [art]) : []
    const placement = artList.length > 1 ? ART_PLACEMENT_MULTI : ART_PLACEMENT
    const layers = [...artList].sort((a, b) => ART_Z[a] - ART_Z[b])

    return (
      <div
        ref={ref}
        aria-hidden="true"
        style={
          {
            "--ikat-mask": IKAT_MASK,
            ...style,
          } as React.CSSProperties
        }
        className={cn(skeletonVariants({ variant, shape }), className)}
        {...props}
      >
        {shape ? SHAPE_ART[shape] : null}
        {layers.map((name) => {
          const Art = ART[name]
          if (!Art) return null
          return (
            <Art
              key={name}
              className={cn(
                placement[name],
                "text-foreground/[0.15] dark:text-foreground/[0.18]"
              )}
            />
          )
        })}
        {children}
      </div>
    )
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton, skeletonVariants }
