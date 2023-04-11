const initialState= ""

interface ActionType {
  type: string;
  payload:string;
}

const userEmail = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SetEmail":
      return action.payload;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

export default userEmail;
