import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[0.02em] transition-opacity duration-200 select-none outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90 focus-visible:outline-destructive",
        outline:
          "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-90",
        ghost:
          "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 text-sm [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 px-4 text-xs [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 px-7 text-base [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 p-0 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  isLoading = false,
  loadingText,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const isDisabled = isLoading || disabled

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      aria-disabled={asChild && isDisabled ? true : undefined}
      className={cn(
        buttonVariants({ variant, size, className }),
        asChild && isDisabled && "pointer-events-none opacity-60"
      )}
      disabled={asChild ? undefined : isDisabled}
      {...props}
    >
      {asChild ? (
        children
      ) : isLoading ? (
        <>
          <Loader2 className="animate-spin" />
          {loadingText ? <span>{loadingText}</span> : children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
