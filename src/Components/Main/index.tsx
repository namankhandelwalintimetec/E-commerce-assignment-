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
import { increseCartValue } from "../../Redux/Action/Action";
import {
  fetchCartDataValue,
  fetchData,
  fetchWishListValue,
  uplodeCart,
  uplodeWishList,
} from "../../Services/ServicesLayer";
import { theme } from "../../Theame";
import { StateTypeCartPage } from "../../Screens/Cart/InterfaceCart";
import EmptyWishListPage from "../EmptyWishList/EmptyWishList";
import EmptyCartPage from "../EmptyCart/EmptyCartPage";
import OrderSummry from "../../Screens/OrderSummaryPage/index";
import { MainCardStateType } from "./MainCardInterface";
import { PageNotFoundTag } from "../../Screens/PageNotFound/Style";
import PageNotFound from "../../Screens/PageNotFound";

const Main = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([
    {
      id: "",
      Name: "",
      cate: "",
      dec: "",
      image: "",
      price: "",
      rating: "",
    },
  ]);
  const userWishlist = useSelector(
    (state: MainCardStateType) => state.userWishlist
  );
  const userCart = useSelector((state: MainCardStateType) => state.userCart);
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const productData = await fetchData();
    if (productData !== undefined) {
      productData.map((item) => {
        const data = item as infoDataType;
        dispatch(setProductData(data));
        setProductDetail((arr) => [...arr, data]);
      });
    }
  };

  useEffect(() => {
    uplodeCart(userCart);
  }, [userCart]);

  useEffect(() => {
    uplodeWishList(userWishlist);
  }, [userWishlist]);

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

  window.addEventListener("load", () => {
    fetchProductData();
    if (localStorage.getItem("email") != null) {
      fetchWishList();
      fetchCartData();
    }
  });

  window.addEventListener("load", () => {
    userCart.map((item: propType) => {
      dispatch(increseCartValue(Number(item.price) * Number(item.qua)));
    });
  });

  useEffect(() => {
    fetchProductData();
    if (localStorage.getItem("email") != null) {
      fetchWishList();
      fetchCartData();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <Routes data-testid="router">
          <Route path="/" data-testid="router" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/product/:cate" element={<ProductCategoryPage />} />
          <Route path="/Cart" element={<ShopCart />} />
          <Route path="/product/:cate/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/order/placed" element={<OrderPlace />} />
          <Route path="/order/fail" element={<OrderFail />} />
          <Route path="/EmptyWishlist" element={<EmptyWishListPage />} />
          <Route path="/EmptyCart" element={<EmptyCartPage />} />  
          <Route path="/orderSummary" element={<OrderSummry />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Main;
