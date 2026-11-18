import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Field tokens. Defined on the element so the field renders the same in any
 * host theme, with dark values handled by the `dark:` variant — no global CSS
 * edits required.
 */
const FIELD_TOKENS = [
  "[--odia-surface:oklch(1_0_0)] dark:[--odia-surface:oklch(0.205_0_0)]",
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
  "[--odia-muted:oklch(0.556_0_0)] dark:[--odia-muted:oklch(0.708_0_0)]",
  "[--odia-border:oklch(0.88_0_0)] dark:[--odia-border:oklch(0.32_0_0)]",
  "[--odia-ring:oklch(0.55_0_0)] dark:[--odia-ring:oklch(0.72_0_0)]",
  "[--odia-invalid:oklch(0.577_0.245_27.325)] dark:[--odia-invalid:oklch(0.704_0.191_22.216)]",
]

const inputVariants = cva(
  [
    "flex w-full min-w-0 rounded-full border border-(--odia-border) bg-(--odia-surface) px-4 py-2",
    "tracking-[0.02em] text-(--odia-ink) transition-colors duration-200",
    "placeholder:text-(--odia-muted)",
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-(--odia-ink)",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--odia-ring)",
    "aria-invalid:border-(--odia-invalid) aria-invalid:outline-(--odia-invalid)",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      size: {
        default: "h-10 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-5 text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>

function Input({ className, type = "text", size, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size ?? "default"}
      className={cn(FIELD_TOKENS, inputVariants({ size }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
export type { InputProps }
