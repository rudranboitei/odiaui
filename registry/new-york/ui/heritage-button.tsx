import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const heritageButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-full",
    "text-sm font-medium text-white",
    "transition duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-amber-600 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "motion-reduce:transition-none motion-reduce:active:scale-100",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[#d18a3e]/50",
          "bg-[linear-gradient(180deg,#b45309_0%,#7c2d12_100%)]",
          "shadow-[0_4px_12px_rgba(120,65,20,0.25),inset_0_1px_0_rgba(255,255,255,0.18)]",
          "hover:brightness-110",
        ],
        outline: [
          "border border-amber-700/40",
          "bg-transparent text-amber-800",
          "shadow-sm hover:bg-amber-500/10",
          "dark:border-amber-300/40 dark:text-amber-300 dark:hover:bg-amber-400/10",
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

export interface HeritageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof heritageButtonVariants> {
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
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
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

const HeritageButton = React.forwardRef<
  HTMLButtonElement,
  HeritageButtonProps
>(
  (
    {
      className,
      variant,
      size,
      showChakra = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          heritageButtonVariants({ variant, size }),
          className
        )}
        {...props}
      >
        {showChakra && <ChakraMark />}
        <span>{children}</span>
      </button>
    )
  }
)

HeritageButton.displayName = "HeritageButton"

export { HeritageButton, heritageButtonVariants }
