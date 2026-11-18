"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Avatar                                                             */
/*  Same API as shadcn/ui Avatar (Root / Image / Fallback / Badge / Group),    */
/*  plus a size scale and ten illustrated portraits. Colours come from OdiaUI  */
/*  `--odia-*` tokens, so it keeps its look in any host theme and dark mode.   */
/* -------------------------------------------------------------------------- */

/**
 * Avatar tokens. Declared on the root so every part inherits them, with a
 * light and a dark value for each — no global CSS edits required.
 */
const AVATAR_TOKENS = [
  "[--odia-surface:oklch(1_0_0)] dark:[--odia-surface:oklch(0.205_0_0)]",
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
  "[--odia-border:oklch(0.88_0_0)] dark:[--odia-border:oklch(0.32_0_0)]",
]

const avatarVariants = cva(
  [
    "group/avatar relative flex shrink-0 items-center justify-center overflow-visible rounded-full select-none",
    "border border-(--odia-border) bg-(--odia-surface)",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      size: {
        sm: "size-8 text-[0.625rem]",
        default: "size-10 text-xs",
        lg: "size-12 text-sm",
        xl: "size-16 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size ?? "default"}
      className={cn(AVATAR_TOKENS, avatarVariants({ size }), className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full overflow-hidden rounded-full object-cover",
        className
      )}
      {...props}
    />
  )
}

/** Initials or a short label shown when there is no image. */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full",
        "bg-(--odia-surface) font-medium tracking-[0.02em] text-(--odia-ink)",
        className
      )}
      {...props}
    />
  )
}

/**
 * Status dot in the bottom-right corner. Defaults to the ink colour; pass a
 * className to use a presence colour.
 */
function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full",
        "bg-(--odia-ink) text-(--odia-surface) ring-2 ring-(--odia-surface)",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        "group-data-[size=xl]/avatar:size-3.5 group-data-[size=xl]/avatar:[&>svg]:size-2.5",
        className
      )}
      {...props}
    />
  )
}

/**
 * Overlapping row for teams and comment threads. Each avatar gets a ring in the
 * surface colour, so the stack still reads on a card.
 */
function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex items-center -space-x-2",
        "[&>[data-slot=avatar]]:ring-2 [&>[data-slot=avatar]]:ring-(--odia-surface)",
        className
      )}
      {...props}
    />
  )
}

/** Overflow count that closes an `AvatarGroup`. */
function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        AVATAR_TOKENS,
        "relative flex size-10 shrink-0 items-center justify-center rounded-full",
        "border border-(--odia-border) bg-(--odia-surface) text-xs font-medium text-(--odia-ink)",
        "ring-2 ring-(--odia-surface)",
        "group-has-data-[size=sm]/avatar-group:size-8",
        "group-has-data-[size=lg]/avatar-group:size-12",
        "group-has-data-[size=xl]/avatar-group:size-16",
        "[&>svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
  avatarVariants,
}
