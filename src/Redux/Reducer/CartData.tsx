import { infoDataType } from "../../Screens/Home";

const initialState = [
  {
    id:"",
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
  payload: infoDataType[];
}

const CardData = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "setcarddata":
      return action.payload;
    default:
      return state;
  }
};

export default CardData;
