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
import { propType } from "../Components/Cart/CartInterface";
import Cart from "../Components/Cart/Cart";

describe("CartScreen", () => {
  const cartItems: propType = {
    idValue: "1",
    Name: "Product 1",
    price: "100",
    cate: "product",
    image: "dummy.jpg",
    qua: "1",
    desc: "Description 1",
    rating: "4",
  };

  const removeItem=jest.fn();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Cart {...cartItems} />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const CartPageContainer = screen.getByTestId("cart-card");
    await waitFor(() => {
      expect(CartPageContainer).toBeInTheDocument();
    });
  });
  
  test("increase quantity", () => {
    act(() => {
      store.dispatch({ type: "data", payload: cartItems });
    });
    const quantity = screen.getByTestId("quantity-box");
    expect(quantity).toHaveTextContent("1");
    const decButton = screen.getByTestId("addButton");
    fireEvent.click(decButton);
    expect(quantity).toHaveTextContent("2");
  });

  test("increase quantity", () => {
    act(() => {
      store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    });
    const quantity = screen.getByTestId("quantity-box");
    expect(quantity).toHaveTextContent("1");
    const addButton = screen.getByTestId("addButton");
    fireEvent.click(addButton);
    expect(quantity).toHaveTextContent("2");
    const removeButton = screen.getByTestId("removeButton");
    fireEvent.click(removeButton);
    expect(quantity).toHaveTextContent("1");
  });
});
