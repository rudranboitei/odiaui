import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const skeletonVariants = cva(
  [
    "relative block overflow-hidden rounded-md",
    "pointer-events-none select-none",
    "animate-pulse motion-reduce:animate-none",
  ],
  {
    variants: {
      variant: {
        /**
         * Heritage surface: warm sandstone tint with a faint jali (lattice)
         * screen pattern inspired by Odisha temple stonework.
         */
        heritage: [
          "bg-amber-100/60 dark:bg-amber-950/35",
          "bg-[repeating-linear-gradient(45deg,rgba(146,64,14,0.04)_0_1px,transparent_1px_13px),repeating-linear-gradient(-45deg,rgba(146,64,14,0.04)_0_1px,transparent_1px_13px)]",
          "dark:bg-[repeating-linear-gradient(45deg,rgba(251,191,36,0.05)_0_1px,transparent_1px_13px),repeating-linear-gradient(-45deg,rgba(251,191,36,0.05)_0_1px,transparent_1px_13px)]",
          "shadow-[inset_0_0_0_1px_rgba(146,64,14,0.05)]",
          "dark:shadow-[inset_0_0_0_1px_rgba(251,191,36,0.06)]",
        ],
        /** Neutral surface for generic layouts. */
        plain: "bg-muted",
      },
    },
    defaultVariants: {
      variant: "heritage",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(skeletonVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

export { Skeleton, skeletonVariants }
