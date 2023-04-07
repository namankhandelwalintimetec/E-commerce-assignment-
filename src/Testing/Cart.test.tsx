import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import  store from '../Redux/Store';

describe("ShopCart", () => {
  it("renders the cart", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          
        </BrowserRouter>
      </Provider>
    );
  });
});