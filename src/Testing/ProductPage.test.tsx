import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import ProductPage from "../Screens/ProductPage";
import { infoDataType } from "../Components/Interfaces";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [new URLSearchParams({ id: "123" })],
}));

describe("Authentication component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>
    );
  });

  it("renders", () => {
    const productPage = screen.getByTestId("productPage");
    expect(productPage).toBeInTheDocument();
  });
});
 