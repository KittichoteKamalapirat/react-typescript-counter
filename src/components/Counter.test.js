import React from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

import userEvent from "@testing-library/user-event";

describe("counter", () => {
  beforeEach(() => {});
  it("should display number 0 initially", () => {
    render(<Counter />);
    const zero = screen.getByRole("heading", {
      name: /0/i,
    });

    expect(zero).toBeInTheDocument();
  });

  it("should display increment button and is enabled", () => {
    render(<Counter />);
    const incButton = screen.getByRole("button", { name: /☝️ Increment/i });
    expect(incButton).toBeInTheDocument();
    expect(incButton).toBeEnabled();
  });

  it("should display increment by 10 button and is enabled", () => {
    render(<Counter />);
    const inc10Button = screen.getByRole("button", {
      name: /🚀 Increment by 10!/i,
    });
    expect(inc10Button).toBeInTheDocument();
    expect(inc10Button).toBeEnabled();
  });

  it("should display decrement button and is disabled", () => {
    render(<Counter />);
    const decButton = screen.getByRole("button", { name: /👇 Decrement/i });
    expect(decButton).toBeInTheDocument();
    expect(decButton).toBeDisabled();
  });

  it("should display reset and is disabled", () => {
    render(<Counter />);
    const resetButton = screen.getByRole("button", { name: /🆑 Reset/i });
    expect(resetButton).toBeInTheDocument();
    expect(resetButton).toBeDisabled();
  });

  it("should increase by one when increment is clicked and decrement and reset should be enaled", () => {
    render(<Counter />);
    const incButton = screen.getByRole("button", { name: /☝️ Increment/ });
    userEvent.click(incButton);
    expect(screen.getByRole("heading", { name: /1/ })).toBeInTheDocument();

    const resetButton = screen.getByRole("button", { name: /🆑 Reset/i });
    expect(resetButton).toBeEnabled();

    const decButton = screen.getByRole("button", { name: /👇 Decrement/i });
    expect(decButton).toBeEnabled();
  });
});
