import { render, screen } from "@testing-library/react";
import Spinner from "../Components/Spinner/Spinner";

describe("Spinner", () => {
  it("renders the spinner with default props", () => {
    render(<Spinner />);
    const spinner = screen.getByTestId("loader");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(`
      display: block;
      margin: 0 auto;
      border-color: black;
    `);
  });

  it("renders the spinner with custom props", () => {
    render(<Spinner time={true} />);
    const spinner = screen.getByTestId("loader");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveStyle(`
      display: block;
      margin: 0 auto;
      border-color: black;
    `);
  });
});