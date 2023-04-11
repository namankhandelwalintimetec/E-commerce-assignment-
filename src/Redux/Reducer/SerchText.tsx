import { serchTextActionType } from "../../Components/Interfaces";

const initialState: string = "";

const serchText = (state = initialState, action: serchTextActionType) => {
  switch (action.type) {
    case "SetText":
      return action.payload;
    default:
      return state;
  }
};

export default serchText;
