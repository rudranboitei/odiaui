import { Button } from "@/registry/new-york/ui/button"
import { Label } from "@/registry/new-york/ui/label"
import { Textarea } from "@/registry/new-york/ui/textarea"

export function TextareaDemo() {
  return (
    <Textarea
      placeholder="Type your message here."
      className="max-w-sm"
    />
  )
}

export function TextareaDisabledDemo() {
  return (
    <Textarea
      disabled
      placeholder="Type your message here."
      className="max-w-sm"
    />
  )
}

export function TextareaWithLabelDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="textarea-message">Message</Label>
      <Textarea
        id="textarea-message"
        placeholder="Type your message here."
      />
    </div>
  )
}

export function TextareaInvalidDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="textarea-invalid">Message</Label>
      <Textarea
        id="textarea-invalid"
        aria-invalid
        placeholder="Type your message here."
      />
      <p className="text-sm text-destructive">
        Message cannot be empty.
      </p>
    </div>
  )
}

export function TextareaSizesDemo() {
  return (
    <div className="grid w-full max-w-sm gap-3">
      <Textarea size="sm" placeholder="Small" />
      <Textarea size="default" placeholder="Default" />
      <Textarea size="lg" placeholder="Large" />
    </div>
  )
}

export function TextareaWithButtonDemo() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Type your message here." />
      <Button type="submit" className="justify-self-end">
        Send message
      </Button>
    </div>
  )
}
