import changeState from "./userState";
import { combineReducers } from "@reduxjs/toolkit";
import userEmail from "./userEmail";
import SerchText from "./SerchText";
import setCategory from './setCate';
import CardData from './CartData';
import SingleProductDetail from './SingleProductDetail';
import userCart from './UserCart';
import userWishlist from "./userWishlist";

const rootReducer = combineReducers({userEmail, SerchText, setCategory, CardData, SingleProductDetail, userCart, userWishlist });
export default rootReducer;
