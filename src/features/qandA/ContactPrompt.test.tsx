import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { ContactPrompt } from "./ContactPrompt";

describe("ContactPrompt", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <ContactPrompt />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /contact options here/i });
    expect(link).toHaveAttribute("href", "/contact");
  });
});
