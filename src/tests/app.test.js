import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../components/App";

test("show the title of the application", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hello Application Alpha")).toBeInTheDocument();
});
