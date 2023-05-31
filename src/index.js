import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { createRoot } from "react-dom/client";
import analytics from "./utils/analytics";
import "./styles/global.scss";
const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const App = lazy(() => import("./components/App"));

/* Attach listeners once */
// Obviously this would need to be done for a routing system but the concept works
analytics.on("page", () => {
  console.log("Page");
});
analytics.on("pageEnd", () => {
  console.log("Page End");
});
analytics.on("pageStart", function lol() {
  console.log("Page Start");
});

root.render(
  <ErrorBoundary fallback={"An error has occurred"}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);
