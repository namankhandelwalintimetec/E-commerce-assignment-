import {
  render,
  screen,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import { infoDataType } from "../Components/Interfaces";
import Wishlist from "../Screens/WishList";

describe("CartScreen", () => {
  const cartItems: infoDataType[] = [
    {
      id: "1",
      Name: "Product 1",
      price: "100",
      cate: "product",
      image: "dummy.jpg",
      dec: "Description 1",
      rating: "4",
    },
    {
      id: "2",
      Name: "Product 2",
      price: "100",
      cate: "product",
      image: "dummy.jpg",
      dec: "Description 1",
      rating: "4",
    },
  ];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Wishlist />
        </Router>
      </Provider>
    );
  });

  test("renders the WishList Page component", async () => {
    const wishCard = screen.getByTestId("wishCard");
    await waitFor(() => {
      expect(wishCard).toBeInTheDocument();
    });
  });

   test("renders the cart Page component", () => {
     act(() => {
       store.dispatch({
         type: "SetEmail",
         payload: "namankhandelwa@gmail.com",
       });
       expect(window.location.href).toBe("http://localhost/EmptyWishlist");
     });
   });

  test("check number of item in wishList ", () => {
    cartItems.forEach((product)=>{
     act(() => {
       store.dispatch({ type: "SetWishlist", payload: product });
     });
    })
    const update=store.getState().userWishlist
    expect(update.length).toBe(2);
  });
});
