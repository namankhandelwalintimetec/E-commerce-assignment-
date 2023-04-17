import { cartDataActionType } from "../../Components/Interfaces";
import { infoDataType } from "../../Components/Interfaces";

const initialState: infoDataType[] = [
  {
    id: "",
    Name: "",
    cate: "",
    dec: "",
    image: "",
    price: "",
    rating: "",
  },
];

const cardData = (state =initialState, action: cartDataActionType) => {
  switch (action.type) {
    case "setProductDetail":
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        return newState;
      }
    default:
      return state;
  }
};

export default cardData;
