// @ts-ignore
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe } from "jest-axe";
import { KeyValue } from "../src/components/KeyValue";

describe("KeyValue", () => {
  it("renders the key and value correctly", () => {
    render(<KeyValue theKey="Name" value="John Doe" />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("applies correct classes to key and value", () => {
    render(<KeyValue theKey="Age" value="30" />);

    const keyElement = screen.getByText("Age");
    const valueElement = screen.getByText("30");

    expect(keyElement).toHaveClass("text-ink-50");
    expect(valueElement).toHaveClass("font-medium", "text-ink-700");
  });

  it("renders within a flex container with justify-between", () => {
    const { container } = render(
      <KeyValue theKey="Email" value="john@example.com" />
    );

    const flexContainer = container.firstChild;
    expect(flexContainer).toHaveClass("flex", "justify-between");
  });

  it("should be accessible", async () => {
    const { container } = render(<KeyValue theKey="Test" value="Value" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
