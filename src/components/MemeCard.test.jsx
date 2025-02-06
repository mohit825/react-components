import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import MemeCard from "./MemeCard";

describe(" Meme Card", () => {
  const memeProps = {
    url: "test",
    author: "Author 1",
    thumbnail: "test",
  };

  test("should render meme card with title props", () => {
    render(<MemeCard meme={memeProps} />);
    expect(screen.getByText(memeProps.author)).toBeInTheDocument();
  });

  test("should render meme card image with correct url", () => {
    render(<MemeCard meme={memeProps} />);

    const imgTag = screen.getByRole("img");
    expect(imgTag).toHaveAttribute("src", memeProps.url);
  });

  test("should check if correct input is passed when clicked", () => {
    const mockClickfn = vi.fn();
    render(<MemeCard meme={memeProps} onMemeClick={mockClickfn} />);
    const cardContainer = screen.getByTestId("meme-card");
    fireEvent.click(cardContainer);

    expect(mockClickfn).toBeCalledTimes(1);
    expect(mockClickfn).toHaveBeenCalledWith(memeProps);
  });
});
