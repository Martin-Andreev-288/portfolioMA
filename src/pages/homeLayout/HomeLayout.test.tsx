import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeLayout from "./HomeLayout";

vi.mock("../../components", () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

vi.mock("react-router", () => ({
  Outlet: () => <div data-testid="outlet" />,
}));

describe("HomeLayout", () => {
  it("renders the Navbar component", () => {
    render(<HomeLayout />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the Outlet within a container with proper Tailwind classes", () => {
    render(<HomeLayout />);

    const outlet = screen.getByTestId("outlet");
    const container = outlet.parentElement;

    expect(outlet).toBeInTheDocument();

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("mx-auto");
    expect(container).toHaveClass("max-w-6xl");
    expect(container).toHaveClass("px-8");
    expect(container).toHaveClass("py-20");
  });
});
