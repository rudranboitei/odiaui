import { Mail } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export function InputDemo() {
  return <Input type="email" placeholder="Email" className="max-w-sm" />
}

export function InputDisabledDemo() {
  return (
    <Input
      disabled
      type="email"
      placeholder="Email"
      className="max-w-sm"
    />
  )
}

export function InputWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="input-email">Email</Label>
      <Input id="input-email" type="email" placeholder="m@example.com" />
    </div>
  )
}

export function InputWithButtonDemo() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}

export function InputWithIconDemo() {
  return (
    <div className="relative w-full max-w-sm">
      <Mail className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input type="email" placeholder="Email" className="pl-10" />
    </div>
  )
}

export function InputFileDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="input-picture">Picture</Label>
      <Input id="input-picture" type="file" />
    </div>
  )
}

export function InputInvalidDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="input-invalid">Email</Label>
      <Input
        id="input-invalid"
        type="email"
        aria-invalid
        defaultValue="not-an-email"
      />
      <p className="text-sm text-destructive">
        Enter a valid email address.
      </p>
    </div>
  )
}

export function InputSizesDemo() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Input size="sm" placeholder="Small" />
      <Input size="default" placeholder="Default" />
      <Input size="lg" placeholder="Large" />
    </div>
  )
}
