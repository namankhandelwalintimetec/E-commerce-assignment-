import { removeWishList, setWishList } from "../../Components/Interfaces";
import { infoDataType } from "../../Screens/Home/InterfaceHome";
import { setWishlist, removeCartItem } from "../Action/Action";

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

export type typeValue = setWishList | removeWishList;

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
      const productId = Number(action.payload)+1;
      return state.filter((product) => Number(product.id) !==productId);
    default:
      return state;
  }
};

export default userWishlist;
