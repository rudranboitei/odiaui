"use client"

import { Skeleton } from "@/registry/new-york/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function SkeletonVariants() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Skeleton variant="heritage" className="h-10 w-full" />
      <Skeleton variant="plain" className="h-10 w-full" />
    </div>
  )
}

export function SkeletonCardDemo() {
  return (
    <div className="flex w-full max-w-sm items-start gap-3 rounded-lg border p-4">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  )
}
