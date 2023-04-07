import { render, screen } from "@testing-library/react";
import Footerpage from "../Components/Footer/Footer";

describe("Footerpage component", () => {
  test('renders "Back To Top" text', () => {
    render(<Footerpage />);
    const backToTopElement = screen.getByTestId("footer");
    expect(backToTopElement).toBeInTheDocument();
  });

  test("renders footer subheadings", () => {
    render(<Footerpage />);
    const getToKnowUsElement = screen.getByText(/Get To Know Us/i);
    expect(getToKnowUsElement).toBeInTheDocument();

    const contactWithUsElement = screen.getByText(/contact With US/i);
    expect(contactWithUsElement).toBeInTheDocument();

    const makeMoneyWithUsElement = screen.getByText(/Make Money with Us/i);
    expect(makeMoneyWithUsElement).toBeInTheDocument();
  });
});
