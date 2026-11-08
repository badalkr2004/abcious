import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "left" | "split";
};

export function SectionHeading({ eyebrow, title, description, className, align = "left" }: Props) {
  return (
    <div
      className={cn(
        align === "split" ? "grid gap-8 md:grid-cols-12 md:items-end" : "max-w-3xl",
        className,
      )}
    >
      <div className={align === "split" ? "md:col-span-7" : undefined}>
        <span className="eyebrow text-signal">{eyebrow}</span>
        <h2 className="display mt-5 text-[clamp(2.6rem,7vw,5.5rem)]">{title}</h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-md text-lg leading-relaxed text-ink-soft",
            align === "split" && "md:col-span-5 md:justify-self-end",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
