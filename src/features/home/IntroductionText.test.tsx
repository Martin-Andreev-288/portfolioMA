import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import IntroductionText from "./IntroductionText";

const renderIntroductionText = () =>
  render(
    <MemoryRouter>
      <IntroductionText />
    </MemoryRouter>
  );

describe("IntroductionText", () => {
  it("renders collapsed by default", () => {
    renderIntroductionText();

    expect(screen.getByRole("button")).toHaveTextContent("Show More ↓");
  });

  it("expands content when clicking show more button", async () => {
    const user = userEvent.setup();
    renderIntroductionText();

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("Show Less ↑");
  });

  it("collapses content when clicking show less button", async () => {
    const user = userEvent.setup();
    renderIntroductionText();

    // Expand
    await user.click(screen.getByRole("button"));
    // Collapse
    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("Show More ↓");
  });

  it("contains all navigation links", async () => {
    renderIntroductionText();

    const links = ["/about", "/portfolio", "/resume", "/q&a", "/contact"];
    links.forEach((link) => {
      expect(
        screen.getByRole("link", { name: new RegExp(link.slice(1), "i") })
      ).toHaveAttribute("href", link);
    });
  });
});
