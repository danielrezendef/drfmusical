export type AnalyticsEventName =
  | "inspiration_open"
  | "inspiration_search"
  | "inspiration_filter"
  | "soundtrack_click"
  | "simulator_click"
  | "whatsapp_click"
  | "spotify_click"
  | "youtube_click";

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export function trackEvent(
  eventName: AnalyticsEventName,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return;

  (window as AnalyticsWindow).gtag?.("event", eventName, parameters);
}
