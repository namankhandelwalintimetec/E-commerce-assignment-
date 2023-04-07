
export interface SpinnerProps {
	time: boolean;
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
export interface cartDataActionType {
	type: string;
	payload: infoDataType[];
}

export interface cartValueActionType {
	type: string;
	payload: number;
}

export interface serchTextActionType {
	type: string;
	payload: string;
}

export interface singleProductDataActionType {
	type: string;
	payload: infoDataType;
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
export interface propType1 {
	id: string;
	Name: string;
	image: string;
	price: string;
	rating: string;
	desc: string;
	qua: string;
}

export interface setUser {
	type: "SetUserCart";
	payload: propType;
}

export interface updateCart {
	type: "updateCart";
	payload: propType;
}

export interface removeUser {
	type: "removeUserCart";
	payload: propType1;
}

export interface setWishList {
	type: string;
	payload: infoDataType;
}

export interface removeWishList {
	type: string;
	payload: any;
}

export interface SpinnerProps {
	time: boolean;
}
