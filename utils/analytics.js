import { track } from "@vercel/analytics";

export function trackEvent(event, properties) {
  track(event, properties);
}
