import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import DownloadCard from "./DownloadCard";

describe("DownloadCard", () => {
  const label = "Test Label";
  const pdfPath = "/test.pdf";

  afterEach(() => {
    cleanup();
  });

  it("renders the label and download icon correctly", () => {
    render(<DownloadCard label={label} pdfPath={pdfPath} />);

    expect(screen.getByText(label)).toBeInTheDocument();

    const downloadLink = screen.getByRole("link");
    expect(downloadLink).toHaveAttribute("href", pdfPath);
    expect(downloadLink).toHaveAttribute("download");
  });
});
