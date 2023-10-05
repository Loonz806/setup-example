import { render } from "@testing-library/react";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

describe("<ErrorBoundry/>", () => {
  test("shows the component when there is not an error", () => {
    const Greeting = () => {
      return <div>Hello World</div>;
    };

    const fallback = (error) => <span>Error: {error.message}</span>;
    const { getByText, unmount } = render(
      <ErrorBoundary fallback={fallback}>
        <Greeting />
      </ErrorBoundary>,
    );
    getByText("Hello World");
    unmount();
  });

  test("Throws an error when a error happens", () => {
    console.error = jest.fn();
    jest.spyOn(console, "error");
    const Greeting = () => {
      throw new Error("Oh shit");
    };

    const fallback = (error) => <span>Error: {error.message}</span>;
    const { unmount } = render(
      <ErrorBoundary fallback={fallback}>
        <Greeting />
      </ErrorBoundary>,
    );
    expect(console.error).toHaveBeenCalled();
    unmount();
  });

  test("throws warning if no fallback is given", () => {
    console.warn = jest.fn();
    jest.spyOn(console, "warn");
    const Greeting = () => {
      return <div>Hello World</div>;
    };

    const { unmount } = render(
      <ErrorBoundary>
        <Greeting />
      </ErrorBoundary>,
    );
    expect(console.warn).toHaveBeenCalled();
    unmount();
  });
});
