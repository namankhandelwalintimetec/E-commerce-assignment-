import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Screens/Authentication";
import Home from "./Screens/Home/index";
import { GlobalStyle } from "./GlobalStyle";
import { AddProducts } from "./Screens/Addproduct";
import ShopCart from "../src/Screens/Cart/index";
import ProductPage from "./Screens/ProductPage";
import Allproductdtl from "./Allphile";
import { useDispatch, useSelector } from "react-redux";
import Wishlist from "./Screens/WishList";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./Services/Firebase/Firebaseconfiguration";
import { infoDataType } from "./Screens/Home/index";
import { useState, useEffect } from "react";
import { setProductData } from "./Redux/Action/Action";
import { SetUserCart } from "./Redux/Action/Action";
import { propType } from "./Redux/Reducer/UserCart";
import { doc } from "@firebase/firestore";

const App = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
  const productdata = useSelector((state: any) => state.CardData);
  const userEmail = useSelector((state: any) => state.userEmail);
  const userCart = useSelector((state: any) => state.userCart);
  const [loding, setloading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setProductDetail([]);
    try {
      const dataSet = collection(db, "product");
      const query = await getDocs(dataSet);
      const temp = query.forEach((doc) => {
        const data = doc.data() as infoDataType;
        setProductDetail((arr) => [...arr, data]);
      });
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCartData = async () => {
    try {
      const dataSet = collection(
        doc(db, "Cart", `${userEmail}`),
        "CartProduct"
      );
      const querySnapshot = await getDocs(dataSet);
      querySnapshot.forEach((doc) => {
        const data = doc.data() as propType;
        dispatch(SetUserCart(data));
      });
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    dispatch(setProductData(productDetail));
    // dispatch()
  }, 5000);

  window.addEventListener("load", () => {
    setProductDetail([]);
    fetchData();
    fetchCartData();
  });

  // useEffect(() => {
  //   setProductDetail([]);
  //   fetchData();
  // },[1]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/addproduct" element={<AddProducts />} />
        <Route path="/shope/:cate" element={<Allproductdtl />} />
        <Route path="/Cart" element={<ShopCart />} />
        <Route path="/product/:cate/:id" element={<ProductPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
