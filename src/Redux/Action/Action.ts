import { infoDataType } from "../../Components/Interfaces";
import { propType, propType1 } from "../Reducer/UserCart";

export const logIn = () => {
  return { type: "LogIn" };
};
export const logOut = () => {
  return { type: "LogOut" };
};

export const setEmail = (email: string) => {
  return { type: "SetEmail", payload: email };
};

export const reset = (email: string) => {
  return { type: "Reset", payload: "" };
};

export const setText = (value: string) => {
  return { type: "SetText", payload: value };
};

export const setProductType = (value: string) => {
  return { type: "SetCategory", payload: value };
};

export const setProductData = (value: infoDataType[]) => {
  return { type: "setcarddata", payload: value };
};

export const setSingleProductData = (values: infoDataType) => {
  return { type: "setcart", payload: values };
};

export const setUserCart = (value: propType) => {
  return {
    type: "SetUserCart",
    payload: value,
  };
};

export const setWishlist = (value: infoDataType) => {
  return {
    type: "SetWishlist",
    payload: value,
  };
};

export const removeWish = (value: number) => {
  return {
    type: "removeWishlist",
    payload: value,
  };
};

export const removeCartItem = (value: propType1) => {
  return {
    type: "removeUserCart",
    payload: value,
  };
};

export const increseCartValue = (value: number) => {
  return {
    type: "increaseValue",
    payload: value,
  };
};

export const decreseCartValue = (value: number) => {
  return {
    type: "decreaseValue",
    payload: value,
  };
};

export const cartUpdate = (value: propType) => {
  return {
    type: "updateCart",
    payload: value,
  };
};

export const resetCartValue = () => {
  return {
    type: "Reset Cart",
  };
};
