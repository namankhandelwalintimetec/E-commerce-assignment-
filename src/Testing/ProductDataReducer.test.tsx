import cardData from "../Redux/Reducer/CartData";
import { setProductData } from "../Redux/Action/Action";

describe("cardData reducer", () => {
  const initialState = [
    { id: "", Name: "", cate: "", dec: "", image: "", price: "", rating: "" },
  ];

  it("should return the initial state", () => {
    expect(cardData(undefined, {})).toEqual(initialState);
  });

  it("should handle setProductDetail", () => {
    const payload = {
      id: "1",
      Name: "Product 1",
      cate: "Category 1",
      dec: "Description 1",
      image: "image1.jpg",
      price: "10.00",
      rating: "4",
    };

    const newState = [
      { id: "", Name: "", cate: "", dec: "", image: "", price: "", rating: "" },
      payload,
    ];

    const action = {
      type: "setProductDetail",
      payload,
    };

    expect(cardData(initialState, action)).toEqual(newState);
  });

  it("should handle setProductDetail action when product is not in the state", () => {
    const product = {
      id: "1",
      Name: "Product 1",
      cate: "Category 1",
      dec: "Product 1 Description",
      image: "product1.jpg",
      price: "10.00",
      rating: "4",
    };
    const action = setProductData(product);
    expect(cardData(undefined, action)).toEqual([...initialState, product]);
  });
  it("should handle setProductDetail action when product is already in the state", () => {
    const product = {
      id: "1",
      Name: "Product 1",
      cate: "Category 1",
      dec: "Product 1 Description",
      image: "product1.jpg",
      price: "10.00",
      rating: "4",
    };
    const action = setProductData(product);
    const currentState = [product];
    expect(cardData(currentState, action)).toEqual(currentState);
  });
});
