// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { BaseButton } from "../src/components/Button/BaseButton";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

describe("BaseButton", () => {
  it("should renders with default props", () => {
    render(<BaseButton label="Click me" />);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-product-300");
  });

  it("should uses variant classes correctly", () => {
    render(<BaseButton label="Critical" variant="critical" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-red-300");
  });

  it("should uses size classes correctly", () => {
    render(<BaseButton label="Large" size="large" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-6 py-4");
  });

  it("should renders left Icon", () => {
    render(<BaseButton label="Left Icon" iconLeft={FiArrowLeft} />);
    const button = screen.getByRole("button");
    const svg = button.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(button.firstChild).toBe(svg);
  });

  it("should renders right Icon", () => {
    render(<BaseButton label="Right Icon" iconRight={FiArrowRight} />);
    const button = screen.getByRole("button");
    const svg = button.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(button.lastChild).toBe(svg);
  });

  it("should trigger onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    render(<BaseButton label="Click me" onClick={handleClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<BaseButton label="Disabled" disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:opacity-50");
  });

  it("applies hover and active classes", async () => {
    render(<BaseButton label="Hover and Active Test" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("hover:bg-product-400");
    expect(button).toHaveClass("active:bg-product-500");
  });
});
