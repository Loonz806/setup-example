import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/global.scss";
import analytics from "./utils/analytics";
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
  <ErrorBoundary fallback={"An error has occurred"}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </ErrorBoundary>,
  document.querySelector("#root")
);
