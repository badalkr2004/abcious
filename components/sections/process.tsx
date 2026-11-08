"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const panels = el.querySelectorAll<HTMLElement>("[data-step]");
    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { opacity: 0.25, y: 40 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            },
          },
        );
        if (i < panels.length - 1) {
          gsap.to(panel, {
            opacity: 0.2,
            scrollTrigger: {
              trigger: panels[i + 1],
              start: "top 70%",
              end: "top 40%",
              scrub: true,
            },
          });
        }
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={root} className="bg-signal-deep py-24 text-[color:var(--canvas)] sm:py-36">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="eyebrow text-volt">Process</span>
          <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)] text-[color:var(--canvas)]">
            How we work —
            <br />
            <span className="text-volt">without the theater.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[color:var(--canvas)]/70">
            A scroll of four steps. Same senior team from diagnose to prove.
          </p>
        </div>

        <ol className="mt-16 space-y-10 sm:mt-24 sm:space-y-16">
          {processSteps.map((step) => (
            <li
              key={step.number}
              data-step
              className="grid gap-6 border-t border-[color:var(--canvas)]/15 pt-10 md:grid-cols-12"
            >
              <p className="display text-5xl text-volt md:col-span-2">{step.number}</p>
              <div className="md:col-span-4">
                <h3 className="display text-[clamp(2rem,4vw,3.2rem)]">{step.title}</h3>
                <p className="mt-3 text-lg text-[color:var(--canvas)]/85">{step.summary}</p>
              </div>
              <p className="leading-relaxed text-[color:var(--canvas)]/65 md:col-span-6 md:pt-2">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
