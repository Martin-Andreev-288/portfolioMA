import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AppLayout from "./AppLayout";

vi.mock("../../components", () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

vi.mock("react-router", () => ({
  Outlet: () => <div data-testid="outlet" />,
}));

describe("AppLayout", () => {
  it("renders the Navbar component", () => {
    render(<AppLayout />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the Outlet within a container with proper Tailwind classes", () => {
    render(<AppLayout />);

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
