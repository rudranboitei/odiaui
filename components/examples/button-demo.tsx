"use client"

import { Plus } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button showChakra={false}>No Chakra</Button>
    </div>
  )
}

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="lg">Large</Button>
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="icon" aria-label="Add item">
        <Plus />
      </Button>
    </div>
  )
}
