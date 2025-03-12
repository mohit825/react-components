import { afterEach, expect, vi } from "vitest";
import { Home } from "./Home";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("renders Home page", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        memes: [
          {
            postLink: "https://redd.it/1j7s3v3",
            subreddit: "me_irl",
            title: "me_irl",
            url: "https://i.redd.it/i8ovjsv00tne1.png",
            nsfw: false,
            spoiler: false,
            author: "Sonic_the_hedgedog",
            ups: 37542,
            preview: [
              "https://preview.redd.it/i8ovjsv00tne1.png?width=108\u0026crop=smart\u0026auto=webp\u0026s=c9e9ba19ecba16976b8132a552b5452b468327d8",
            ],
          },
        ],
      }),
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("fetchMeme should be called only once", async () => {
    render(<Home />);
    expect(fetch).toBeCalledTimes(1);
  });

  //
  test("fetchMeme should update state correclty", async () => {
    render(<Home />);
    await waitFor(() => {
      expect(screen.getByText("Sonic_the_hedgedog")).toBeInTheDocument();
    });
  });

  test("to check if modal is open when meme is clicked", async () => {
    // doing this to get portal root in test context
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "portal");
    document.body.appendChild(modalRoot);

    render(<Home />);
    let meme;

    await waitFor(() => {
      meme = screen.getByText("Sonic_the_hedgedog");
    });
    await userEvent.click(meme);
    expect(screen.getByTestId("modal")).toBeInTheDocument;
  });
});
