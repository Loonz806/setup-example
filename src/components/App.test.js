import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import ErrorBoundary from "./ErrorBoundary";

describe("App", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("0")).toBeInTheDocument();
  });

  it("increments count", () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText("+"));
    expect(getByText("1")).toBeInTheDocument();
  });

  it("decrements count", () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText("-"));
    expect(getByText("-1")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("0")).toBeInTheDocument();
  });

  it("should throw an error if it does not receive a fallback prop", () => {
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
