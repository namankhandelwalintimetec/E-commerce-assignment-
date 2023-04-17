import { cartValueActionType } from "../../Components/Interfaces";

const initialState: number = 0;

const Discount = (state = initialState, action: cartValueActionType) => {
  switch (action.type) {
    case "setOrderAmount":
      console.log(action.payload);
      return action.payload;
    case "resetOrderAmount":
      return 0;
    default:
      return state;
  }
};

export default Discount;
