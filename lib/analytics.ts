type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

/** Lightweight analytics hook — swap for your provider when ready. */
export function track(event: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("abcious:analytics", { detail: { event, payload } }));
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.info("[analytics]", event, payload ?? {});
  }
}
