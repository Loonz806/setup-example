import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundry from "./components/ErrorBoundry";
import "./styles/global.scss";
import analytics from "./analytics";
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

ReactDOM.render(
  <ErrorBoundry>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundry>,
  document.querySelector("#root")
);
