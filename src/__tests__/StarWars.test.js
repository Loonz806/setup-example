import "isomorphic-fetch";
import React from "react";
import { render, screen } from "@testing-library/react";
import StarWars from "../components/StarWars.js";

describe("StarWars component", () => {
  test("check to see if renders", async () => {
    render(<StarWars />);
    expect(await screen.findByText("StarWars")).toBeVisible();
    expect(await screen.findByText("Loading...")).toBeVisible();
  });
});
