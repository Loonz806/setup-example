import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("App Component", () => {
  test("show the title of the application", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Welcome to Setup Example/i }),
    ).toBeInTheDocument();
  });
});
