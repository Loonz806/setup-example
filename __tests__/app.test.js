import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/components/App";

describe("App Component", () => {
  test("show the title of the application", () => {
    const { debug } = render(<App />);
    expect(
      screen.getByRole("heading", { name: /Welcome to Setup Example/i })
    ).toBeInTheDocument();
    debug();
  });
});
