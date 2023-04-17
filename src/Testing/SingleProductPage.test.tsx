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
import SingleProductCard from "../Components/SingleProductPage/SingleProductCard";
import { useParams } from "react-router-dom"; // Import useParams to mock URL params
import { setWishlist } from "../Redux/Action/Action";
import { setProductData } from "../Redux/Action/Action";
import { infoDataType, propType1, setWishList } from "../Components/Interfaces";
import { setUserCart } from "../Redux/Action/Action";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productDescriptioType } from "../Components/SingleProductPage/InterfaceSingleProductPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(), // Mock useParams
}));

describe("CartScreen", () => {
  const product: productDescriptioType = {
    Name: "Product 1",
    price: "100",
    image: "dummy.jpg",
    desc: "Description 1",
    rating: "4",
  };

  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: "1" });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingleProductCard {...product} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("should render product details", async () => {
    await waitFor(() => screen.getByTestId("product-name"));
    expect(screen.getByTestId("product-name")).toHaveTextContent(product.Name);
  });

  it("should add product to cart when 'Add to Cart' button is clicked", async () => {
    screen.getByText("Buy now").click();
    const updatedCartItems = store.getState().userCart;
    expect(updatedCartItems.length).toBe(0);
  });
  it("should add product to cart when 'WhishList' button is clicked", async () => {
    screen.getByText("Wishlist").click();
    const updatedCartItems = store.getState().userWishlist;
    expect(updatedCartItems.length).toBe(0);
  });
});
