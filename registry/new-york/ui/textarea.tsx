import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/** Same self-contained field tokens as `Input`. */
const FIELD_TOKENS = [
  "[--odia-surface:oklch(1_0_0)] dark:[--odia-surface:oklch(0.205_0_0)]",
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
  "[--odia-muted:oklch(0.556_0_0)] dark:[--odia-muted:oklch(0.708_0_0)]",
  "[--odia-border:oklch(0.88_0_0)] dark:[--odia-border:oklch(0.32_0_0)]",
  "[--odia-ring:oklch(0.55_0_0)] dark:[--odia-ring:oklch(0.72_0_0)]",
  "[--odia-invalid:oklch(0.577_0.245_27.325)] dark:[--odia-invalid:oklch(0.704_0.191_22.216)]",
]

const textareaVariants = cva(
  [
    "flex w-full resize-y rounded-2xl border border-(--odia-border) bg-(--odia-surface) px-4 py-3",
    "tracking-[0.02em] text-(--odia-ink) transition-colors duration-200",
    "placeholder:text-(--odia-muted)",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--odia-ring)",
    "aria-invalid:border-(--odia-invalid) aria-invalid:outline-(--odia-invalid)",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      size: {
        default: "min-h-20 text-sm",
        sm: "min-h-16 px-3 py-2 text-xs",
        lg: "min-h-28 px-5 py-4 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type TextareaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants>

function Textarea({ className, size, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-size={size ?? "default"}
      className={cn(FIELD_TOKENS, textareaVariants({ size }), className)}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
export type { TextareaProps }
