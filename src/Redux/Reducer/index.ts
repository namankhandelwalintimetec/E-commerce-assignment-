import { combineReducers } from "@reduxjs/toolkit";
import userEmail from "./UserEmail";
import SerchText from "./SerchText";
import setCategory from './SetCate';
import CardData from './CartData';
import SingleProductDetail from './SingleProductDetail';
import userCart from './UserCart';
import userWishlist from "./UserWishlistReducer";
import CardValue from './CartValue';
import Discount from "./Discount";
const rootReducer = combineReducers({ userEmail, SerchText, setCategory, CardData, SingleProductDetail, userCart, userWishlist, CardValue, Discount });
export default rootReducer;
 