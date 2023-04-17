import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Footerpage from "../Components/Footer/Footer";

describe("Footerpage", () => {
  test("renders footer with correct content", () => {
    render(<Footerpage />);
    const countvalue = screen.getByTestId("footer");
    expect(countvalue).toBeInTheDocument();
  });

  test("alt contains correct value", () => {
    render(<Footerpage />);
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("tag");
  });

  it("should display '14 Days return valid and get write product also.......' text", () => {
    render(<Footerpage />);
    const returnText = screen.getByText(
      "14 Days return valid and get write product also......."
    );
    expect(returnText).toBeInTheDocument();
  });
  it("should scroll to top when clicked on 'Back To Top' text", () => {
    render(<Footerpage />);
    const scrollToMock = jest.fn();
    window.scrollTo = scrollToMock;
    const backToTopText = screen.getByText("Back To Top");
    fireEvent.click(backToTopText);
    expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });
});
