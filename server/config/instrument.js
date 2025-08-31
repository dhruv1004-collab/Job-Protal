import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://fc6422e28146fa73d5401daee2ad0697@o4509908852998144.ingest.us.sentry.io/4509938546835456",
   integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
  // Enable performance monitoring
//   tracesSampleRate: 1.0, // capture 100% of transactions (adjust for production)



});
Sentry.profiler.startProfiler();
