const initialState: string = "";

interface ActionType {
  type: string;
  payload: string;
}

const setCategory = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SetCategory":
      return action.payload;
    default:
      return state;
  }
};

export default setCategory;
