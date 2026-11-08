import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/providers/page-transition";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = getNextProject(slug);

  return (
    <PageTransition>
    <main className="pt-28 sm:pt-36">
      <article>
        <header className="container-x">
          <p className="eyebrow text-signal">
            {project.client} · {project.year}
          </p>
          <h1 className="display mt-5 max-w-5xl text-[clamp(2.8rem,8vw,6.5rem)]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft">{project.summary}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1.5 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </header>

        <div
          className="mt-12 aspect-[21/9] w-full sm:mt-16"
          style={{ background: project.cover.placeholder }}
          role="img"
          aria-label={project.cover.alt}
        />

        <div className="container-x mt-16 grid gap-14 sm:mt-24 md:grid-cols-12">
          <section className="md:col-span-4">
            <h2 className="eyebrow text-ink-soft">Problem</h2>
            <p className="mt-4 text-lg leading-relaxed">{project.problem}</p>
          </section>
          <section className="md:col-span-4">
            <h2 className="eyebrow text-ink-soft">Approach</h2>
            <p className="mt-4 text-lg leading-relaxed">{project.approach}</p>
          </section>
          <section className="md:col-span-4">
            <h2 className="eyebrow text-ink-soft">Solution</h2>
            <p className="mt-4 text-lg leading-relaxed">{project.solution}</p>
          </section>
        </div>

        <section className="container-x mt-20">
          <h2 className="eyebrow text-signal">Visuals</h2>
          <p className="mt-3 text-ink-soft">Image / video slots — replace with project media.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-[var(--radius-lg)] ${i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                style={{
                  background: project.cover.placeholder,
                  filter: `hue-rotate(${i * 24}deg) saturate(1.1)`,
                }}
                role="img"
                aria-label={`${project.title} visual slot ${i + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="container-x mt-20 grid gap-8 border-y border-line py-14 md:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="display text-4xl text-signal sm:text-5xl">{m.value}</p>
              <p className="mt-2 text-sm text-ink-soft">{m.label}</p>
            </div>
          ))}
        </section>

        <section className="container-x mt-20 max-w-3xl">
          <blockquote className="display text-[clamp(1.6rem,3.5vw,2.6rem)] leading-[1.2]">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <p className="mt-6 font-semibold">{project.testimonial.name}</p>
          <p className="text-ink-soft">{project.testimonial.role}</p>
        </section>

        <section className="mt-24 border-t border-line bg-canvas-2">
          <Link
            href={`/work/${next.slug}`}
            className="group container-x flex flex-col gap-6 py-16 transition-colors sm:flex-row sm:items-end sm:justify-between sm:py-24"
          >
            <div>
              <p className="eyebrow text-ink-soft">Next project</p>
              <p className="display mt-4 text-[clamp(2rem,5vw,4rem)] group-hover:text-signal">
                {next.title}
              </p>
              <p className="mt-2 text-ink-soft">
                {next.client} · {next.year}
              </p>
            </div>
            <span className="btn btn-line self-start">
              View case study
              <svg className="arrow h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </section>

        <div className="container-x py-16 text-center">
          <Button href={siteConfig.cta.href}>{siteConfig.cta.label}</Button>
        </div>
      </article>
    </main>
    </PageTransition>
  );
}
