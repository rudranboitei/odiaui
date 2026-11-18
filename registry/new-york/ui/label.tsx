import * as React from "react"

import { cn } from "@/lib/utils"

const LABEL_TOKENS = [
  "[--odia-ink:oklch(0.145_0_0)] dark:[--odia-ink:oklch(0.985_0_0)]",
]

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        LABEL_TOKENS,
        "flex items-center gap-2 text-sm leading-none font-medium tracking-[0.02em] text-(--odia-ink) select-none",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-60",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
        className
      )}
      {...props}
    />
  )
}

export { Label }
