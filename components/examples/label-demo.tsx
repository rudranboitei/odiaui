import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"

export function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" type="email" placeholder="m@example.com" />
    </div>
  )
}

export function LabelRequiredDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-name">
        Name <span className="text-destructive">*</span>
      </Label>
      <Input id="label-name" placeholder="Your name" />
    </div>
  )
}

export function LabelCheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <input
        id="label-terms"
        type="checkbox"
        className="peer size-4 accent-primary"
      />
      <Label htmlFor="label-terms" className="peer-disabled:opacity-60">
        Accept terms and conditions
      </Label>
    </div>
  )
}

export function LabelDisabledDemo() {
  return (
    <div className="group grid w-full max-w-sm gap-2" data-disabled="true">
      <Label htmlFor="label-disabled">Disabled field</Label>
      <Input id="label-disabled" disabled placeholder="Disabled" />
    </div>
  )
}
