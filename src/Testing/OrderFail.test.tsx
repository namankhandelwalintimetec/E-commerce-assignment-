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
import OrderFail from "../Screens/OrderFail";

describe("CartScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <OrderFail />
        </Router>
      </Provider>
    );
  });

  test("renders the CheckOut Page component", async () => {
    const orderPlace = screen.getByTestId("orderFail");
    await waitFor(() => {
      expect(orderPlace).toBeInTheDocument();
    });
  });

  test("redirect to OrderCheck out page", () => {
    const orderPlaceNavigate = screen.getByTestId("orderFailNavigate");
    fireEvent.click(orderPlaceNavigate);
    expect(window.location.href).toBe("http://localhost/cart");
  });
});
