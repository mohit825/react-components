import { describe, expect, it, test } from "vitest";
import ShimmerCard from "./ShimmerCard";
import { render, screen } from "@testing-library/react";

describe("Shimmer", () => {
  it("renders shimmer component with 10 cards.", () => {
    render(<ShimmerCard />);
    const cards = screen.getAllByTestId("card");

    expect(cards.length).toBe(10);
  });
});
