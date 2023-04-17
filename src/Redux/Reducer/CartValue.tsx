import { infoDataType } from "../../Components/Interfaces";
import { cartValueActionType } from "../../Components/Interfaces";

const initialState: number = 0;

const cardValue = (state = initialState, action: cartValueActionType) => {
  switch (action.type) {
    case "increaseValue":
      return state+action.payload;
    case "decreaseValue":
      return state-action.payload;
    case "Reset Cart":
      return 0;
    default:
      return state;
  }
};

export default cardValue;
