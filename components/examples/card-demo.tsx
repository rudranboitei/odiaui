"use client"

import * as React from "react"
import { ChevronRight } from "lucide-react"

import { Badge } from "@/registry/new-york/ui/badge"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"

const inputClassName =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"

/* --------------------------------- Login ----------------------------------- */

/** The default preview: a login card, matching the shadcn Card docs example. */
export function CardDemo() {
  return (
    <Card className="w-full max-w-sm" watermark="padma">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="card-login-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="card-login-email"
            type="email"
            placeholder="m@example.com"
            className={inputClassName}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="card-login-password" className="text-sm font-medium">
              Password
            </label>
            <a href="#" className="text-sm underline underline-offset-4">
              Forgot your password?
            </a>
          </div>
          <input
            id="card-login-password"
            type="password"
            className={inputClassName}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Login</Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

/* ---------------------------------- Size ----------------------------------- */

/** `size="sm"` uses a smaller `--card-spacing` for all card sections. */
export function CardSizeDemo() {
  return (
    <Card size="sm" className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Scheduled reports</CardTitle>
        <CardDescription>Weekly snapshots. No more manual exports.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <ul className="ml-4 list-disc space-y-1">
          <li>Choose a schedule (daily, or weekly).</li>
          <li>Send to channels or specific teammates.</li>
          <li>Include charts, tables, and key metrics.</li>
        </ul>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Set up scheduled reports</Button>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
        >
          See what&apos;s new
          <ChevronRight className="size-3.5" aria-hidden="true" />
        </a>
      </CardFooter>
    </Card>
  )
}

/* --------------------------------- Spacing --------------------------------- */

const SPACING_OPTIONS = [16, 20, 24, 32] as const

/** Override `--card-spacing` directly for finer control than `size`. */
export function CardSpacingDemo() {
  const [spacing, setSpacing] = React.useState<(typeof SPACING_OPTIONS)[number]>(24)

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {SPACING_OPTIONS.map((value) => (
          <Button
            key={value}
            size="sm"
            variant={spacing === value ? "default" : "outline"}
            onClick={() => setSpacing(value)}
          >
            {value}px
          </Button>
        ))}
      </div>
      <Card
        className="w-full max-w-sm"
        style={{ "--card-spacing": `${spacing}px` } as React.CSSProperties}
      >
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="outline" size="sm">
              Sign Up
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="card-spacing-email" className="text-sm font-medium">
              Email
            </label>
            <input id="card-spacing-email" type="email" className={inputClassName} />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="card-spacing-password"
              className="text-sm font-medium"
            >
              Password
            </label>
            <input
              id="card-spacing-password"
              type="password"
              className={inputClassName}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

/* --------------------------- Terms and Service ----------------------------- */

/** Edge-to-edge scrollable terms with an inset footer, from the shadcn docs. */
export function CardEdgeToEdge() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Terms of Service</CardTitle>
        <CardDescription>
          Review the terms before accepting the agreement.
        </CardDescription>
      </CardHeader>
      <CardContent className="-mb-(--card-spacing)">
        <div
          tabIndex={0}
          aria-label="Terms of Service"
          className="-mx-(--card-spacing) max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed"
        >
          <p>
            These terms govern your use of the workspace, including access to
            shared documents, project files, and collaboration tools.
          </p>
          <p>
            You are responsible for the content you upload and for ensuring that
            your team has the appropriate permissions to view or edit it.
          </p>
          <p>
            We may update features or limits as the service evolves. When those
            changes materially affect your workflow, we will notify your
            workspace administrators.
          </p>
          <p>
            By continuing, you agree to keep your account credentials secure and
            to follow your organization&apos;s acceptable use policies.
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </CardFooter>
    </Card>
  )
}

/* ---------------------------------- Image ---------------------------------- */

/** An image above the header; negative margin keeps it flush with the edges. */
export function CardImageDemo() {
  return (
    <Card size="sm" className="w-full max-w-sm">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="-mt-(--card-spacing) aspect-video w-full rounded-t-[inherit] object-cover"
      />
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          Featured
        </Badge>
        <CardTitle>Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

/** All three optional heritage watermarks. */
export function CardWatermarksDemo() {
  return (
    <div className="flex flex-wrap items-stretch justify-center gap-4">
      {(["deula", "chakra", "padma"] as const).map((watermark) => (
        <Card key={watermark} size="sm" watermark={watermark} className="w-44">
          <CardHeader>
            <CardTitle className="capitalize">{watermark}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
