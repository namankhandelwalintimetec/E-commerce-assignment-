import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "../Authentication";
import Home from "../Home";
import { GlobalStyle } from "../../GlobalStyle";
import ShopCart from "../Cart";
import ProductPage from "../ProductPage";
import ProductCategoryPage from "../ProductCatePage";
import { useDispatch, useSelector } from "react-redux";
import Wishlist from "../WishList";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import { infoDataType } from "../Home";
import { useState, useEffect } from "react";
import { setProductData, setWishlist } from "../../Redux/Action/Action";
import { setUserCart } from "../../Redux/Action/Action";
import { propType } from "../../Components/Interfaces";
import { doc } from "@firebase/firestore";
import { ThemeProvider } from "styled-components";
import CheckOut from "../CheckOutPage";
import Navbar from "../../Components/Navbar/Navbar";
import OrderFail from "../OrderFail";
import OrderPlace from "../OrderPlace";
import userWishlist from "../../Redux/Reducer/UserWishlistReducer";
import { fetchData } from "../../Services/ServicesLayer";

const Main = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
  const userWishlist = useSelector((state: any) => state.userWishlist);
  const cartData = useSelector((state: any) => state.CardData);
  const dispatch = useDispatch();
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      Nav: "#7e78c0",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    },
  };

  const setvalue=(a:infoDataType)=>{
     setProductDetail((arr) => [...arr, a]);
     console.log(productDetail);
  }
 
  const fetchProductData = async () => {
    const Value=await fetchData();
    console.log(Value);
   
    if (Value !== undefined){
       Value.map((item)=>{
        const data=item as infoDataType
        setProductDetail((arr) => [...arr, data]);
       })
    }

    // try {
    //   const dataSet = collection(db, "product");
    //   const query = await getDocs(dataSet);
    //   const temp = query.forEach((doc) => {
    //     const data = doc.data() as infoDataType;
    //     setProductDetail((arr) => [...arr, data]);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  console.log(productDetail)

  const fetchCartData = async () => {
    try {
      const dataSet = collection(
        doc(db, "Cart", `${localStorage.getItem("email")}`),
        "CartProduct"
      );
      const querySnapshot = await getDocs(dataSet);
      querySnapshot.forEach((doc) => {
        const data = doc.data() as propType;
        dispatch(setUserCart(data));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWishList = async () => {
    try {
      const dataSet = collection(
        doc(db, "Cart", `${localStorage.getItem("email")}`),
        "Wishlist"
      );
      const querySnapshot = await getDocs(dataSet);
      querySnapshot.forEach((doc) => {
        const data = doc.data() as infoDataType;
        dispatch(setWishlist(data));
      });
    } catch (error) {
      console.log(error);
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
