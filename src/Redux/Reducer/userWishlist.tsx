import { infoDataType } from "../../Screens/Home";
import { SetWishlist, removeCartItem } from "../Action/Action";

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

interface SetWishList {
  type: string;
  payload: infoDataType;
}

interface removeWishList {
  type: string;
  payload: any;
}
type typeValue = SetWishList | removeWishList;

// const userWishlist = (state = initialState, action: ActionType) => {
const userWishlist = (
  state: infoDataType[] = [],
  action: typeValue
): infoDataType[] => {
  switch (action.type) {
    case "SetWishlist":
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        return newState;
      }
    case "removeWishlist":
      console.log("hii");
      const productId = action.payload;
      return state.filter((product) => product.id !== productId);
    default:
      return state;
  }
};

export default userWishlist;
