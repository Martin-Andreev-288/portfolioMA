import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import NavLinks from "./NavLinks";
import { links } from "@/utils/links";

describe("NavLinks", () => {
  it("renders all navigation links with correct labels", () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    links.forEach((link) => {
      expect(
        screen.getByRole("link", { name: link.label })
      ).toBeInTheDocument();
    });
  });

  it("links have correct href attributes", () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    links.forEach((link) => {
      const anchor = screen.getByRole("link", { name: link.label });
      const expectedHref = link.href === "/" ? "/" : `/${link.href}`;
      expect(anchor).toHaveAttribute("href", expectedHref);
    });
  });

  it("shows hover underline element for all links", () => {
    render(
      <MemoryRouter>
        <NavLinks />
      </MemoryRouter>
    );

    links.forEach((link) => {
      const linkElement = screen.getByRole("link", { name: link.label });
      const underline = linkElement.querySelector("span");
      expect(underline).toHaveClass("absolute");
      expect(underline).toHaveClass("bg-primary");
    });
  });

  describe("Active state styling", () => {
    const testCases = [
      { path: "/", label: "home" },
      { path: "/about", label: "about" },
      { path: "/portfolio", label: "portfolio" },
      { path: "/resume", label: "resume" },
      { path: "/q&a", label: "q&a" },
      { path: "/contact", label: "contact" },
    ];

    testCases.forEach(({ path, label }) => {
      it(`applies active style for ${label} link at ${path}`, () => {
        render(
          <MemoryRouter initialEntries={[path]}>
            <NavLinks />
          </MemoryRouter>
        );

        const link = screen.getByRole("link", { name: label });
        expect(link).toHaveClass("text-primary");
      });
    });
  });
});
