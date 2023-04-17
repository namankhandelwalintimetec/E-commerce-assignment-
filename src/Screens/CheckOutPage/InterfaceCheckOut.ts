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

export interface StateTypeCheckOut {
  CardValue: number;
  userCart:propType[];
  Discount:number;
}
