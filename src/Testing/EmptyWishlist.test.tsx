import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import emptyCart from "../Assets/Image/EmptyWishlist.png";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import EmptyWishListPage from "../Components/EmptyWishList/EmptyWishList";

describe("CartScreen", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <EmptyWishListPage />
        </Router>
      </Provider>
    );
  });

  test("renders the component", async () => {
    const orderFail = screen.getByTestId("empty");
    await waitFor(() => {
      expect(orderFail).toBeInTheDocument();
    });
  });

  it("should render an empty cart image", () => {
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", emptyCart);
  });

  test("check proper text or not ", () => {
    const img = screen.getByTestId("text");
    expect(img).toBeInTheDocument();
  });

  test("redirect to OrderCheck out page", () => {
    const orderPlaceNavigate = screen.getByTestId("emptywishlist");
    fireEvent.click(orderPlaceNavigate);
    expect(window.location.href).toBe("http://localhost/Login");
  });
});
