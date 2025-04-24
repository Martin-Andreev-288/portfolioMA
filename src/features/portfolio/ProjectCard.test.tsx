import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";
import { type Project } from "./Projects";

const mockProject: Project = {
  name: "Test Project",
  technologies: "React, TypeScript",
  img: "/test.jpg",
  demo: "https://demo.com",
  link: "https://project.com",
  repo: "https://github.com/test",
  description: "Test description",
};

describe("ProjectCard", () => {
  it("renders project details correctly", () => {
    render(<ProjectCard project={mockProject} />);

    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("React, TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/test.jpg");
    expect(img).toHaveAttribute("alt", "Test Project");
  });

  it("has correct video links", () => {
    render(<ProjectCard project={mockProject} />);

    const demoLink = screen.getByRole("link", { name: /go to video/i });
    expect(demoLink).toHaveAttribute("href", "https://demo.com");
    expect(demoLink).toHaveAttribute("target", "_blank");
  });

  it("has correct external links", () => {
    render(<ProjectCard project={mockProject} />);
    // External link
    const extIcon = screen.getByTestId("external-link-icon");
    const extLink = extIcon.closest("a")!;
    expect(extLink).toHaveAttribute("href", "https://project.com");
    // GitHub link
    const githubIcon = screen.getByTestId("github-icon");
    const githubLink = githubIcon.closest("a")!;
    expect(githubLink).toHaveAttribute("href", "https://github.com/test");
  });
});
