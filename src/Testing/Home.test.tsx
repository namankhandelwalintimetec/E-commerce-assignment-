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
import { infoDataType } from "../Components/Interfaces";
import Home from "../Screens/Home";

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
      image: "dummy1.jpg",
      dec: "Description 1",
      rating: "4",
    },
  ];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
  });

  test("renders the Home Page component", async () => {
    const homePage = screen.getByTestId("homePage");
    await waitFor(() => {
      expect(homePage).toBeInTheDocument();
    });
  });

  test("check number of item in wishList ", () => {
    store.dispatch({ type: "check nmumber of items ", payload: [] });
    expect(cartItems.length).toBe(2);
  });
});
