import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ProductCategoryPage from "../Screens/ProductCatePage";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore([]);

describe("CartScreen", () => {
  let component: any;
  let store = mockStore({
    CardData: [
      {
        id: 1,
        Name: "Product 1",
        price: "100",
        cate: "Category 1",
        image: "product1.jpg",
        rating: "4.5",
        dec: "Description for product 1",
      },
      {
        id: 2,
        Name: "Product 2",
        price: "200",
        cate: "Category 1",
        image: "product2.jpg",
        rating: "3.5",
        dec: "Description for product 2",
      },
      {
        id: 3,
        Name: "Product 3",
        price: "300",
        cate: "Category 2",
        image: "product3.jpg",
        rating: "4.0",
        dec: "Description for product 3",
      },
    ],
    setCategory: "Category 1",
  });
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ProductCategoryPage />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const CartPageContainer = screen.getByTestId("product-cart");
    await waitFor(() => {
      expect(CartPageContainer).toBeInTheDocument();
    });
  });

  it("should update rating filter when input is changed", async () => {
    const input = screen.getByTestId("rating");
    fireEvent.change(input, { target: { value: "4" } });
    const products = screen.getAllByTestId("product-card");
    expect(products).toHaveLength(1);
  });

  it("should update price filter when slider is moved", async () => {
    const slider = screen.getByTestId("slider");
    fireEvent.change(slider, { target: { value: "150" } });
    const products = screen.getAllByTestId("product-card");
    expect(products).toHaveLength(1);
  });
});
