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
      data-slot="component-preview"
      className={cn(
        "not-prose group relative my-6 flex min-h-64 w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-900 shadow-xs md:p-10 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white",
        className
      )}
    >
      {/* <span className="pointer-events-none absolute top-3 right-3 rounded-full  px-1.5 py-0.5 text-[10px] font-medium tracking-wider text-neutral-500 uppercase backdrop-blur  dark:text-neutral-400">
        Preview
      </span> */}
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        {children}
      </div>
    </div>
  )
}
