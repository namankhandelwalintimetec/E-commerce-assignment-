import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import ProductCard from "../Components/ProductCard/Card";

const mockStore = configureStore([]);

describe("ProductCard component", () => {
  let store:any;

  beforeEach(() => {
    store = mockStore({
      CardData: [
        {
          id: "1",
          Name: "Product 1",
          cate: "Category 1",
          price: "10",
          image: "image-url-1",
          rating: "4",
          dec: "Product 1 description",
        },
      ],
      userWishlist: [],
      userCart: [],
    });
  });

  test("renders product card correctly", () => {
    const product = {
      id: "1",
      Name: "Product 1",
      cate: "Category 1",
      price: "10",
      image: "image-url-1",
      rating: "4",
      dec: "Product 1 description",
    };
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProductCard {...product} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("ProductCard")).toBeInTheDocument();
    expect(screen.getByTestId("productName")).toHaveTextContent(product.Name);
  });

  test("adds product to wishlist when favorite icon is clicked", () => {
    const product = {
      id: "1",
      Name: "Product 1",
      cate: "Category 1",
      price: "10",
      image: "image-url-1",
      rating: "4",
      dec: "Product 1 description",
    };
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductCard {...product} />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.click(screen.getByText("favorite"));
    expect(store.getAction()).toEqual([
      { type:"SetWishlist", payload: product },
    ]);  
  });
});