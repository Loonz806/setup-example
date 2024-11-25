import React from "react";
import { render } from "@testing-library/react";
import Fallback from "./Fallback";

describe("Fallback", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it("renders without crashing", () => {
    const fallBackMessage = "oops! something went wrong";
    const { getByTestId } = render(<Fallback>{fallBackMessage}</Fallback>);
    expect(getByTestId("default-fallback")).toBeInTheDocument();
  });
});
