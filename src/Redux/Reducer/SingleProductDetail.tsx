import { infoDataType } from "../../Screens/Home";

interface ActionType {
  type: string;
  payload: infoDataType;
}

const initialState: infoDataType = {
  id: "123",
  Name: "",
  cate: "",
  dec: "",
  image: "",
  price: "",
  rating: "",
};

const SingleProductDetail = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "setcart":
      return action.payload;
    default:
      return state;
  }
};

export default SingleProductDetail;
