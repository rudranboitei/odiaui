"use client"

import { HeritageButton } from "@/registry/new-york/ui/heritage-button"

export function HeritageButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <HeritageButton>Default</HeritageButton>
      <HeritageButton variant="outline">Outline</HeritageButton>
      <HeritageButton showChakra={false}>No Chakra</HeritageButton>
    </div>
  )
}

export function HeritageButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <HeritageButton size="lg">Large</HeritageButton>
      <HeritageButton size="default">Default</HeritageButton>
      <HeritageButton size="sm">Small</HeritageButton>
      <HeritageButton size="icon" aria-label="Heritage action" />
    </div>
  )
}
