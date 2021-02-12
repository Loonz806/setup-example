import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/global.scss";
import analytics from "./analytics";

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

ReactDOM.render(<App />, document.querySelector("#root"));
