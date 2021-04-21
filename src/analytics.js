import Analytics from "analytics";
import googleAnalytics from "@analytics/google-analytics";

/* initialize analytics and load plugins */
const analytics = Analytics({
  debug: true,
  plugins: [
    googleAnalytics({
      trackingId: "UA-1234567",
    }),
  ],
});

/* Track a page view */
analytics.page();

/* Track a custom event */
analytics.track("playedVideo", {
  category: "Videos",
  label: "Fall Campaign",
  value: 42,
});

/* Identify a visitor */
analytics.identify("user-id-xyz", {
  firstName: "bill",
  lastName: "murray",
});

window.Analytics = analytics;

// TODO: lets see if you catch this

/* export analytics for usage through the app */
export default analytics;
