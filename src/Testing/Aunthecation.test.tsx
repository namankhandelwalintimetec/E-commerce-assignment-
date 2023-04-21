import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "../Screens/Authentication";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import Login from "../Components/LogIn/Login";
import SingUp from "../Components/SingUp/SingUp";

jest.mock("../Components/LogIn/Login");
jest.mock("../Components/SingUp/SingUp");

describe("Authentication component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Authentication />
        </Router>
      </Provider>
    );
  });

  test("renders the Authentication Page component", async () => {
    const authentication = screen.getByTestId("authentication");
    await waitFor(() => {
      expect(authentication).toBeInTheDocument();
    });
  });

  test("Here check Toggle Button", async () => {
    const wishCard = screen.getByTestId("toggle-text");
    expect(wishCard).toHaveTextContent("Log In");
    fireEvent.click(wishCard);
    expect(wishCard).toHaveTextContent("Sign up");
  });

  test("Child component render or not", async () => {
    expect(Login).toHaveBeenCalled();
  });

  test("Child component SignUp render or not", async () => {
    expect(SingUp).toHaveBeenCalled();
  });

  test("calls onChange function with input value", () => {
    const wishCard = screen.getByTestId("toggle-text");
    expect(wishCard).toHaveTextContent("Log In");
    fireEvent.click(wishCard);
    const signup = screen.getByTestId("signup");
    expect(signup).toBeInTheDocument();
    const logindiv = screen.getByTestId("login");
    expect(logindiv).toBeInTheDocument();
  });
});
