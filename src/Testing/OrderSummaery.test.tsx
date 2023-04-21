import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import OrderPlace from "../Screens/OrderPlace";
import OrderSummry from "../Screens/OrderSummaryPage";

describe("CartScreen", () => {
  const fetchOrderHistory=jest.fn();
  fetchOrderHistory.mockReturnValueOnce(true);
  const orderSummaery = [
    {
      Name: "Product 1",
      total: "100",
      pincode: "321210",
      image: "dummy.jpg",
      qua: "1",
      desc: "Description 1",
      rating: "4",
    },
    {
      Name: "Product 1",
      total: "100",
      pincode: "321210",
      image: "dummy.jpg",
      qua: "1",
      desc: "Description 1",
      rating: "4",
    },
  ];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <OrderSummry />
        </Router>
      </Provider>
    );
  });

  test("renders the CheckOut Page component", () => {
    const orderPlace = screen.getByTitle("order-page");
    expect(orderPlace).toBeInTheDocument();
  });
});
