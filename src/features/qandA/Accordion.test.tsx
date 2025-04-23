import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import Accordion from "./Accordion";

const mockData = [
  {
    name: "Category 1",
    questions: [
      { question: "Question 1", answer: "Answer 1" },
      { question: "Question 2", answer: "Answer 2" },
    ],
  },
  {
    name: "Category 2",
    questions: [{ question: "Question 3", answer: "Answer 3" }],
  },
];

describe("Accordion", () => {
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  const renderAccordion = () =>
    render(
      <MemoryRouter>
        <Accordion data={mockData} />
      </MemoryRouter>
    );

  it("renders categories and questions correctly", () => {
    renderAccordion();

    // Categories
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();

    // Questions
    mockData
      .flatMap((c) => c.questions)
      .forEach((q) => {
        expect(screen.getByText(q.question)).toBeInTheDocument();
      });
  });

  it("shows correct numbering across categories", () => {
    renderAccordion();

    const numbers = screen.getAllByText(/0[123]/);
    expect(numbers[0]).toHaveTextContent("01");
    expect(numbers[1]).toHaveTextContent("02");
    expect(numbers[2]).toHaveTextContent("03");
  });

  it("toggles questions independently", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const q1 = screen.getByText("Question 1").closest("div")!;
    await user.click(q1);
    expect(screen.getByText("Answer 1")).toBeVisible();

    const q2 = screen.getByText("Question 2").closest("div")!;
    await user.click(q2);
    expect(screen.queryByText("Answer 1")).not.toBeInTheDocument();
    expect(screen.getByText("Answer 2")).toBeVisible();

    const q3 = screen.getByText("Question 3").closest("div")!;
    await user.click(q3);
    expect(screen.queryByText("Answer 2")).not.toBeInTheDocument();
    expect(screen.getByText("Answer 3")).toBeVisible();
  });
});
