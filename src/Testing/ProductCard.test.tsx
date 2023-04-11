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
import Cart from "../Components/Cart/Cart";
import ProductCard from "../Components/ProductCard/Card";
import ProductCategoryPage from "../Screens/ProductCatePage";
import { productDataType } from "../Components/ProductCard/CardInterface";

describe("CartScreen", () => {
	const cartItems: productDataType = {
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
          <ProductCard {...cartItems}/>
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
    expect(window.location.href).toBe(`http://localhost/product/${cartItems.cate}/${cartItems.id}`);
  });   
  
});
   