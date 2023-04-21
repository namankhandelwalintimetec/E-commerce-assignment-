import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from "../Screens/Authentication";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import Login from "../Components/LogIn/Login";
import SingUp from "../Components/SingUp/SingUp";
import PageNotFound from "../Screens/PageNotFound";

jest.mock("../Components/LogIn/Login");
jest.mock("../Components/SingUp/SingUp");

describe("Authentication component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <PageNotFound />
        </Router>
      </Provider>
    );
  });
  test("renders the Authentication Page component", async () => {
    const pagenotfound = screen.getByTestId("pagenotfound");
    await waitFor(() => {
      expect(pagenotfound).toBeInTheDocument();
    });
  });
});
