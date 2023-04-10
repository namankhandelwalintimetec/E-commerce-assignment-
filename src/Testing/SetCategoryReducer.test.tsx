import setCategory from "../Redux/Reducer/SetCate";

describe("setCategory reducer", () => {

  it("should handle SetCategory action", () => {
    const action = {
      type: "SetCategory",
      payload: "example",
    };
    expect(setCategory("", action)).toEqual("example");
  });

  it("should not modify the state for unknown action types", () => {
    const action = {
      type: "unknown",
      payload: "example",
    };
    expect(setCategory("initial state", action)).toEqual("initial state");
  });
});
