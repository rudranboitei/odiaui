"use client"

import { Plus } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/new-york/ui/avatar"
import { AvatarArt, type AvatarArtName } from "@/registry/new-york/ui/avatar-art"
import { avatarPlaceholders } from "@/registry/new-york/ui/avatar-placeholders"

const PORTRAITS: { name: AvatarArtName; label: string }[] = [
  { name: "odissi-dancer", label: "Odissi dancer" },
  { name: "pattachitra-artist", label: "Pattachitra artist" },
  { name: "sambalpuri-artisan", label: "Sambalpuri weaver" },
  { name: "young-woman", label: "Young woman" },
  { name: "young-man", label: "Young man" },
  { name: "adivasi-woman", label: "Adivasi woman" },
  { name: "adivasi-man", label: "Adivasi man" },
  { name: "elder-woman", label: "Elder woman" },
  { name: "elder-man", label: "Elder man" },
  { name: "folk-performer", label: "Folk performer" },
]

/* --------------------------------- Preview --------------------------------- */

/** The default preview: illustrated portraits from the OdiaUI set. */
export function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6">
      {PORTRAITS.slice(0, 5).map(({ name, label }) => (
        <div key={name} className="flex w-20 flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarArt name={name} />
          </Avatar>
          <span className="text-center text-xs leading-tight text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------- Basic ---------------------------------- */

/** One illustrated avatar on its own. */
export function AvatarBasicDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarArt name="odissi-dancer" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>
    </div>
  )
}

/* --------------------------- Placeholder images ----------------------------- */

/** Root-relative placeholder SVGs installed under `public/avatars`. */
export function AvatarImageDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6">
      {avatarPlaceholders.slice(0, 5).map(({ src, label }) => (
        <div key={src} className="flex w-20 flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarImage src={src} alt={label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <span className="text-center text-xs leading-tight text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------- Badge ---------------------------------- */

/** Status dot in the bottom-right corner. */
export function AvatarBadgeDemo() {
  return (
    <Avatar size="lg">
      <AvatarArt name="young-woman" />
      <AvatarBadge className="bg-green-500" />
    </Avatar>
  )
}

/** The badge can hold a small icon instead of being a plain dot. */
export function AvatarBadgeIconDemo() {
  return (
    <Avatar size="lg">
      <AvatarArt name="pattachitra-artist" />
      <AvatarBadge>
        <Plus aria-hidden="true" />
      </AvatarBadge>
    </Avatar>
  )
}

/* ---------------------------------- Group ---------------------------------- */

/** Overlapping team avatars. */
export function AvatarGroupDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      <Avatar>
        <AvatarArt name="odissi-dancer" />
      </Avatar>
      <Avatar>
        <AvatarArt name="pattachitra-artist" />
      </Avatar>
      <Avatar>
        <AvatarArt name="sambalpuri-artisan" />
      </Avatar>
      <Avatar>
        <AvatarArt name="folk-performer" />
      </Avatar>
    </AvatarGroup>
  )
}

/** The same group closed with an overflow count. */
export function AvatarGroupCountDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      <Avatar>
        <AvatarArt name="odissi-dancer" />
      </Avatar>
      <Avatar>
        <AvatarArt name="pattachitra-artist" />
      </Avatar>
      <Avatar>
        <AvatarArt name="sambalpuri-artisan" />
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}

/** The count can hold an icon, for example when it opens a menu. */
export function AvatarGroupIconDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      <Avatar>
        <AvatarArt name="odissi-dancer" />
      </Avatar>
      <Avatar>
        <AvatarArt name="pattachitra-artist" />
      </Avatar>
      <Avatar>
        <AvatarArt name="sambalpuri-artisan" />
      </Avatar>
      <AvatarGroupCount>
        <Plus aria-hidden="true" />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}

/* ---------------------------------- Sizes ---------------------------------- */

/** The four sizes, using the same portrait. */
export function AvatarSizesDemo() {
  return (
    <div className="flex items-end gap-4">
      {(["sm", "default", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size}>
            <AvatarArt name="odissi-dancer" />
          </Avatar>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------- Illustrations ------------------------------ */

/** All ten portraits that ship with the item. */
export function AvatarGalleryDemo() {
  return (
    <div className="grid w-full grid-cols-5 gap-x-4 gap-y-6">
      {PORTRAITS.map(({ name, label }) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarArt name={name} />
          </Avatar>
          <span className="text-center text-[0.6875rem] leading-tight text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* --------------------------------- Fallback -------------------------------- */

/** Initials (or a count) while there is no portrait. */
export function AvatarFallbackDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  )
}
