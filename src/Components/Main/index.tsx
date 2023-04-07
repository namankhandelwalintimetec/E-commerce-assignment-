import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "../../Screens/Authentication";
import Home from "../../Screens/Home";
import { GlobalStyle } from "../../GlobalStyle";
import ShopCart from "../../Screens/Cart";
import ProductPage from "../../Screens/ProductPage";
import ProductCategoryPage from "../../Screens/ProductCatePage";
import { useDispatch, useSelector } from "react-redux";
import Wishlist from "../../Screens/WishList";
import { useState, useEffect } from "react";
import { setProductData, setWishlist } from "../../Redux/Action/Action";
import { setUserCart } from "../../Redux/Action/Action";
import { propType, infoDataType } from "./InterfaceMain";
import { ThemeProvider } from "styled-components";
import CheckOut from "../../Screens/CheckOutPage";
import Navbar from "../Navbar/Navbar";
import OrderFail from "../../Screens/OrderFail";
import OrderPlace from "../../Screens/OrderPlace";
import {
  fetchCartDataValue,
  fetchData,
  fetchWishListValue,
} from "../../Services/ServicesLayer";
import { theme } from "../../Theame";

const Main = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const productData = await fetchData();
    if (productData !== undefined) {
      productData.map((item) => {
        const data = item as infoDataType;
        setProductDetail((arr) => [...arr, data]);
      });
    }
  };

  const fetchCartData = async () => {
    const cartData = await fetchCartDataValue();
    if (cartData !== undefined) {
      cartData.map((item) => {
        const data = item as propType;
        dispatch(setUserCart(data));
      });
    }
  };

  const fetchWishList = async () => {
    const cartData = await fetchWishListValue();
    if (cartData !== undefined) {
      cartData.map((item) => {
        const data = item as infoDataType;
        dispatch(setWishlist(data));
      });
    }
  };

  setTimeout(() => {
    dispatch(setProductData(productDetail));
  }, 5000);

  window.addEventListener("load", () => {
    setProductDetail([]);
    fetchProductData();
    if (localStorage.getItem("email") != null) {
      fetchWishList();
      fetchCartData();
    }
  });

  useEffect(() => {
    fetchCartData();
    if (localStorage.getItem("email") != null) {
      fetchWishList();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/product/:cate" element={<ProductCategoryPage />} />
          <Route path="/Cart" element={<ShopCart />} />
          <Route path="/product/:cate/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/order/placed" element={<OrderPlace />} />
          <Route path="/order/fail" element={<OrderFail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Main;
