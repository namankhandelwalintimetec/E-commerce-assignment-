import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import SingleProductCard from "../Components/SingleProductPage/SingleProductCard";
import { useParams } from "react-router-dom"; // Import useParams to mock URL params
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productDescriptioType } from "../Components/SingleProductPage/InterfaceSingleProductPage";
import exp from "constants";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("CartScreen", () => {
  const product: productDescriptioType = {
    Name: "Product 1",
    price: "100",
    image: "dummy.jpg",
    desc: "Description 1",
    rating: "4",
  };

  const data = {
    id: "1",
    Name: "k",
    cate: "male",
    dec: "good",
    image: "dummy",
    price: "90",
    rating: "2",
  };
  const cartdata={
    id: "1",
    Name: "naman",
    image: "dummy",
    price: "12",
    rating: "1",
    desc: "good",
    qua: "1",
    cate: "male",
  }

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

  it("check that the product decription should render or not", () => {
    const singlepage = screen.getByTestId("singlepage");
    expect(singlepage).toBeInTheDocument();
  });

  it("check the product page image is render or not", () => {
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
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

  it("when user click Wishlist button", async () => {
    const updatedCartItems = store.getState().userWishlist;
    expect(updatedCartItems.length).toBe(0);
    const data =screen.getByText("Wishlist");
    fireEvent.click(data);
  });

  it("setwishlist function run or not", async () => {
    const button =screen.getByText("Wishlist");
    fireEvent.click(button);
    act(() => {
      store.dispatch({ type: "SetWishlist", payload: data });
    });
    const wishlist = store.getState().userWishlist.length;
    expect(wishlist).toBe(1);
  });

   it("check that ",() => {
     const button = screen.getByText("Buy now"); 
     fireEvent.click(button);
      act(() => {
        store.dispatch({ type: "updateCart", payload: cartdata });
      });
     const notify=screen.getByTestId("notify");
     expect(notify).toBeInTheDocument();
     const cartdatavalue=store.getState().userCart.length;
     expect(cartdatavalue).toBe(1);
   });
});
