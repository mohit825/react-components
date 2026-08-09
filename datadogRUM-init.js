import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from "@datadog/browser-rum-react";

datadogRum.init({
  applicationId: "43b0157b-e379-4ef4-a55d-2d546f872f8f",
  clientToken: "pub484c15d2f43fbd325d3f5bd0fbc9f069",
  site: "us5.datadoghq.com",
  service: "fe-portal",
  env: "dev-l", // e.g. 'prod', 'staging-1', 'dev'
  version: "1.0.0", // e.g. '1.0.0'
  sessionSampleRate: 100, // capture 100% of sessions
  sessionReplaySampleRate: 20, // capture 20% of sessions with replay
  trackResources: true, // Enable Resource tracking
  trackUserInteractions: true, // Enable Action tracking
  trackLongTasks: true, // Enable Long Tasks tracking

  plugins: [reactPlugin({ router: false })],
});
