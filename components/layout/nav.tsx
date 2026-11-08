"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";
import { track } from "@/lib/analytics";
import { useTheme } from "@/components/providers/theme-provider";
import { ScrollProgress } from "./scroll-progress";
import { cn } from "@/lib/cn";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setSolid(y > 24);
      if (Math.abs(y - last) > 8) {
        setHidden(y > last && y > 480 && !open);
        last = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,backdrop-filter,box-shadow] duration-500 ease-(--ease-soft)",
        hidden ? "-translate-y-full" : "translate-y-0",
        solid
          ? "bg-canvas/80 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <Link
          href="/"
          className="display text-xl tracking-tight sm:text-2xl"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-full origin-right scale-x-0 bg-current transition-transform duration-400 ease-(--ease-soft) group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-sm"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
              </svg>
            )}
          </button>
          <Link
            href={siteConfig.cta.href}
            className="btn btn-ink !px-4 !py-2.5 text-sm"
            onClick={() => track("cta_click", { location: "nav" })}
          >
            <span className="h-2 w-2 rounded-full bg-volt" aria-hidden="true" />
            {siteConfig.cta.label}
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-line bg-canvas/95 px-6 py-6 backdrop-blur-md lg:hidden"
        >
          <ul className="space-y-4">
            {siteConfig.nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="display text-3xl"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <ScrollProgress />
    </header>
  );
}
