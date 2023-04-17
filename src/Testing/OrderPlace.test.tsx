import {
  render,
  screen,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import OrderPlace from "../Screens/OrderPlace";

describe("CartScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <OrderPlace />
        </Router>
      </Provider>
    );
  });

  test("renders the CheckOut Page component", async () => {
    const orderPlace = screen.getByTestId("orderPlace");
    await waitFor(() => {
      expect(orderPlace).toBeInTheDocument();
    });
  });

   test("redirect to OrderCheck out page", () => {
     const orderPlaceNavigate = screen.getByTestId("orderPlaceNavigate");
     fireEvent.click(orderPlaceNavigate);
     expect(window.location.href).toBe("http://localhost/");
   });   
}); 