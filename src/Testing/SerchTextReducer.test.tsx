import serchText from "../Redux/Reducer/SerchText";

describe("serchText reducer", () => {
  it("should handle SetText action", () => {
    const action = {
      type: "SetText",
      payload: "example",
    };
    expect(serchText("", action)).toEqual("example");
  });

  it("should not modify the state for unknown action types", () => {
    const action = {
      type: "unknown",
      payload: "example",
    };
    expect(serchText("initial state", action)).toEqual("initial state");
  });
});
