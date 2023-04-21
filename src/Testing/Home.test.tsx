import {
  getByTestId,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import { infoDataType } from "../Components/Interfaces";
import Home from "../Screens/Home";
import CarouselComponent from "../Components/Carousel/Carousel";

describe("CartScreen", () => {
  const cartItems: infoDataType[] = [
    {
      id: "1",
      Name: "Product 1",
      price: "100",
      cate: "product",
      image: "dummy.jpg",
      dec: "Description 1",
      rating: "4",
    },
    {
      id: "2",
      Name: "Product 2",
      price: "100",
      cate: "product",
      image: "dummy1.jpg",
      dec: "Description 1",
      rating: "4",
    },
  ];
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  test("renders the Home Page component", async () => {
    const homePage = screen.getByTestId("homePage");
    await waitFor(() => {
      expect(homePage).toBeInTheDocument();
    });
  });

  test("check number of item in list ", () => {
    act(() => {
      store.dispatch({ type: "setProductDetail", payload: cartItems });
    });
    const data = store.getState().CardData.filter((data) => {
      return data.Name === "naman";
    });
    expect(data.length).toBe(0);
  });

  test("check Child component render or not ", async () => {
    const homePage = screen.getByTestId("test");
    await waitFor(() => {
      expect(homePage).toBeInTheDocument();
    });
  });

  test("renders the Home Page component", async () => {
    const footer = screen.getByTestId("footer");
    await waitFor(() => {
      expect(footer).toBeInTheDocument();
    });
  });

  test("check number of item in list ", () => {
    act(() => {
      store.dispatch({ type: "setProductDetail", payload: cartItems });
    });
    const data = store.getState().CardData.length;
     act(() => {
       store.dispatch({ type: "SetText", payload: "" });
     });
     const dataTest=store.getState().SerchText;
     if(dataTest.length<0)
     {
       expect(data).toBe(2);
     }
     if(dataTest.length>0)
     {
      const data = store.getState().CardData.filter((item)=>{
        return item.Name.includes(dataTest);
      })
      expect(data).toBe(1);
     }
    
  });
  
});
