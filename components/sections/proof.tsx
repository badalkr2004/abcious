"use client";

import { useEffect, useRef, useState } from "react";
import { logos, metrics, testimonials, tickerItems } from "@/data/proof";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";

function CountUp({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        if (reduced) {
          setDisplay(value);
          return;
        }
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(value % 1 === 0 ? Math.round(value * eased) : Number((value * eased).toFixed(1)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function Proof() {
  return (
    <section id="proof" className="py-24 sm:py-36">
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="Proof"
          title={
            <>
              Numbers that
              <br />
              <span className="text-signal">survive scrutiny.</span>
            </>
          }
          description="Client logos, outcomes, and voices — the commercial case for working with ABCIOUS."
        />

        <div className="mt-14 grid grid-cols-2 gap-8 border-y border-line py-10 md:grid-cols-4 sm:mt-20">
          {metrics.map((m) => (
            <div key={m.id}>
              <p className="display text-[clamp(2.4rem,5vw,3.8rem)] text-signal">
                <CountUp value={m.value} suffix={m.suffix} prefix={m.prefix} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-y border-line bg-canvas-2 py-5">
        <Marquee items={tickerItems} speed="36s" />
      </div>

      <div className="container-x mt-16">
        <p className="eyebrow text-ink-soft">Trusted by</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {logos.map((logo) => (
            <li
              key={logo.id}
              className="flex h-20 items-center justify-center rounded-[var(--radius-md)] border border-line text-sm font-semibold tracking-wide text-ink-soft"
            >
              {/* Logo image slot */}
              <span aria-label={`${logo.name} logo placeholder`}>{logo.name}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} as="li" delay={i} className="border-t border-line pt-6">
              <blockquote className="text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <p className="mt-6 text-sm font-semibold">{t.name}</p>
              <p className="text-sm text-ink-soft">
                {t.role}, {t.company}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
