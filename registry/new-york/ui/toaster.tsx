"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react"
import {
  Toaster as Sonner,
  toast,
  type ToasterProps as SonnerToasterProps,
} from "sonner"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------- */
/*  OdiaUI Toaster                                                            */
/*  Wraps Sonner — the toast primitive used by shadcn/ui — with OdiaUI tokens.  */
/*  Variants are Sonner's toast types (default, success, info, warning, error,  */
/*  loading and promise). Each type gets its own icon and a restrained border   */
/*  tone, so state never depends on colour alone. No theme-provider package:    */
/*  the light/dark values live in the --odia-* tokens shipped with this item.   */
/* -------------------------------------------------------------------------- */

/**
 * Scoped token defaults. The CLI also injects these into the consumer's CSS;
 * declaring them here means a copy-and-paste install still renders correctly.
 */
const TOAST_TOKENS = [
  "[--odia-surface:oklch(1_0_0)] dark:[--odia-surface:oklch(0.205_0_0)]",
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
  "[--odia-muted:oklch(0.556_0_0)] dark:[--odia-muted:oklch(0.708_0_0)]",
  "[--odia-border:oklch(0.88_0_0)] dark:[--odia-border:oklch(0.32_0_0)]",
  "[--odia-ring:oklch(0.55_0_0)] dark:[--odia-ring:oklch(0.72_0_0)]",
  "[--odia-invalid:oklch(0.577_0.245_27.325)] dark:[--odia-invalid:oklch(0.704_0.191_22.216)]",
]

/** Sonner reads these CSS variables for every toast part. */
const TOAST_STYLE = {
  "--normal-bg": "var(--odia-surface)",
  "--normal-text": "var(--odia-ink)",
  "--normal-border": "var(--odia-border)",
  "--normal-bg-hover": "var(--odia-surface)",
  "--normal-border-hover": "var(--odia-border)",
  "--success-bg": "var(--odia-surface)",
  "--success-text": "var(--odia-ink)",
  "--success-border": "var(--odia-ring)",
  "--info-bg": "var(--odia-surface)",
  "--info-text": "var(--odia-ink)",
  "--info-border": "var(--odia-muted)",
  "--warning-bg": "var(--odia-surface)",
  "--warning-text": "var(--odia-ink)",
  "--warning-border": "var(--odia-ink)",
  "--error-bg": "var(--odia-surface)",
  "--error-text": "var(--odia-ink)",
  "--error-border": "var(--odia-invalid)",
  "--border-radius": "1rem",
} as React.CSSProperties

/**
 * Toast surface per Sonner type. Borders use existing OdiaUI tokens and stay
 * secondary to the icon + message, which carry the meaning.
 */
const toastVariants = cva(
  "!rounded-2xl !border !bg-(--odia-surface) !p-4 !text-(--odia-ink)",
  {
    variants: {
      variant: {
        default: "!border-(--odia-border)",
        success: "!border-(--odia-ring)",
        info: "!border-(--odia-muted)",
        warning: "!border-(--odia-ink)",
        error: "!border-(--odia-invalid)",
        loading: "!border-(--odia-border)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const TOAST_ICONS = {
  success: <CircleCheckIcon className="size-4" aria-hidden="true" />,
  info: <InfoIcon className="size-4" aria-hidden="true" />,
  warning: <TriangleAlertIcon className="size-4" aria-hidden="true" />,
  error: <OctagonXIcon className="size-4" aria-hidden="true" />,
  loading: (
    <Loader2Icon
      className="size-4 animate-spin motion-reduce:animate-none"
      aria-hidden="true"
    />
  ),
  close: <XIcon className="size-3.5" aria-hidden="true" />,
}

const FOCUS_RING =
  "focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-(--odia-ring)"

export type ToasterProps = SonnerToasterProps

/** Mount once in your layout. Fire notifications with the exported `toast`. */
function Toaster({
  className,
  icons,
  toastOptions,
  style,
  theme = "system",
  position = "bottom-right",
  ...props
}: ToasterProps) {
  const custom = toastOptions?.classNames

  return (
    <Sonner
      theme={theme}
      position={position}
      className={cn(TOAST_TOKENS, "toaster group", className)}
      style={{ ...TOAST_STYLE, ...style } as React.CSSProperties}
      icons={{ ...TOAST_ICONS, ...icons }}
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cn("!font-normal !tracking-normal", custom?.toast),
          title: cn(
            "!text-sm !font-medium !tracking-[0.01em] !text-(--odia-ink)",
            custom?.title
          ),
          description: cn(
            "!text-xs !leading-relaxed !text-(--odia-muted)",
            custom?.description
          ),
          default: cn(toastVariants({ variant: "default" }), custom?.default),
          success: cn(toastVariants({ variant: "success" }), custom?.success),
          info: cn(toastVariants({ variant: "info" }), custom?.info),
          warning: cn(toastVariants({ variant: "warning" }), custom?.warning),
          error: cn(toastVariants({ variant: "error" }), custom?.error),
          loading: cn(toastVariants({ variant: "loading" }), custom?.loading),
          actionButton: cn(
            "!h-7 !rounded-full !px-3 !text-xs !font-medium",
            "transition-opacity duration-200 hover:!opacity-90",
            FOCUS_RING,
            custom?.actionButton
          ),
          cancelButton: cn(
            "!h-7 !rounded-full !border !border-(--odia-border) !bg-transparent !px-3 !text-xs !font-medium !text-(--odia-ink)",
            "transition-opacity duration-200 hover:!opacity-90",
            FOCUS_RING,
            custom?.cancelButton
          ),
          closeButton: cn(
            "!size-5 !rounded-full !border-(--odia-border) !bg-(--odia-surface) !text-(--odia-ink)",
            "transition-opacity duration-200 hover:!opacity-90",
            FOCUS_RING,
            custom?.closeButton
          ),
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast, toastVariants }
