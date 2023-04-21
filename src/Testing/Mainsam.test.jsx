import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Main from "../Components/Main";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Main component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      userWishlist: [],
      userCart: [],
    });
  });

  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();
  });
});
