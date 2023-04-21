import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import ProductCard from "../Components/ProductCard/Card";
import { productDataType } from "../Components/ProductCard/CardInterface";
import { act } from "react-dom/test-utils";
import { propType } from "../Components/Interfaces";

describe("CartScreen", () => {
  const addTOWishList = jest.fn();
  const removeToCart = jest.fn();
  jest.mock("../Components/ProductCard/Card");
  addTOWishList.mockReturnValueOnce(true);

  const ProductItems: productDataType = {
    id: "1",
    Name: "Product 1",
    price: "100",
    cate: "product",
    image: "sample.jpg",
    dec: "Description 1",
    rating: "4",
  };
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
          <ProductCard {...ProductItems} />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const ProductCard = screen.getByTestId("ProductCard");
    await waitFor(() => {
      expect(ProductCard).toBeInTheDocument();
    });
  });

  test("redirect to OrderCheck out page", () => {
    const imagenav = screen.getByTestId("imagenav");
    fireEvent.click(imagenav);
    expect(window.location.href).toBe(
      `http://localhost/product/${ProductItems.cate}/${ProductItems.id}`
    );
  });

  it("renders product details", () => {
    expect(screen.getByText("Product 1")).toBeInTheDocument();
  });

  test("redirect to OrderCheck out page", () => {
    act(() => {
      store.dispatch({ type: "SetWishlist", payload: ProductItems });
    });
    const favorite = screen.getByText("favorite");
    fireEvent.click(favorite);
    expect(addTOWishList.mock.calls.length).toBe(0);
    const data = store.getState().userWishlist;
    expect(data.length).toBe(1);
  });

  test("redirect to out page", () => {
    act(() => {
      store.dispatch({ type: "SetWishlist", payload: ProductItems });
    });
    const favorite = screen.getByTestId("favorite");
    expect(favorite).toBeInTheDocument();
  });

  test("redirect to OrderCheck out page", () => {
    act(() => {
      store.dispatch({ type: "SetUserCart", payload: cartItems[1] });
    });
    const favorite = screen.getByText("shopping_cart");
    const notify = screen.getByTestId("Add");
    expect(notify).toBeInTheDocument();
    const cart = store.getState().userCart.length;
    expect(cart).toBe(1);
    fireEvent.click(favorite);
  });

  test("redirect to out page", () => {
    act(() => {
      store.dispatch({ type: "SetUserCart", payload: cartItems[0] });
    });
    const cart = store.getState().userCart.length;
    expect(cart).toBe(2);
    const removeCartIcon = screen.getByTestId("removeCartIcon");
    const name = screen.getByTestId("name");
    fireEvent.click(removeCartIcon);
    expect(removeToCart.mock.calls.length).toBe(0);
    expect(removeCartIcon).toBeInTheDocument();
  });
});
