import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModeToggle from "./ModeToggle";

// Mock theme context and icons
const mockSetTheme = vi.fn();
vi.mock("@/context/themeProvider", () => ({
  useTheme: () => ({ setTheme: mockSetTheme }),
}));

vi.mock("lucide-react", () => ({
  Sun: () => <div data-testid="sun-icon" />,
  Moon: () => <div data-testid="moon-icon" />,
}));

describe("ModeToggle", () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
    document.documentElement.classList.remove("dark");
  });

  it("renders a toggle button with accessibility text", () => {
    render(<ModeToggle />);
    expect(
      screen.getByRole("button", { name: /toggle theme/i })
    ).toBeInTheDocument();
  });

  it("opens theme selection menu when clicked", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);

    await user.click(screen.getByRole("button"));
    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  it("updates theme when selecting menu items", async () => {
    const user = userEvent.setup();
    render(<ModeToggle />);

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Dark"));
    expect(mockSetTheme).toHaveBeenCalledWith("dark");

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Light"));
    expect(mockSetTheme).toHaveBeenCalledWith("light");

    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("System"));
    expect(mockSetTheme).toHaveBeenCalledWith("system");
  });

  describe("Theme Indicators", () => {
    it("shows sun icon by default", () => {
      render(<ModeToggle />);
      expect(screen.getByTestId("sun-icon")).toBeVisible();
    });

    it("shows moon icon when dark mode is active", () => {
      document.documentElement.classList.add("dark");
      render(<ModeToggle />);
      expect(screen.getByTestId("moon-icon")).toBeVisible();
    });
  });
});
