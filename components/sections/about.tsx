import { philosophy, team } from "@/data/team";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="bg-canvas-2 py-24 sm:py-36">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow text-signal">{philosophy.eyebrow}</span>
            <h2 className="display mt-5 text-[clamp(2.6rem,6vw,4.5rem)]">{philosophy.title}</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-7 md:pt-10">
            {philosophy.body}
          </p>
        </div>

        <ul className="mt-16 grid gap-8 sm:mt-24 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.id} as="li" delay={i}>
              <div
                className="aspect-[4/5] rounded-[var(--radius-lg)]"
                style={{ background: m.placeholder }}
                role="img"
                aria-label={`${m.name} portrait — image slot`}
              />
              <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
              <p className="text-sm text-signal">{m.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
