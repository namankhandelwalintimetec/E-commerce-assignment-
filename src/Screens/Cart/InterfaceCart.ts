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

export interface StateTypeCartPage {
  userCart: propType[];
  CardValue: number;
}
