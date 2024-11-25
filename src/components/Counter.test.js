import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
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
});
