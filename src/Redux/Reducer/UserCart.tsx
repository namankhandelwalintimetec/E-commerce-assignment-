import { type } from "os";
import {
  removeUser,
  setUser,
  updateCart,
  decreseCartQuantity,
  emptyCart,
} from "../../Components/Interfaces";

export interface propType {
  id: string;
  Name: string;
  image: string;
  price: string;
  rating: string;
  desc: string;
  qua: string;
  cate: string;
}
export interface propType1 {
  id: string;
  Name: string;
  image: string;
  price: string;
  rating: string;
  desc: string;
  qua: string;
  cate: string;
}

let initialState: propType[] = [
  {
    id: "",
    Name: "",
    image: "",
    price: "",
    rating: "",
    desc: "",
    qua: "",
    cate: "",
  },
];
type typeValue = setUser | removeUser | updateCart | decreseCartQuantity |emptyCart;

const userCart = (state: propType[] = [], action: typeValue): propType[] => {
  switch (action.type) {
    case "SetUserCart":
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        return newState;
      }

    case "updateCart":
      const index1: number = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index1 === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        const updatedProduct = {
          ...newState[index1],
          qua: String(Number(newState[index1].qua) + 1),
        };
        newState[index1] = updatedProduct;
        return newState;
      }

    case "decreseCartQuantity":
      const indexValue: number = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexValue === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        const updatedProduct = {
          ...newState[indexValue],
          qua: String(Number(newState[indexValue].qua) - 1),
        };
        newState[indexValue] = updatedProduct;
        return newState;
      }

    case "removeUserCart":
      const productId = action.payload.id;
      return state.filter((product) => product.id !== productId);
      
    case "emptyCart":
      return []
    default:
      return state;
  }
};

export default userCart;
