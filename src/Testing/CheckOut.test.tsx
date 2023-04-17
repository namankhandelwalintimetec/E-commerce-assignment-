import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import CheckOut from "../Screens/CheckOutPage";

describe("CartScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CheckOut />
        </Router>
      </Provider>
    );
  });

  test("renders the CheckOut Page component", async () => {
    const checkOut = screen.getByTestId("checkout");
    await waitFor(() => {
      expect(checkOut).toBeInTheDocument();
    });
  });
});
