import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
  queryByPlaceholderText,
} from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import Navbar from "../Components/Navbar/Navbar";

describe("CartScreen", () => {
  jest.spyOn(window.screen, "width", "get").mockReturnValue(600);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
  });

  test("renders the NavBar component", async () => {
    const navContainer = screen.getByTestId("Navbar");
    await waitFor(() => {
      expect(navContainer).toBeInTheDocument();
    });
  });
  test("redirect to Home page", () => {
    const homeNavigation = screen.getByTestId("homeNavigation");
    fireEvent.click(homeNavigation);
    expect(window.location.href).toBe("http://localhost/");
  });
  test("redirect to female Categeory page", () => {
    const femaleProductNavigation = screen.getByTestId(
      "femaleProductNavigation"
    );
    fireEvent.click(femaleProductNavigation);
    expect(window.location.href).toBe("http://localhost/product/female");
  });
  test("redirect to electronic Product page", () => {
    const electronicProductNavigation = screen.getByTestId(
      "electronicProductNavigation"
    );
    fireEvent.click(electronicProductNavigation);
    expect(window.location.href).toBe("http://localhost/product/electronic");
  });
  test("redirect to wishlist  page", () => {
    const wishlistNav = screen.getByTestId("wishlistNav");
    fireEvent.click(wishlistNav);
    expect(window.location.href).toBe("http://localhost/wishlist");
  });
  test("redirect to Cart  page", () => {
    const CartNav = screen.getByTestId("CartNav");
    fireEvent.click(CartNav);
    expect(window.location.href).toBe("http://localhost/Cart");
  });
  test("redirect to Home page", () => {
    const logoNav = screen.getByTestId("logoNav");
    fireEvent.click(logoNav);
    expect(window.location.href).toBe("http://localhost/");
  });

  test("remove item", () => {
    const logOut = screen.getByTestId("logout");
    fireEvent.click(logOut);
    const update = store.getState().userEmail;
    expect(update).toBe("");
  });

  test("redirect to login  page", () => {
    const logIn = screen.getByTestId("login");
    fireEvent.click(logIn);
    expect(window.location.href).toBe("http://localhost/login");
  });

  test("check right Search text push or not", () => {
    const search = screen.getByTestId("search-value");
    fireEvent.click(search);
    act(() => {
      store.dispatch({ type: "SetText", payload: "phone" });
    });
    const text = store.getState().SerchText;
    expect(text).toBe("phone");
  });

  test("When hover than show Email id", () => {
    const logIn = screen.getByTestId("logout");
    fireEvent.mouseOver(logIn);
    const hover = screen.getByTestId("hover");
    expect(hover).toBeInTheDocument;
  });

  test("Window Size changed", () => {
    window.innerWidth = 600;
    fireEvent(window, new Event("resize"));
    const dropdown = screen.getByTestId("dropdown");
    fireEvent.mouseOver(dropdown);
    const dropdownContent = screen.getByTestId("dropdownContent");
    expect(dropdownContent).toBeInTheDocument();
  });

  test("redirect to female Categeory page", () => {
    const allDrop = screen.getByTestId("allDrop");
    fireEvent.click(allDrop);
    expect(window.location.href).toBe("http://localhost/");
  });
  test("redirect to electronic Product page", () => {
    const mendrop = screen.getByTestId("mendrop");
    fireEvent.click(mendrop);
    expect(window.location.href).toBe("http://localhost/product/men");
  });

  test("redirect to electronic Product page", () => {
    const femaleDrop = screen.getByTestId("femaleDrop");
    fireEvent.click(femaleDrop);
    expect(window.location.href).toBe("http://localhost/product/female");
  });

   test("redirect to electronic Product page", () => {
     const electronicDrop = screen.getByTestId("electronicDrop");
     fireEvent.click(electronicDrop);
     expect(window.location.href).toBe(
       "http://localhost/product/electronic"
     );
   });
}); 
