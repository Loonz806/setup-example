import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Counter from "../src/components/Counter";

describe("<Counter/>", () => {
  test("should ", () => {
    render(<Counter />);
    // Arrange
    const decrementButton = screen.getByText("-");
    const incrementButton = screen.getByText("+");
    const count = screen.getByText("0");
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    // Act
    fireEvent.click(incrementButton);
    // Assert
    expect(screen.getByText("1")).toBeInTheDocument();

    // Act
    fireEvent.click(decrementButton);
    // Assert
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
