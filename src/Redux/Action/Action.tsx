import { infoDataType } from "../../Screens/Home";
import { propType, propType1 } from "../Reducer/UserCart";

export const LogIn = () => {
  return { type: "LogIn"  };
};
export const LogOut = () => {
  return { type: "LogOut" };
};

export const logout = (value: number) => {
  return { type: "LogOut", payload: value };
};

export const setEmail = (email: string) => {
  return { type: "SetEmail", payload: email };
};

export const reset = (email: string) => {
  return { type: "Reset", payload:"" };
};


export const setText = (value:string)=>{
  return {type:"SetText", payload:value};
}

export const setProductType=(value:string)=>{
  return { type: "SetCategory", payload:value };
}

export const setProductData=(value:infoDataType[])=>{
  return { type: "setcarddata" , payload:value };
}

export const setSingleProductData=(values:infoDataType)=>{
  return { type: "setcart", payload: values };
}

export const SetUserCart=(value:propType)=>{
    return {
      type: "SetUserCart",
      payload: value,
    };
}

export const SetWishlist=(value:infoDataType)=>{
  return {
    type: "SetWishlist",
    payload: value
  };
}

export const removeCartItem=(value:propType1)=>{
  return {
    type: "removeUserCart",
    payload:value
  };
}