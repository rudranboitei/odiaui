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
import { avatarPlaceholders } from "@/registry/new-york/ui/avatar-placeholders"

const IMAGES = avatarPlaceholders

/* --------------------------------- Preview --------------------------------- */

/** A mix of the placeholder SVGs that ship with the item. */
export function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6">
      {[0, 2, 4, 6, 12].map((index) => {
        const image = IMAGES[index]
        return (
          <div key={image.src} className="flex w-20 flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarImage src={image.src} alt={image.label} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
            <span className="text-center text-xs leading-tight text-muted-foreground">
              {image.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* ---------------------------------- Basic ---------------------------------- */

/** One placeholder image on its own, alongside the initials fallback. */
export function AvatarBasicDemo() {
  const image = IMAGES[0]

  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarImage src={image.src} alt={image.label} />
        <AvatarFallback>?</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>
    </div>
  )
}

/* -------------------------------- Placeholders ------------------------------ */

/** All 14 local placeholder portraits. */
export function AvatarImageDemo() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6">
      {IMAGES.slice(0, 5).map((image) => (
        <div key={image.src} className="flex w-20 flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <span className="text-center text-xs leading-tight text-muted-foreground">
            {image.label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* ---------------------------------- Badge ---------------------------------- */

/** Status dot in the bottom-right corner. */
export function AvatarBadgeDemo() {
  const image = IMAGES[4]

  return (
    <Avatar size="lg">
      <AvatarImage src={image.src} alt={image.label} />
      <AvatarFallback>?</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  )
}

/** The badge can hold a small icon instead of being a plain dot. */
export function AvatarBadgeIconDemo() {
  const image = IMAGES[6]

  return (
    <Avatar size="lg">
      <AvatarImage src={image.src} alt={image.label} />
      <AvatarFallback>?</AvatarFallback>
      <AvatarBadge>
        <Plus aria-hidden="true" />
      </AvatarBadge>
    </Avatar>
  )
}

/* ---------------------------------- Group ---------------------------------- */

/** Overlapping team avatars, mixing portraits and patterns. */
export function AvatarGroupDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      {[1, 3, 5, 12].map((index) => {
        const image = IMAGES[index]
        return (
          <Avatar key={image.src}>
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        )
      })}
    </AvatarGroup>
  )
}

/** The same group closed with an overflow count. */
export function AvatarGroupCountDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      {[2, 7, 11].map((index) => {
        const image = IMAGES[index]
        return (
          <Avatar key={image.src}>
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        )
      })}
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  )
}

/** The count can hold an icon, for example when it opens a menu. */
export function AvatarGroupIconDemo() {
  return (
    <AvatarGroup role="group" aria-label="OdiaUI team">
      {[8, 9, 13].map((index) => {
        const image = IMAGES[index]
        return (
          <Avatar key={image.src}>
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
        )
      })}
      <AvatarGroupCount>
        <Plus aria-hidden="true" />
      </AvatarGroupCount>
    </AvatarGroup>
  )
}

/* ---------------------------------- Sizes ---------------------------------- */

/** The four sizes, using one placeholder throughout. */
export function AvatarSizesDemo() {
  const image = IMAGES[10]

  return (
    <div className="flex items-end gap-4">
      {(["sm", "default", "lg", "xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size}>
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  )
}

/* --------------------------------- Gallery --------------------------------- */

/** Every placeholder portrait that ships with the item. */
export function AvatarGalleryDemo() {
  return (
    <div className="grid w-full grid-cols-5 gap-x-4 gap-y-6">
      {IMAGES.map((image) => (
        <div key={image.src} className="flex flex-col items-center gap-2">
          <Avatar>
            <AvatarImage src={image.src} alt={image.label} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <span className="text-center text-[0.6875rem] leading-tight text-muted-foreground">
            {image.label}
          </span>
        </div>
      ))}
    </div>
  )
}

/* --------------------------------- Fallback -------------------------------- */

/** Initials (or a count) while there is no image. */
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
