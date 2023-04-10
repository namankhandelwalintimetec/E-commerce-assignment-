import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "../Screens/Authentication";
import { Provider } from "react-redux";
import store from "../Redux/Store";

describe("Authentication component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Authentication />
        </Router>
      </Provider>
    );
  });

  test("renders the Authentication Page component", async () => {
    const wishCard = screen.getByTestId("authentication");
    await waitFor(() => {
      expect(wishCard).toBeInTheDocument();
    });
  });

  test("Here check Toggle Button", async () => {
    const wishCard = screen.getByTestId("toggle-text");
    expect(wishCard).toHaveTextContent("Log In");
    fireEvent.click(wishCard);
    expect(wishCard).toHaveTextContent("Sign up");
  });
});
