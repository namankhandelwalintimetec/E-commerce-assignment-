import { cartDataActionType } from "../../Components/Interfaces";
import { infoDataType } from "../../Components/Interfaces";

const initialState :infoDataType[] = [
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

const cardData = (state = initialState, action: cartDataActionType) => {
  switch (action.type) {
    case "setcarddata":
      return action.payload;
    default:
      return state;
  }
};

export default cardData;
