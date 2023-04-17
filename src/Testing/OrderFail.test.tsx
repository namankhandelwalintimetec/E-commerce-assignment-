import {
  render,
  screen,
  waitFor,
  fireEvent,
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
    const orderFail = screen.getByTestId("orderFail");
    await waitFor(() => {
      expect(orderFail).toBeInTheDocument();
    });
  });

  test("redirect to OrderCheck out page", () => {
    const orderFailNavigate = screen.getByTestId("orderFailNavigate");
    fireEvent.click(orderFailNavigate);
    expect(window.location.href).toBe("http://localhost/cart");
  });
});
