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
import ShopCart from "../Screens/Cart";

describe("CartScreen", () => {
  let component: any;
  const cartItems: propType[] = [
    {
      id: "1",
      Name: "Product 1",
      price: "100",
      cate: "product",
      image: "dummy.jpg",
      qua: "1",
      desc: "Description 1",
      rating: "4",
    },
    {
      id: "2",
      Name: "Product 2",
      price: "101",
      cate: "product",
      image: "dummy1.jpg",
      qua: "2",
      desc: "Description 2",
      rating: "4",
    },
  ];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ShopCart />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const CartPageContainer = screen.getByTestId("cart-page-container");
    await waitFor(() => {
      expect(CartPageContainer).toBeInTheDocument();
    });
  });

  test("displays a message when the cart is empty", () => {
    store.dispatch({ type: "data", payload: [] });
    const emptyCartMessage = screen.getByTestId("empty-cart-message");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("redirect to OrderCheck out page", () => {
    const placeOrder = screen.getByTestId("PlaceOrder");
    fireEvent.click(placeOrder);
    expect(window.location.href).toBe("http://localhost/EmptyCart");
  });

  it("should render product cards after data is loaded", async () => {
    act(() => {
      store.dispatch({ type: "SET_CART_ITEMS", payload: cartItems });
    });
    const quantity = screen.getByTestId("product-card");
    expect(quantity).toBeInTheDocument();
  });
});
