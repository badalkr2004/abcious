type Props = {
  items: string[];
  speed?: string;
  reverse?: boolean;
  className?: string;
};

export function Marquee({ items, speed = "40s", reverse, className }: Props) {
  return (
    <div className={`marquee-wrap overflow-hidden ${className ?? ""}`}>
      <div
        className="marquee"
        data-reverse={reverse || undefined}
        style={{ ["--speed" as string]: speed }}
      >
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {items.map((item) => (
              <span
                key={`${k}-${item}`}
                className="flex items-center whitespace-nowrap px-6 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                {item}
                <span className="ml-6 text-signal" aria-hidden="true">
                  ✺
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
