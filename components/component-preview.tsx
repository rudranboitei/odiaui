"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  children: React.ReactNode
  className?: string
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "not-prose group relative my-6 flex min-h-64 w-full items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-[#fafafa] p-6 text-neutral-900 md:p-10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white",
        className
      )}
    >
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
  )
}
