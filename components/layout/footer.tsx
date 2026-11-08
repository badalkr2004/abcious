import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-signal-deep pt-20 text-[color:var(--canvas)] sm:pt-28">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow text-volt">Ready when you are</p>
            <h2 className="display mt-5 text-[clamp(2.8rem,8vw,6rem)] text-[color:var(--canvas)]">
              Let&apos;s make the next thing{" "}
              <span className="text-volt">inevitable.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <Button href={siteConfig.cta.href} className="!bg-volt !text-[#141511]" eventName="cta_click">
              {siteConfig.cta.label}
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-[color:var(--canvas)]/15 pt-10 sm:mt-24 md:grid-cols-3">
          <div>
            <p className="display text-3xl">{siteConfig.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[color:var(--canvas)]/65">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--canvas)]/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-u pb-0.5">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--canvas)]/50">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-u pb-0.5">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="link-u pb-0.5" target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-x mt-16 flex flex-col gap-3 pb-8 text-xs text-[color:var(--canvas)]/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {siteConfig.name}. All rights reserved.</p>
        <Link href="/#top" className="group inline-flex items-center gap-2 self-start hover:text-[color:var(--canvas)] sm:self-auto">
          Back to top
          <span className="transition-transform duration-500 ease-(--ease-spring) group-hover:-translate-y-1">↑</span>
        </Link>
      </div>

      <p
        aria-hidden="true"
        className="display pointer-events-none -mb-[0.16em] select-none whitespace-nowrap text-center text-[14vw] leading-[0.8] text-[color:var(--canvas)]/[0.06]"
      >
        {siteConfig.name.toLowerCase()}
      </p>
    </footer>
  );
}
