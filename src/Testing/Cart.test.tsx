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

describe.only("CartScreen", () => {
  // let component: any;
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

  test("renders the cart Page component", () => {
    const CartPageContainer = screen.getByTitle("container");
    expect(CartPageContainer).toBeInTheDocument();
  });

   test("renders the cart Page component", () => {
    act(() => {
      store.dispatch({ type: "SetEmail", payload: "" }); 
    });
     expect(window.location.href).toBe("http://localhost/EmptyCart");
   });

  test("displays a message when the cart is empty", () => {
    act(() => {
      store.dispatch({ type: "SetUserCart", payload: cartItems[0] });
    });
    const emptyCartMessage = screen.getByTestId("empty-cart-message");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("redirect to OrderCheck out page", () => {
    const placeOrder = screen.getByText("Place Order");
    fireEvent.click(placeOrder);
    expect(window.location.href).toBe("http://localhost/checkout"); 
  });

   test("redirect to OrderSummary page", () => {
     const placeOrder = screen.getByText("Order history");
     fireEvent.click(placeOrder);
     expect(window.location.href).toBe("http://localhost/orderSummary");
   });
 
  test("displays a message when the cart is empty", () => {
    act(() => {
      store.dispatch({ type: "emptyCart" });
    });
    const emptyCartMessage = screen.getByTestId("empty");
    expect(emptyCartMessage).toBeInTheDocument();
  });

  test("Remove item form cart", () => {
    act(() => {
      store.dispatch({ type: "removeCartItem", payload: cartItems[0] });
    });
    const cartRemove=store.getState().userCart.length;
    expect(cartRemove).toBe(0);
  });
});
