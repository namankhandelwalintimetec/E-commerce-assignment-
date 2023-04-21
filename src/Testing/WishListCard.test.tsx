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
import WishlistCard from "../Components/WishListCard/WishListCard";
import { infoDataType } from "../Components/Interfaces";

describe("CartScreen", () => {
  const wishItems: infoDataType = {
    id: "1",
    Name: "Product 1",
    price: "100",
    cate: "product",
    image: "dummy.jpg",
    dec: "Description 1",
    rating: "4",
  };

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <WishlistCard {...wishItems} />
        </Router>
      </Provider>
    );
  });

  test("renders the WishList Page component", async () => {
    const wishListCard = screen.getByTestId("wishListCard");
    await waitFor(() => {
      expect(wishListCard).toBeInTheDocument();
    });
  });

  test("check write price show or not", async () => {
    act(() => {
      store.dispatch({ type: "data", payload: wishItems });
    });
    const price = screen.getByTestId("price");
    expect(price).toHaveTextContent(`Rs.${wishItems.price}`);
  });

  test("check write price show or not", async () => {
    act(() => {
      store.dispatch({ type: "data", payload: wishItems });
    });
    const price = screen.getByTestId("rating");
    expect(price).toHaveTextContent(`${wishItems.rating}⭐`);
  });

  test("remove item", () => {
    act(() => {
      store.dispatch({ type: "removeWishlist", payload: wishItems });
    });
    const removeWishList = screen.getByTestId("removeWishList");
    fireEvent.click(removeWishList);
    const update = store.getState().userWishlist.length;
    expect(update).toBe(0);
  });
});
