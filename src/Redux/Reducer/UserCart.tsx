import { type } from "os";
import { infoDataType } from "../../Screens/Home";

export interface propType {
  idValue: string;
  Name: string;
  image: string;
  price: string;
  rating: string;
  desc: string;
  qua: number;
  cate:string;
}
export interface propType1 {
  id: string;
  Name: string;
  image: string;
  price: string;
  rating: string;
  desc: string;
  qua: number;
}


interface setUser{
  type:"SetUserCart";
  payload:propType;
}

interface removeUser {
  type: "removeUserCart";
  payload: propType1;
}
let initialState: propType[] = [
  {
    idValue: "",
    Name: "",
    image: "",
    price: "",
    rating: "",
    desc: "",
    qua: 0,
    cate:""
  },
];
type typeValue=setUser | removeUser

// interface ActionType {
//   type: string;
//   payload: any;
// }

const userCart = (state :propType[]=[], action:typeValue):propType[] => {
  switch (action.type) {
    case "SetUserCart":
      return [...state, action.payload];
    case "removeUserCart":
      const productId=action.payload.id;
      console.log(action.payload);
      console.log("=========================");
      return state.filter((product) => product.idValue !== productId);
    default:
      return state;
  }
};

export default userCart;
