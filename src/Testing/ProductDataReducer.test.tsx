import cardData from "../Redux/Reducer/CartData";

describe("cardData reducer", () => {
  it("should return the initial state", () => {
    expect(cardData(undefined, {})).toEqual([
      {
        id: "",
        Name: "",
        cate: "",
        dec: "",
        image: "",
        price: "",
        rating: "",
      },
    ]);
  });

  it("should handle setcarddata action", () => {
    const action = {
      type: "setcarddata",
      payload: [
        {
          id: "123",
          Name: "Example",
          cate: "Category",
          dec: "Description",
          image: "example.jpg",
          price: "100",
          rating: "5",
        },
      ],
    };    
    const newState = cardData([], action);
    expect(newState.length).toBe(1);
    expect(newState[0]).toEqual({
      id: "123",
      Name: "Example",
      cate: "Category",
      dec: "Description",
      image: "example.jpg",
      price: "100",
      rating: "5",
    });
  });

  it("should not modify the state for unknown action types", () => {
    const action = {
      type: "unknown",
      payload: [
        {
          id: "123",
          Name: "Example",
          cate: "Category",
          dec: "Description",
          image: "example.jpg",
          price: "100",
          rating: "5",
        },
      ],
    };
});
});