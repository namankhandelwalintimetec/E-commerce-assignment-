import { type } from "os";
import { removeUser, setUser, updateCart } from "../../Components/Interfaces";

export interface propType {
  idValue: string;
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
}

let initialState: propType[] = [
  {
    idValue: "",
    Name: "",
    image: "",
    price: "",
    rating: "",
    desc: "",
    qua: "",
    cate: "",
  },
];
type typeValue = setUser | removeUser | updateCart;

const userCart = (state: propType[] = [], action: typeValue): propType[] => {
  switch (action.type) {
    case "SetUserCart":
      const index = state.findIndex(
        (product) => product.idValue === action.payload.idValue
      );
      if (index === -1) {
        return [...state, action.payload];
      } else {
        const newState = [...state];
        return newState;
      }

    case "updateCart":
      const index1: number = state.findIndex(
        (product) => product.idValue === action.payload.idValue
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

    case "removeUserCart":
      const productId = action.payload.id;
      return state.filter((product) => product.idValue !== productId);
    default:
      return state;
  }
};

export default userCart;
