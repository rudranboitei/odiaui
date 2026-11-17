import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Button                                                             */
/*  The single shared button for every component. Uses the OdiaUI blue (#3b82f6) */
/*  with a dark ink label for AA contrast, plus a plain outline option and a    */
/*  no-icon option for compact UI.                                             */
/* -------------------------------------------------------------------------- */

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-full",
    // #020617 on #3b82f6 = 5.48:1 (AA); white on #3b82f6 is only 3.68:1.
    "text-sm font-medium text-[#020617]",
    "transition duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "motion-reduce:transition-none motion-reduce:active:scale-100",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[#3b82f6]/60",
          "bg-[#3b82f6]",
          "shadow-[0_4px_12px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.18)]",
          "hover:brightness-110",
        ],
        outline: [
          "border border-[#3b82f6]/50",
          "bg-transparent text-[#1d4ed8]",
          "shadow-sm hover:bg-[#3b82f6]/10",
          "dark:border-[#3b82f6]/50 dark:text-[#93c5fd] dark:hover:bg-[#3b82f6]/15",
        ],
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 text-base",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Show the chakra-inspired decorative icon. @default true */
  showChakra?: boolean
}

const ChakraMark = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className="size-[18px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.2} />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={1.2} />
    {Array.from({ length: 8 }, (_, index) => (
      <line
        key={index}
        x1="12"
        y1="3"
        x2="12"
        y2="10"
        stroke="currentColor"
        strokeWidth="1"
        transform={`rotate(${index * 45} 12 12)`}
      />
    ))}
  </svg>
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, showChakra = true, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {showChakra && <ChakraMark />}
        <span>{children}</span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
