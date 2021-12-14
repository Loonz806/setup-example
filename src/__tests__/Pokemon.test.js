import "isomorphic-fetch";
import React from "react";
import { render, screen } from "@testing-library/react";
import Pokemon from "../components/Pokemon.js";

describe("Pokemon component", () => {
  test("check to see if renders", async () => {
    await render(<Pokemon />);
    expect(await screen.findByText("Pokemon")).toBeVisible();
    expect(await screen.findByText("Loading...")).toBeVisible();
  });
});
