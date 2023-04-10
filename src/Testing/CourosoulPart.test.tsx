import { render, screen } from "@testing-library/react";
import CarouselComponent from "../Components/Courosoul/Cousoloul";

describe("CarouselComponent", () => {
  test("Check the counter value is render or not ", () => {
    render(<CarouselComponent />);
    const countvalue = screen.getByTestId("test");
    expect(countvalue).toBeInTheDocument();
  });
});
