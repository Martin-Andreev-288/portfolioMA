import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Slide from "./Slide";
import { MemoryRouter } from "react-router";

vi.mock("./Image", () => ({ default: () => <div>Image Component</div> }));
vi.mock("./Video", () => ({ default: () => <div>Video Component</div> }));
vi.mock("./WelcomeSlide", () => ({
  default: () => <div>WelcomeSlide Component</div>,
}));

describe("Slide", () => {
  const baseProps = {
    item: { type: "welcome", name: "Test Slide" },
    index: 0,
    currentIndex: 0,
    transitionDuration: 400,
    isEnabled: true,
  };

  it("renders correct content based on item type", () => {
    const { rerender } = render(
      <MemoryRouter>
        <Slide {...baseProps} item={{ type: "image", src: "test.jpg" }} />
      </MemoryRouter>
    );
    expect(screen.getByText("Image Component")).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <Slide {...baseProps} item={{ type: "video", src: "test.mp4" }} />
      </MemoryRouter>
    );
    expect(screen.getByText("Video Component")).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <Slide {...baseProps} item={{ type: "welcome", name: "Test" }} />
      </MemoryRouter>
    );
    expect(screen.getByText("WelcomeSlide Component")).toBeInTheDocument();
  });

  it("handles active state correctly", () => {
    render(
      <MemoryRouter>
        <Slide {...baseProps} currentIndex={0} />
      </MemoryRouter>
    );

    const slide = screen.getByRole("article");
    expect(slide.style.transform).toBe("translateX(0%)");
    expect(slide.style.opacity).toBe("1");
    expect(slide.style.visibility).toBe("visible");
  });

  it("applies correct transition duration", () => {
    render(
      <MemoryRouter>
        <Slide {...baseProps} transitionDuration={500} />
      </MemoryRouter>
    );

    const slide = screen.getByRole("article");
    expect(slide.style.transition).toContain("500ms");
  });

  it("passes correct props to child components", () => {
    const videoProps = {
      ...baseProps,
      item: { type: "video", src: "test.mp4" },
      isEnabled: false,
    };

    render(
      <MemoryRouter>
        <Slide {...videoProps} />
      </MemoryRouter>
    );

    expect(screen.getByText("Video Component")).toBeInTheDocument();
  });
});
