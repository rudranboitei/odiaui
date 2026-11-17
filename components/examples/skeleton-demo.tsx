"use client"

import { Skeleton } from "@/registry/new-york/ui/skeleton"

/** Default preview: a short paragraph of placeholder text. */
export function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-2.5">
      <Skeleton shape="line" className="w-3/4" />
      <Skeleton shape="line" />
      <Skeleton shape="line" className="w-5/6" />
    </div>
  )
}

/** Multi-paragraph article body. */
export function SkeletonText() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Skeleton className="h-6 w-2/3 rounded-md" />
      <div className="flex flex-col gap-2">
        <Skeleton shape="line" />
        <Skeleton shape="line" />
        <Skeleton shape="line" className="w-11/12" />
        <Skeleton shape="line" className="w-3/5" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton shape="line" />
        <Skeleton shape="line" className="w-4/5" />
      </div>
    </div>
  )
}

/** Media card with carved temple artwork, a tag and an author row. */
export function SkeletonCard() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl border p-4">
      <Skeleton art="temple" className="aspect-[16/9] w-full rounded-lg" />
      <div className="flex flex-col gap-2">
        <Skeleton shape="line" className="w-2/3" />
        <Skeleton shape="line" />
        <Skeleton shape="line" className="w-4/5" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton shape="chakra" className="size-8 shrink-0" />
        <Skeleton shape="line" className="w-24" />
        <Skeleton variant="ikat" className="ml-auto h-6 w-16 rounded-full" />
      </div>
    </div>
  )
}

/** Form while its values load. */
export function SkeletonForm() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-9 w-full" />
      </div>
      <div className="grid gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-9 w-full" />
        <Skeleton shape="line" className="w-2/3" />
      </div>
      <div className="flex items-center gap-2">
        <Skeleton className="size-4 rounded-[4px]" />
        <Skeleton shape="line" className="w-40" />
      </div>
      <Skeleton className="h-9 w-28" />
    </div>
  )
}

/** Table with a header row and three loading rows. */
export function SkeletonTable() {
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border">
      <div className="grid grid-cols-[2fr_1fr] items-center gap-4 border-b bg-muted/40 px-4 py-3 sm:grid-cols-[2fr_1fr_1fr_1fr]">
        <Skeleton className="h-3.5 w-28" />
        <Skeleton className="h-3.5 w-16" />
        <Skeleton className="hidden h-3.5 w-14 sm:block" />
        <Skeleton className="hidden h-3.5 w-10 sm:block" />
      </div>
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          className="grid grid-cols-[2fr_1fr] items-center gap-4 border-b px-4 py-3 last:border-0 sm:grid-cols-[2fr_1fr_1fr_1fr]"
        >
          <div className="flex items-center gap-3">
            <Skeleton shape="diamond" className="size-6 shrink-0" />
            <Skeleton className="h-4 w-28" />
          </div>
          <Skeleton className="h-4 w-16" />
          <Skeleton className="hidden h-4 w-12 sm:block" />
          <Skeleton className="hidden h-5 w-14 rounded-full sm:block" />
        </div>
      ))}
    </div>
  )
}

/** Media placeholder with a caption. Demonstrates layering two artworks. */
export function SkeletonMedia() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border">
      <Skeleton
        art={["temple", "wheel"]}
        className="aspect-[16/9] w-full rounded-none"
      />
      <div className="flex flex-col gap-2.5 p-4">
        <div className="flex items-center gap-2">
          <Skeleton variant="ikat" className="h-5 w-16 rounded-full" />
          <Skeleton shape="line" className="w-20" />
        </div>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  )
}

function ShapeTile({
  shape,
  className,
  children,
}: {
  shape: "chakra" | "arch" | "diamond" | "pida" | "line"
  className: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-20 items-center justify-center">
        <Skeleton shape={shape} className={className} />
      </div>
      <span className="font-mono text-[11px] text-muted-foreground">
        {children}
      </span>
    </div>
  )
}

/** All heritage silhouettes side by side. */
export function SkeletonShapes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-6">
      <ShapeTile shape="chakra" className="size-14">
        chakra
      </ShapeTile>
      <ShapeTile shape="arch" className="h-16 w-12">
        arch
      </ShapeTile>
      <ShapeTile shape="diamond" className="size-11">
        diamond
      </ShapeTile>
      <ShapeTile shape="pida" className="h-11 w-28">
        pida
      </ShapeTile>
      <ShapeTile shape="line" className="w-24">
        line
      </ShapeTile>
    </div>
  )
}

/** Variants on a single compact stack. */
export function SkeletonVariants() {
  return (
    <div className="grid w-full max-w-md gap-3">
      {(["default", "shimmer", "ikat"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <span className="w-20 shrink-0 font-mono text-[11px] text-muted-foreground">
            {variant}
          </span>
          <Skeleton variant={variant} className="h-9 flex-1" />
        </div>
      ))}
    </div>
  )
}

/** One tile per artwork, each at a recommended aspect ratio. */
export function SkeletonArtGrid() {
  return (
    <div className="grid w-full max-w-lg grid-cols-3 items-end gap-3">
      <div className="flex flex-col gap-2">
        <Skeleton art="temple" className="aspect-[16/10] w-full rounded-lg" />
        <span className="font-mono text-[11px] text-muted-foreground">
          temple
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton art="wheel" className="aspect-square w-full rounded-lg" />
        <span className="font-mono text-[11px] text-muted-foreground">
          wheel
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton art="arch" className="aspect-[3/4] w-full rounded-lg" />
        <span className="font-mono text-[11px] text-muted-foreground">
          arch
        </span>
      </div>
    </div>
  )
}
