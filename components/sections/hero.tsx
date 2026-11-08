import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 80% 0%, color-mix(in oklab, var(--signal) 18%, transparent), transparent 55%), radial-gradient(ellipse 60% 40% at 10% 80%, color-mix(in oklab, var(--volt) 12%, transparent), transparent 50%)",
        }}
      />

      <div className="container-x relative">
        <p
          className="fade-up eyebrow text-signal"
          style={{ "--i": 0 } as Vars}
        >
          AI software agency
        </p>

        <p
          className="fade-up display mt-6 text-[clamp(3.2rem,12vw,9.5rem)]"
          style={{ "--i": 1 } as Vars}
        >
          {siteConfig.name}
        </p>

        <h1 className="sr-only">{siteConfig.tagline}</h1>

        <div className="mt-4 max-w-3xl">
          <p className="display text-[clamp(1.6rem,4.2vw,3.2rem)] leading-[1.05] text-ink-soft">
            <span className="line-mask">
              <span style={{ "--i": 0 } as Vars}>We ship AI products</span>
            </span>
            <span className="line-mask">
              <span style={{ "--i": 1 } as Vars}>
                that make ambitious{" "}
                <span className="text-ink">companies</span>
              </span>
            </span>
            <span className="line-mask">
              <span style={{ "--i": 2 } as Vars}>
                look{" "}
                <span className="relative inline-block text-signal">
                  inevitable.
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.35em] origin-left scale-x-0 rounded-sm bg-volt animate-[swipe_0.8s_var(--ease-soft)_forwards]"
                    style={{ animationDelay: "1s" }}
                  />
                </span>
              </span>
            </span>
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end sm:mt-14">
          <p
            className="fade-up max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-6"
            style={{ "--i": 6 } as Vars}
          >
            For founders, product leaders, and brands who want software that feels
            premium, performs under pressure, and converts curiosity into trust.
          </p>
          <div
            className="fade-up flex flex-wrap items-center gap-x-6 gap-y-4 md:col-span-6 md:justify-end"
            style={{ "--i": 7 } as Vars}
          >
            <Button href={siteConfig.cta.href} eventName="cta_click">
              {siteConfig.cta.label}
            </Button>
            <a href="#work" className="link-u pb-0.5 font-medium">
              View selected work
            </a>
          </div>
        </div>
      </div>

      <div className="container-x fade-up mt-16 flex items-center justify-between sm:mt-24" style={{ "--i": 8 } as Vars}>
        <p className="text-sm text-ink-soft">Scroll</p>
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-line" />
          <span className="block h-8 w-px animate-pulse bg-signal" />
        </div>
      </div>

      <div className="mt-10 border-y border-line py-4 sm:mt-14">
        <div className="marquee-wrap overflow-hidden">
          <div className="marquee" style={{ ["--speed" as string]: "42s" }}>
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
                {["AI Products", "Design Systems", "Full-Stack", "Brand Web", "ML Ops"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="flex items-center whitespace-nowrap text-sm font-semibold uppercase tracking-[0.12em]"
                    >
                      <span className="px-6">{tag}</span>
                      <span className="text-signal">✺</span>
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
