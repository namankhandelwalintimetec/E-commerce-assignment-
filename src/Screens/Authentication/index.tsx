import { useState } from "react";
import SingUp from "../../Components/SingUp/SingUp";
import Login from "../../Components/LogIn/Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Redux/Action/Action";
import { auth } from "../../Config/Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Notification from "../../Components/NotificationPopUp";

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

  const setUserCredential = (name: string, email: string, password: string) => {
    setUserInfo((prev) => ({
      ...prev,
      name: name,
      email: email,
      password: password,
    }));
  };

  const userSignIn = async () => {
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
      showPopUp("success", "Sign In SuccessFully", "success", "show");
    } catch (error) {
      setErrorMessage("write valid inputs");
      showPopUp("success", errorMessage, "error", "show");
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
      localStorage.setItem("Password", userInfo.password);
      dispatch(setEmail(userInfo.email));
      showPopUp("success", "Logn In SuccessFully", "success", "show");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      showPopUp("success", errorMessage, "error", "show");
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
      />
      <div className="main-div">
        <div className="main" data-testid="wishCard">
          <div className={toggleButton === "Sing up" ? "toggle" : "togglenot"}>
            <SingUp
              setUserCredential={setUserCredential}
              error={errorMessage}
              handelAuthentication={userSignIn}
              toggle={toggleButton}
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
