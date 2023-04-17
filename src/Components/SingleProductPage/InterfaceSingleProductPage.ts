import SingleProductCard from "./SingleProductCard";
import userCart from '../../Redux/Reducer/UserCart';
export interface infoDataType {
  id: string;
  Name: string;
  cate: string;
  dec: string;
  image: string;
  price: string;
  rating: string;
}

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

export interface productDescriptioType {
  Name: string;
  image: string;
  rating: string;
  desc: string;
  price: string;
}

export interface singleProductCardStateType {
  CardData: infoDataType[];
  userWishlist: infoDataType[];
  CardValue: number;
  userCart:propType[];
}
