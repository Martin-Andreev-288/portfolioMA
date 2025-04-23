import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AccordionItem from "./AccordionItem";

describe("AccordionItem", () => {
  const mockProps = {
    question: "Test Question",
    num: 0,
    currentOpen: null,
    setCurrentOpen: vi.fn(),
    children: "Test Answer",
  };

  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  it("renders closer state correctly", () => {
    render(<AccordionItem {...mockProps} />);

    const toggleSymbol = screen.getAllByRole("paragraph")[2];
    expect(toggleSymbol).toHaveTextContent("-");
    expect(screen.queryByText("Test Answer")).not.toBeInTheDocument();
  });

  it("renders open state correctly", () => {
    render(<AccordionItem {...mockProps} currentOpen={0} />);

    const toggleSymbol = screen.getAllByRole("paragraph")[2];
    expect(toggleSymbol).toHaveTextContent("+");
    expect(screen.getByText("Test Answer")).toBeVisible();
  });

  it("triggers toggle callback on click", async () => {
    const user = userEvent.setup();
    const setCurrentOpen = vi.fn();

    const { rerender } = render(
      <AccordionItem {...mockProps} setCurrentOpen={setCurrentOpen} />
    );

    const item = screen.getByText("Test Question").closest("div")!;

    await user.click(item);
    expect(setCurrentOpen).toHaveBeenCalledWith(0);

    rerender(
      <AccordionItem
        {...mockProps}
        currentOpen={0}
        setCurrentOpen={setCurrentOpen}
      />
    );

    await user.click(item);
    expect(setCurrentOpen).toHaveBeenCalledWith(null);
  });

  it("format numbers correctly", () => {
    const { rerender } = render(<AccordionItem {...mockProps} num={8} />);

    expect(screen.getByText("09")).toBeInTheDocument();

    rerender(<AccordionItem {...mockProps} num={9} />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
