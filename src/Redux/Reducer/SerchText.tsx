const initialState:string="";

interface ActionType {
  type: string;
  payload: string;
}

const SerchText = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SetText":
      return action.payload;
    default:
      return state;
  }
};

export default SerchText;
