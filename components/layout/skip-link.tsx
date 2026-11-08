export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-[var(--radius-md)] focus:bg-volt focus:px-4 focus:py-2 focus:text-[#141511] focus:outline-none"
    >
      Skip to content
    </a>
  );
}
