import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavButton from "./NavButton";

// Mock Lucide icons with test identifiers
vi.mock("lucide-react", () => ({
  ArrowLeft: () => <div data-testid="arrow-left" />,
  ArrowRight: () => <div data-testid="arrow-right" />,
}));

describe("NavButton", () => {
  const mockClick = vi.fn();

  it("renders previous button with correct icon and positioning", () => {
    render(<NavButton direction="prev" onClick={mockClick} />);

    expect(screen.getByTestId("arrow-left")).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveClass("left-0");
  });

  it("renders next button with correct icon and positioning", () => {
    render(<NavButton direction="next" onClick={mockClick} />);

    expect(screen.getByTestId("arrow-right")).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toHaveClass("right-0");
  });

  it("triggers onClick handler when clicked", async () => {
    const user = userEvent.setup();
    render(<NavButton direction="prev" onClick={mockClick} />);

    await user.click(screen.getByRole("button"));
    expect(mockClick).toHaveBeenCalledOnce();
  });
});
