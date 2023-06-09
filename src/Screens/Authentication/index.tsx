import { useState } from "react";
import SingUp from "../../Components/SingUp/SingUp";
import Login from "../../Components/LogIn/Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail, setUserCart, setWishlist } from "../../Redux/Action/Action";
import { auth, db } from "../../Config/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Notification from "../../Components/Notification";
import { infoDataType, propType } from "../Home/InterfaceHome";
import {
  fetchCartDataValue,
  fetchWishListValue,
} from "../../Services/ServicesLayer";
import { doc, setDoc } from "@firebase/firestore";

const Authentication = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleButton, setToggleButton] = useState("Sing up");
  const [popUp, setPopUp] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const createUserCollection = async (email: string) => {
    try {
      const usersub = doc(db, "Cart", `${email}`);
      await setDoc(usersub, {
        wishlist: [],
        cardData: [],
        orderDetail: [],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setUserCredential = (name: string, email: string, password: string) => {
    setUserInfo((prev) => ({
      ...prev,
      name: name,
      email: email,
      password: password,
    }));
  };
  const fetchCartData = async () => {
    const cartData = await fetchCartDataValue();
    if (cartData !== undefined) {
      cartData.map((item: any) => {
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

  const userSignUp = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.password) {
      setErrorMessage("Fill all fields");
      showPopUp("warning", "Fill all fields", "warning", "show");
      return;
    }
    setErrorMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      changeOption();
      createUserCollection(userInfo.email);
      showPopUp("success", "Sign In SuccessFully", "success", "show");
    } catch (error: any) {
      setErrorMessage(error.message);
      showPopUp("warning", error, "error", "show");
    }
  };

  const userLogIn = async () => {
    if (!userInfo.email || !userInfo.password) {
      setErrorMessage("Fill all fields");
      showPopUp("warning", "Fill all fields", "warning", "show");
      return;
    }
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("Name", userInfo.name);
      dispatch(setEmail(userInfo.email));
      showPopUp("success", "Logn In SuccessFully", "success", "show");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      fetchCartData();
      fetchWishList();
    } catch (error: any) {
      showPopUp("success", error.message, "error", "show");
    }
  };

  const changeOption = () => {
    if (toggleButton === "Sing up") setToggleButton("log in");
    else if (toggleButton === "log in") setToggleButton("Sing up");
  };

  const showPopUp = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUp({
      title: title,
      message: message,
      type: type,
      class: classValue,
    });
    setTimeout(() => {
      setPopUp({
        title: title,
        message: message,
        type: type,
        class: "hide",
      });
    }, 1000);
  };

  return (
    <>
      <Notification
        title={popUp.title}
        message={popUp.message}
        type={popUp.type}
        classValue={popUp.class}
        data-testid="notify"
      />
      <div className="main-div">
        <div className="main" data-testid="wishCard">
          <div className={toggleButton === "Sing up" ? "toggle" : "togglenot"}>
            <SingUp
              setUserCredential={setUserCredential}
              handelAuthentication={userSignUp}
            />
          </div>
          <div className={toggleButton === "log in" ? "toggle" : "togglenot"}>
            <Login
              data-testid="Login"
              setUserCredential={setUserCredential}
              toggle={toggleButton}
              handleLogIn={userLogIn}
              errorMessage={errorMessage}
            />
          </div>
          <div className="circular">
            <div
              onClick={changeOption}
              className="toggle-text"
              data-testid="toggle-text"
            >
              {toggleButton === "log in" ? "Sign up" : "Log In"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
