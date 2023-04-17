import InputField from "../Components/Atoms/InputField";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";

describe("InputField component", () => {
  const mockOnChange = jest.fn();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <InputField
            type="text"
            placeHolder="Enter your name"
            name="name"
            value={{ email: "", password: "" }}
            onChange={mockOnChange}
          />
        </Router>
      </Provider>
    );
  });

  it("renders an input field with the correct placeholder", () => {
    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls onChange function with input value", () => {
    const input = screen.getByTestId("name");
    fireEvent.change(input, { target: { value: "John Doe" } });
    expect(input).toBeInTheDocument();
  });
});
