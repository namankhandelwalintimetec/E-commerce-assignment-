export interface infoDataType {
	id: string;
	Name: string;
	cate: string;
	dec: string;
	image: string;
	price: string;
	rating: string;
}

export interface StateTypeWishList{
	userWishlist: infoDataType[];
}