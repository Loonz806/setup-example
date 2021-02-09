import { render } from "@testing-library/react";
import React from "react";
import ErrorBoundry from "../src/components/ErrorBoundry";

describe("<ErrorBoundry/>", () => {
  test("shows the component when there is not", () => {
    const Greeting = () => {
      return <div>Hello World</div>;
    };

    const fallback = (error) => <span>Error: {error.message}</span>;
    const { getByText, unmount } = render(
      <ErrorBoundry fallback={fallback}>
        <Greeting />
      </ErrorBoundry>
    );
    getByText("Hello World");
    unmount();
  });

  test("shows the component when there is not", () => {
    console.error = jest.fn();
    jest.spyOn(console, "error");
    const Greeting = () => {
      throw new Error("Oh shit");
    };

    const fallback = (error) => <span>Error: {error.message}</span>;
    const { unmount } = render(
      <ErrorBoundry fallback={fallback}>
        <Greeting />
      </ErrorBoundry>
    );
    expect(console.error).toHaveBeenCalled();
    unmount();
  });
});
