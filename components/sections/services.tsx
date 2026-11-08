import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-36">
      <div className="container-x">
        <SectionHeading
          align="split"
          eyebrow="Services"
          title={
            <>
              Outcomes, not
              <br />
              <span className="text-signal">offerings.</span>
            </>
          }
          description="Four ways we partner — each scoped to move a commercial needle, not fill a slide deck."
        />

        <ul className="mt-14 divide-y divide-line border-y border-line sm:mt-20">
          {services.map((s, i) => (
            <Reveal key={s.id} as="li" delay={i} className="grid gap-6 py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="md:col-span-1">
                <span className="text-sm tabular-nums text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)]">{s.title}</h3>
                <p className="mt-3 font-medium text-signal">{s.outcome}</p>
              </div>
              <div className="md:col-span-4">
                <p className="leading-relaxed text-ink-soft">{s.description}</p>
              </div>
              <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
