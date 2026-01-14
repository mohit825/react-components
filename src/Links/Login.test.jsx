import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import { MemoryRouter } from "react-router-dom";
import { expect, test } from "vitest";

test("renders login text", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  expect(screen.getByText("Login Page")).toBeInTheDocument();

  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();

  fireEvent.click(loginButton);
});
