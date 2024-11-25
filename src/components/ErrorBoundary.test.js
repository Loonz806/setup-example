import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    console.warn.mockRestore();
  });

  it("warns when fallback is not set", () => {
    const { warn } = console;
    console.warn = jest.fn();
    const { getByTestId } = render(
      <ErrorBoundary>
        <div data-testid="child">Child</div>
      </ErrorBoundary>,
    );
    expect(getByTestId("child")).toBeInTheDocument();
    expect(console.warn).toHaveBeenCalled();
    console.warn = warn;
  });
});
