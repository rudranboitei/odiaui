"use client"

import {
  ArrowUpRight,
  BadgeCheck,
  Bookmark,
  Loader2,
} from "lucide-react"

import { Badge, type BadgeIconName } from "@/registry/new-york/ui/badge"

/* --------------------------------- Preview --------------------------------- */

/** The six shadcn variants, now in the OdiaUI pill shape. */
export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}

/* ------------------------------- OdiaUI tones ------------------------------ */

/** Three extra tones drawn from OdiaUI's own sand, success and warning tokens. */
export function BadgeOdiaDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="sand">Heritage</Badge>
      <Badge variant="success">Published</Badge>
      <Badge variant="warning">Review</Badge>
    </div>
  )
}

/* --------------------------------- Sizes ----------------------------------- */

/** Three sizes that follow the shared button scale. */
export function BadgeSizesDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}

/* -------------------------------- With icon -------------------------------- */

/** `data-icon` marks icons so the badge sizes them consistently. */
export function BadgeWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="success">
        <BadgeCheck data-icon="inline-start" aria-hidden="true" />
        Verified
      </Badge>
      <Badge variant="outline">
        Saved
        <Bookmark data-icon="inline-end" aria-hidden="true" />
      </Badge>
    </div>
  )
}

/* ------------------------------- With spinner ------------------------------ */

/** A spinner works the same way, with `data-icon` on the SVG. */
export function BadgeSpinnerDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="secondary">
        <Loader2
          data-icon="inline-start"
          className="animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        />
        Generating
      </Badge>
      <Badge variant="destructive">
        <Loader2
          data-icon="inline-start"
          className="animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        />
        Deleting
      </Badge>
    </div>
  )
}

/* --------------------------------- Motif ----------------------------------- */

/** Optional heritage motifs — always decorative, never the only message. */
export function BadgeMotifDemo() {
  const motifs: { name: BadgeIconName; label: string }[] = [
    { name: "deula", label: "Temple" },
    { name: "chakra", label: "Chakra" },
    { name: "padma", label: "Lotus" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {motifs.map((motif) => (
        <Badge key={motif.name} variant="sand" motif={motif.name}>
          {motif.label}
        </Badge>
      ))}
    </div>
  )
}

/* ---------------------------------- Link ----------------------------------- */

/** Wrap a link badge in an anchor so it keeps native link semantics. */
export function BadgeLinkDemo() {
  return (
    <a href="#badge-link" className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--odia-ring)">
      <Badge variant="link">
        Open link
        <ArrowUpRight data-icon="inline-end" aria-hidden="true" />
      </Badge>
    </a>
  )
}
