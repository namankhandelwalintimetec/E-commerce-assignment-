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
import Navbar from "../Components/Navbar/Navbar";

describe("CartScreen", () => {
  const removeItem = jest.fn();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
  });

  test("renders the cart Page component", async () => {
    const CartPageContainer = screen.getByTestId("Navbar");
    await waitFor(() => {
      expect(CartPageContainer).toBeInTheDocument();
    });
  });
  test("redirect to Home out page", () => {
    const homeNavigation = screen.getByTestId("homeNavigation");
    fireEvent.click(homeNavigation);
    expect(window.location.href).toBe("http://localhost/");
  });
  test("redirect to Categeory page", () => {
    const femaleProductNavigation = screen.getByTestId(
      "femaleProductNavigation"
    );
    fireEvent.click(femaleProductNavigation);
    expect(window.location.href).toBe("http://localhost/product/female");
  });
  test("redirect to electronicProduct  page", () => {
    const electronicProductNavigation = screen.getByTestId(
      "electronicProductNavigation"
    );
    fireEvent.click(electronicProductNavigation);
    expect(window.location.href).toBe("http://localhost/product/electronic");
  });
  
  test("redirect to electronicProduct  page", () => {
    const loginButton = screen.getByTestId("loginButton");
    fireEvent.click(loginButton);
    expect(window.location.href).toBe("http://localhost/login");
  });
  test("redirect to electronicProduct  page", () => {
    const wishlistNav = screen.getByTestId("wishlistNav");
    fireEvent.click(wishlistNav);
    expect(window.location.href).toBe("http://localhost/wishlist");
  });
   test("redirect to electronicProduct  page", () => {
     const CartNav = screen.getByTestId("CartNav");
     fireEvent.click(CartNav);
     expect(window.location.href).toBe("http://localhost/Cart");
   });
   test("redirect to electronicProduct  page", () => {
     const logoNav = screen.getByTestId("logoNav");
     fireEvent.click(logoNav);
     expect(window.location.href).toBe("http://localhost/");
   });
});  
