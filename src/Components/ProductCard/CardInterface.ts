export interface productDataType {
	id: string;
	Name: string;
	cate: string;
	dec: string;
	image: string;
	price: string;
	rating: string;
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

export interface StateType {
	cardData: productDataType[];
	userWishlist: infoDataType[];
}