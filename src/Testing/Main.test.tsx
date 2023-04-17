import {
  render,
  screen,
  waitFor,
  fireEvent,
  act,
} from "@testing-library/react";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Main from "../Components/Main";
import store from "../Redux/Store";
import App from "../App";

const mockStore = configureMockStore([]);

describe("CartScreen", () => {
  test("render", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    );
  });
});
