import {
  arrayRemove,
  arrayUnion,
  collection,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../Config/Config";
import { getDocs, doc, getDoc } from "@firebase/firestore";
import { propType } from "../Screens/Home/InterfaceHome";
import { infoDataType, propType1 } from "../Components/Interfaces";

interface userDataType {
  cardData: [];
  wishlist: [];
  orderDetail: [];
}

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
  const docRef = doc(db, "Cart", `${localStorage.getItem("email")}`);
  const value = await getDoc(docRef);
  const cardData = value.data() as userDataType;
  return cardData.cardData;
};

export const fetchWishListValue = async () => {
  const docRef = doc(db, "Cart", `${localStorage.getItem("email")}`);
  const value = await getDoc(docRef);
  const cardData = value.data() as userDataType;
  return cardData.wishlist;
};

export const uplodeCart = async (userCart: propType[]) => {
  try {
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    await updateDoc(usersub, {
      cardData: arrayUnion(...userCart),
    });
  } catch (error) {
    throw error;
  }
};
export const removeCart = async (userCart: propType[]) => {
  try {
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    await updateDoc(usersub, {
      cardData: arrayRemove(...userCart),
    });
  } catch (error) {
    throw error;
  }
};

export const emptyCart = async () => {
  try {
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    await updateDoc(usersub, {
      cardData: [],
    });
  } catch (error) {
    throw error;
  }
};


export const uplodeWishList = async (wishListData: infoDataType[]) => {
  try {
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    await updateDoc(usersub, {
      wishlist: arrayUnion(...wishListData),
    });
  } catch (error) {
    throw error;
  }
};

export const removeWishListData = async (wishListData: infoDataType[]) => {
  try {
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    await updateDoc(usersub, {
      wishlist: arrayRemove(...wishListData),
    });
  } catch (error) {
    throw error;
  }
};

export const fetchOrderSummary = async () => {
  try {
    const docRef = collection(
      doc(db, "Cart", `${localStorage.getItem("email")}`),
      "orderDetail"
    );
    const querySnapshot = await getDocs(docRef);
    const data = querySnapshot.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    throw error;
  }
};
