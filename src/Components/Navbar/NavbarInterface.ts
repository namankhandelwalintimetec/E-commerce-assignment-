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
export interface infoDataType {
  id: string;
  Name: string;
  cate: string;
  dec: string;
  image: string;
  price: string;
  rating: string;
}
export interface StateTypeNavbar {
  userCart: propType[];
  userWishlist: propType[];
  userEmail: string;
}
