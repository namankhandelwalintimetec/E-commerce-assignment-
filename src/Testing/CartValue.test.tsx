import cardValue from "../Redux/Reducer/CartValue";

describe("cardValue reducer", () => {
  it("should handle increaseValue action", () => {
    const action = {
      type: "increaseValue",
      payload: 10,
    };
    expect(cardValue(0, action)).toEqual(10);
  });
  it("should handle decreaseValue action", () => {
    const action = {
      type: "decreaseValue",
      payload: 5,
    };
    expect(cardValue(10, action)).toEqual(5);
  });
  it("should handle reset action", () => {
    const action = {
      type: "Reset Cart",
    };
  });
});
