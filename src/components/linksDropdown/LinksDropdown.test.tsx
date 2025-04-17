import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import LinksDropdown from "./LinksDropdown";
import { links } from "@/utils/links";

// Mock dropdown components and icons
vi.mock("../../components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DropdownMenuTrigger: ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={className}>{children}</div>,
  DropdownMenuContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DropdownMenuItem: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

// Update the lucide-react mock
vi.mock("lucide-react", async (importOriginal) => {
  const actual = await importOriginal<typeof import("lucide-react")>();
  return {
    ...actual,
    AlignLeft: () => <div data-testid="menu-icon" />,
  };
});

describe("LinksDropdown", () => {
  it("renders mobile menu button with correct classes", () => {
    render(
      <MemoryRouter>
        <LinksDropdown />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /toggle links/i });
    const parentDiv = button.parentElement;

    expect(parentDiv).toHaveClass("lg:hidden");
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
  });

  it("displays all navigation links when opened", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <LinksDropdown />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button"));

    links.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it("applies active style to current route link", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <LinksDropdown />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button"));
    const aboutLink = screen.getByRole("link", { name: "about" });
    expect(aboutLink).toHaveClass("text-primary");
  });

  it("has correct href attributes for all links", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <LinksDropdown />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button"));

    links.forEach((link) => {
      const anchor = screen.getByText(link.label).closest("a");
      const expectedHref = link.href === "/" ? "/" : `/${link.href}`;
      expect(anchor).toHaveAttribute("href", expectedHref);
    });
  });
});
