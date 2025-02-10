import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

// Mock react-router Link component
vi.mock("react-router", () => ({
  Link: ({
    to,
    children,
    className,
  }: {
    to: string;
    children: React.ReactNode;
    className: string;
  }) => (
    <a data-testid="link" href={to} className={className}>
      {children}
    </a>
  ),
}));

vi.mock("../../assets/MA.png", () => ({
  default: "test-image-path.png",
}));

describe("Logo", () => {
  it("renders a link to home page", () => {
    render(<Logo />);

    const link = screen.getByTestId("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("contains the logo image with correct attributes", () => {
    render(<Logo />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "test-image-path.png");
    expect(image).toHaveAttribute("alt", "M.A. logo");
  });

  it("applies correct Tailwind classes", () => {
    render(<Logo />);

    const link = screen.getByTestId("link");
    expect(link).toHaveClass("hidden");
    expect(link).toHaveClass("lg:flex");
    expect(link).toHaveClass("justify-center");
    expect(link).toHaveClass("items-center");
    expect(link).toHaveClass("transition-transform");
    expect(link).toHaveClass("duration-300");
    expect(link).toHaveClass("hover:rotate-[15deg]");
    expect(link).toHaveClass("hover:opacity-90");
  });

  it("image has correct size classes", () => {
    render(<Logo />);

    const image = screen.getByRole("img");
    expect(image).toHaveClass("w-12");
    expect(image).toHaveClass("h-12");
  });
});
