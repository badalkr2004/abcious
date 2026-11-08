"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    setFinePointer(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 48);

      const st = gsap.to(track, {
        x: () => -getScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScroll()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => st.scrollTrigger?.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative bg-canvas-2">
      <div className="container-x pt-24 sm:pt-32">
        <SectionHeading
          align="split"
          eyebrow="Selected work"
          title={
            <>
              Proof over
              <br />
              <span className="text-signal">promises.</span>
            </>
          }
          description="Immersive builds for companies that need the product — and the story around it — to feel inevitable."
        />
      </div>

      <div className="relative mt-14 overflow-hidden pb-10 sm:mt-20 sm:pb-16">
        <div ref={trackRef} className="flex w-max gap-5 px-[clamp(1.25rem,4vw,3rem)] will-change-transform md:gap-8">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className="group relative w-[min(85vw,34rem)] shrink-0 md:w-[min(70vw,42rem)]"
              onMouseEnter={() => finePointer && setActive(project)}
              onMouseLeave={() => setActive(null)}
              onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
              onFocus={() => setActive(project)}
              onBlur={() => setActive(null)}
              onTouchStart={() => setActive(project)}
            >
              <Link href={`/work/${project.slug}`} className="block" data-cursor="work">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] md:aspect-[5/6]">
                  <div
                    className="absolute inset-0 scale-105 transition-transform duration-700 ease-(--ease-soft) group-hover:scale-100"
                    style={{ background: project.cover.placeholder }}
                    role="img"
                    aria-label={project.cover.alt}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                      {String(i + 1).padStart(2, "0")} · {project.category}
                    </p>
                    <h3 className="display mt-3 text-[clamp(1.8rem,4vw,3rem)] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/75 sm:text-base">{project.client} · {project.year}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Magnetic desktop preview */}
      {finePointer && active ? (
        <div
          className="pointer-events-none fixed z-40 hidden md:block"
          style={{
            left: cursor.x + 24,
            top: cursor.y - 40,
          }}
          aria-hidden="true"
        >
          <div className="w-44 overflow-hidden rounded-[var(--radius-md)] border border-line bg-canvas shadow-(--shadow-lift)">
            <div className="aspect-[4/3]" style={{ background: active.cover.placeholder }} />
            <p className="px-3 py-2 text-xs font-semibold">{active.client}</p>
          </div>
        </div>
      ) : null}

      {/* Touch / mobile sticky preview */}
      {!finePointer && active ? (
        <div className="sticky bottom-4 z-30 mx-auto w-[min(92vw,28rem)] rounded-[var(--radius-md)] border border-line bg-canvas/95 p-4 shadow-(--shadow-lift) backdrop-blur md:hidden">
          <p className="text-xs uppercase tracking-[0.12em] text-ink-soft">{active.client}</p>
          <p className="mt-1 font-semibold">{active.title}</p>
          <Link href={`/work/${active.slug}`} className="link-u mt-2 inline-block text-sm">
            Open case study
          </Link>
        </div>
      ) : null}

      <div className="container-x flex flex-wrap items-center justify-between gap-6 border-t border-line py-12 sm:py-16">
        <p className="max-w-md text-lg text-ink-soft">
          Want results like these for your product? Let&apos;s map the first release.
        </p>
        <Button href={siteConfig.cta.href} eventName="cta_click">
          {siteConfig.cta.label}
        </Button>
      </div>
    </section>
  );
}
