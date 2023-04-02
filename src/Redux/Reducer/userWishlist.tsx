import { infoDataType } from "../../Screens/Home";


let initialState: infoDataType[] = [
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

interface ActionType {
  type: string;
  payload: infoDataType;
}

const userWishlist = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "SetWishlist":
      return [...state, action.payload];
    case "removeWishlist":
      return initialState;
    default:
      return state;
  }
};

export default userWishlist;
