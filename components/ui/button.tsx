"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "ink" | "line";
  className?: string;
  eventName?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "ink",
  className,
  eventName = "cta_click",
  external,
}: Props) {
  const classes = cn("btn", variant === "ink" ? "btn-ink" : "btn-line", className);

  const onClick = () => track(eventName, { href, label: String(children) });

  if (external) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <svg className="arrow h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
