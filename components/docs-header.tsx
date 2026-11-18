"use client";

import * as React from "react";
import { ChevronDown, Github, Languages, SidebarIcon } from "lucide-react";
import { SidebarCollapseTrigger } from "fumadocs-ui/components/sidebar/base";
import { useDocsLayout } from "fumadocs-ui/layouts/docs";
import {
  LanguageSelect,
  LanguageSelectText,
} from "fumadocs-ui/layouts/shared/slots/language-select";

import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const githubUrl = "https://github.com/rudranboitei/odiaui";

const iconButton =
  "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground";

/**
 * Docs header.
 *
 * Desktop: Fumadocs does not render a header there, so this one carries the
 * language switcher, GitHub link, and theme toggle at the top-right.
 *
 * Mobile: keep the familiar logo / search / menu row. The language switcher,
 * GitHub, and theme controls live in the sidebar drawer header.
 */
export function DocsHeader({ className, ...props }: React.ComponentProps<"header">) {
  const { slots } = useDocsLayout();

  const NavTitle = slots.navTitle;
  const SearchTrigger = slots.searchTrigger ? slots.searchTrigger.sm : undefined;
  const SidebarTrigger = slots.sidebar?.trigger;

  return (
    <header
      {...props}
      className={cn(
        "[grid-area:header] sticky top-(--fd-docs-row-1) z-30 flex h-(--fd-header-height) items-center gap-1 border-b bg-fd-background/85 px-2.5 backdrop-blur-md md:px-4",
        className
      )}
    >
      <div className="flex min-w-0 items-center gap-2 md:hidden">
        {NavTitle ? <NavTitle className="inline-flex items-center gap-2.5" /> : null}
      </div>

      <div className="flex-1" />

      <div className="hidden items-center gap-1 md:flex">
        {/* The mobile `SidebarTrigger` only opens the drawer. On desktop the
            sidebar is collapsed instead, using Fumadocs' own collapse control. */}
        <SidebarCollapseTrigger
          className={iconButton}
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          <SidebarIcon aria-hidden className="size-4" />
        </SidebarCollapseTrigger>

        {SearchTrigger ? (
          <SearchTrigger className={iconButton} hideIfDisabled />
        ) : null}

        <span
          aria-hidden="true"
          className="mx-1 h-4 w-px shrink-0 bg-fd-border"
        />

        <LanguageSelect
          variant="ghost"
          className="h-8 gap-1.5 rounded-full px-2 text-fd-muted-foreground hover:text-fd-foreground"
        >
          <Languages aria-hidden className="size-4" />
          <LanguageSelectText className="text-xs font-medium" />
          <ChevronDown aria-hidden className="size-3 opacity-60" />
        </LanguageSelect>

        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub repository"
          title="GitHub"
          className={iconButton}
        >
          <Github aria-hidden className="size-4" />
        </a>

        <ThemeToggle />
      </div>

      {SearchTrigger ? (
        <SearchTrigger
          className={cn(iconButton, "md:hidden")}
          hideIfDisabled
          aria-label="Open search"
        />
      ) : null}

      {SidebarTrigger ? (
        <SidebarTrigger className={cn(iconButton, "md:hidden")}>
          <SidebarIcon aria-hidden className="size-4" />
        </SidebarTrigger>
      ) : null}
    </header>
  );
}
