import { collection, setDoc } from "@firebase/firestore";
import { db } from "../Config/Config";
import { getDocs, doc } from "@firebase/firestore";
import { propType } from "../Screens/Home/InterfaceHome";

export const fetchData = async () => {
	try {
		const dataSet = collection(db, "product");
		const query = await getDocs(dataSet);
		const data = query.docs.map((doc) => doc.data());
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchCartDataValue = async () => {
	try {
		const dataSet = collection(
			doc(db, "Cart", `${localStorage.getItem("email")}`),
			"CartProduct"
		);
		const querySnapshot = await getDocs(dataSet);
		const data = querySnapshot.docs.map((doc) => doc.data());
		return data;
	} catch (error) {
		throw error;
	}
};

export const fetchWishListValue = async () => {
	try {
		const dataSet = collection(
			doc(db, "Cart", `${localStorage.getItem("email")}`),
			"Wishlist"
		);
		const querySnapshot = await getDocs(dataSet);
		const data = querySnapshot.docs.map((doc) => doc.data());
		return data;
	} catch (error) {
		throw error;
	}
};

export const uplodeCartDataValue = async (item: propType) => {
	const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
	const postco = collection(usersub, "CartProduct");
	const newDoc = doc(postco);
	await setDoc(newDoc, {
		idValue: item.idValue,
		Name: item.Name,
		image: item.image,
		rating: item.rating,
		price: item.price,
		qua: item.qua,
	});
};

export const uplodeWishListDataValue = async (item: propType) => {
	const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
	const postco = collection(usersub, "wishList");
	const newDoc = doc(postco);
	await setDoc(newDoc, {
		id: item.idValue,
		Name: item.Name,
		image: item.image,
		rating: item.rating,
		price: item.price,
		qua: item.qua,
	});
};
