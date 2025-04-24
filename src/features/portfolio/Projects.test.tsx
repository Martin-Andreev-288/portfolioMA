import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects, { type Project } from "./Projects";

const mockProjects: Project[] = Array.from({ length: 6 }, (_, i) => ({
  name: `Project ${i + 1}`,
  technologies: `Tech ${i + 1}`,
  img: `/project${i + 1}.jpg`,
  demo: `https://demo${i + 1}.com`,
  link: `https://project${i + 1}.com`,
  repo: `https://repo${i + 1}.com`,
  description: `Description ${i + 1}`,
}));

describe("Projects", () => {
  it("renders initial projects", () => {
    render(<Projects projects={mockProjects} initialCount={3} />);
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("loads more projects when clicking show more", async () => {
    const user = userEvent.setup();
    render(<Projects projects={mockProjects} initialCount={3} />);

    await user.click(screen.getByText("Show More"));
    expect(screen.getAllByRole("img")).toHaveLength(6);
  });
});
