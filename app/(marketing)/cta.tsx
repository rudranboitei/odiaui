import type { ReactNode } from "react";

import Image from "next/image";

import { Button, type ButtonProps } from "@/components/ui/button";
import Link from "next/link";

type CtaButtonProps = Omit<ButtonProps, "asChild" | "children"> & {
  href: string;
  children: ReactNode;
};

/** Anchor version of the shared Button, used for navigation CTAs. */
export function CtaButton({ href, children, ...props }: CtaButtonProps) {
  return (
    <Button asChild {...props}>
      <Link href={href}>
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-background">
          <Image
            src="/brand/odiaui-icon-white.svg"
            alt=""
            aria-hidden="true"
            width={264}
            height={303}
            className="size-3.5"
            unoptimized
          />
        </span>
        {children}
      </Link>
    </Button>
  );
}
