"use client"

import { Button } from "@/registry/new-york/ui/button"
import { toast } from "@/registry/new-york/ui/toaster"

/* --------------------------------- Preview --------------------------------- */

/** The toast shown in the preview: title, description and an action. */
export function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => toast.success("Event restored"),
          },
        })
      }
    >
      Show Toast
    </Button>
  )
}

/* ---------------------------------- Types ---------------------------------- */

/** Every Sonner toast type supported by the OdiaUI Toaster. */
export function ToastTypesDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the venue 10 minutes before the event time")
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.loading("Saving event…", { duration: 2000 })
        }
      >
        Loading
      </Button>
    </div>
  )
}

/* --------------------------------- Promise --------------------------------- */

/** Loading, success and error states from one asynchronous call. */
export function ToastPromiseDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(
          new Promise<{ name: string }>((resolve) =>
            setTimeout(() => resolve({ name: "Event" }), 1500)
          ),
          {
            loading: "Saving…",
            success: (data) => `${data.name} has been created`,
            error: "Could not save the event",
          }
        )
      }
    >
      Promise Toast
    </Button>
  )
}

/* --------------------------------- Action ---------------------------------- */

/** Action and cancel buttons inherit the OdiaUI token palette. */
export function ToastActionDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "You can still undo this.",
          action: { label: "Undo", onClick: () => toast("Undone") },
          cancel: { label: "Dismiss", onClick: () => toast("Dismissed") },
          duration: 10000,
        })
      }
    >
      With Action
    </Button>
  )
}

/* -------------------------------- Position --------------------------------- */

/** Position can be set on the Toaster or on a single toast. */
export function ToastPositionDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Top right toast", { position: "top-right" })
        }
      >
        Top Right
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("Bottom center toast", { position: "bottom-center" })
        }
      >
        Bottom Center
      </Button>
    </div>
  )
}

/* -------------------------------- Dismissible ------------------------------- */

/** Every toast has a close button; this one stays until it is dismissed. */
export function ToastDismissibleDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Profile updated", {
          description: "Your changes are saved.",
          duration: Infinity,
        })
      }
    >
      Dismissible Toast
    </Button>
  )
}
