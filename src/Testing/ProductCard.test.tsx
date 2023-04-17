import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import ProductCard from "../Components/ProductCard/Card";
import { productDataType } from "../Components/ProductCard/CardInterface";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

describe("CartScreen", () => {
  const ProductItems: productDataType = {
    id: "1",
    Name: "Product 1",
    price: "100",
    cate: "product",
    image: "sample.jpg",
    dec: "Description 1",
    rating: "4",
  };
  beforeEach(() => {
    // useParams.mockReturnValue({ id: "123", cate: "electronics" });
    // useSelector.mockReturnValue([
    //   {
    //     id: "123",
    //     Name: "Test Product",
    //     cate: "electronics",
    //     dec: "Test description",
    //     image: "test.jpg",
    //     price: "10.00",
    //     rating: "4",
    //   },
    // ]);
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
});
