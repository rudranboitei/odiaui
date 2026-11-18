"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Mail, Plus } from "lucide-react"
import { Button } from "@/registry/new-york/ui/button"

/* -------------------------------- Preview ---------------------------------- */

export function ButtonDemo() {
  return <Button>Button</Button>
}

/* --------------------------------- Cursor ---------------------------------- */

export function ButtonCursorDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Pointer</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

/* ---------------------------------- Sizes ---------------------------------- */

export function ButtonSizeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

/* --------------------------------- Variants -------------------------------- */

export function ButtonDefaultDemo() {
  return <Button>Default</Button>
}

export function ButtonOutlineDemo() {
  return <Button variant="outline">Outline</Button>
}

export function ButtonSecondaryDemo() {
  return <Button variant="secondary">Secondary</Button>
}

export function ButtonGhostDemo() {
  return <Button variant="ghost">Ghost</Button>
}

export function ButtonDestructiveDemo() {
  return <Button variant="destructive">Destructive</Button>
}

export function ButtonLinkDemo() {
  return <Button variant="link">Link</Button>
}

/* ---------------------------------- Icons ---------------------------------- */

export function ButtonIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon" aria-label="Add item">
        <Plus />
      </Button>
      <Button size="icon" variant="outline" aria-label="Add item">
        <Plus />
      </Button>
    </div>
  )
}

export function ButtonWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail />
        Login with Email
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight />
      </Button>
    </div>
  )
}

/* --------------------------------- Rounded --------------------------------- */

export function ButtonRoundedDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button className="rounded-md">Rounded md</Button>
      <Button className="rounded-lg">Rounded lg</Button>
      <Button className="rounded-full">Rounded full</Button>
    </div>
  )
}

/* --------------------------------- Spinner --------------------------------- */

export function ButtonSpinnerDemo() {
  const [isLoading, setIsLoading] = React.useState(false)

  function handleAction() {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <Button
      isLoading={isLoading}
      loadingText="Downloading..."
      onClick={handleAction}
    >
      Download on the App Store
    </Button>
  )
}

/* ------------------------------- Button Group ------------------------------ */

export function ButtonGroupDemo() {
  return (
    <div className="inline-flex items-center">
      <Button variant="outline" className="rounded-r-none">
        Previous
      </Button>
      <Button variant="outline" className="rounded-none border-l-0">
        Current
      </Button>
      <Button variant="outline" className="rounded-l-none border-l-0">
        Next
      </Button>
    </div>
  )
}

/* --------------------------------- As Link --------------------------------- */

export function ButtonAsLinkDemo() {
  return (
    <Button asChild>
      <Link href="/dashboard">Go to dashboard</Link>
    </Button>
  )
}
