import { singleProductDataActionType } from "../../Components/Interfaces";
import { infoDataType } from "../../Screens/Home/InterfaceHome";

const initialState: infoDataType = {
  id: "",
  Name: "",
  cate: "",
  dec: "",
  image: "",
  price: "",
  rating: "",
};

const singleProductDetail = (state = initialState, action: singleProductDataActionType) => {
  switch (action.type) {
    case "setcart":
      return action.payload;
    default:
      return state;
  }
};

export default singleProductDetail;
