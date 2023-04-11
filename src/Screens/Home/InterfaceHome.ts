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
  idValue: string;
  Name: string;
  image: string;
  price: string;
  rating: string;
  desc: string;
  qua: string;
  cate: string;
}
export interface stateType {
  userCart: propType[];
  CardData: infoDataType[];
  SerchText: string;
  setCategory: string;
}
