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

export interface StateTypeCart {
  CardData: infoDataType[];
  CardValue: number;
  userCart: propType[];
}

export interface popUpBoxPropes {
  title: string;
  message: string;
  type: string;
  class: string;
}
