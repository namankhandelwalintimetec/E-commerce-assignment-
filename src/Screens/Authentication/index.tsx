import React, { useState } from "react";
import SingUp from "./Components/SingUp";
import Login from "./Components/Login";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogIn } from "../../Redux/Action/Action";
import { setEmail } from "../../Redux/Action/Action";
import { auth } from "../../Services/Firebase/Firebaseconfiguration";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Authentication = () => {
  const userEmail:string = useSelector((state: any) => state.userEmail);
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState("Sing up");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passward: "",
  });
  
  const setUser = (name: string, email: string, passward: string) => {
    setUserInfo((prev) => ({
      ...prev,
      name: name,
      email: email,
      passward: passward,
    }));
  };

  const handelSignIn = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.passward) {
      setErrorMessage("Fill all fields");
      return;
    }
    setErrorMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.passward
      );
      const user = userCredential.user;
      //console.log(user);
      changeoption();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    if (!userInfo.email || !userInfo.passward) {
      setErrorMessage("Fill all fields");
      return;
    }
    setErrorMessage("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.passward
      );
      const user = userCredential.user;
      //console.log(user.email);
      localStorage.setItem("email", userInfo.email);
      localStorage.setItem("Password", userInfo.passward);
      dispatch(setEmail(userInfo.email));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const changeoption = () => {
    if (toggle === "Sing up") setToggle("log in");
    else if (toggle === "log in") setToggle("Sing up");
    console.log(localStorage.getItem("email"));
  };

  return (
    <>
      <div className="main-div">
        <div className="main">
          <div className={toggle === "Sing up" ? "toggle" : "togglenot"}>
            <SingUp
              setUser={setUser}
              error={errorMessage}
              handelAuthentication={handelSignIn}
              toggle={toggle}
            />
          </div>
          <div className={toggle === "log in" ? "toggle" : "togglenot"}>
            <Login
              setUser={setUser}
              toggle={toggle}
              handleLogIn={handleLogIn}
              errorMessage={errorMessage}
            />
          </div>
          <div className="circular">
            <p onClick={changeoption} className="toggle-text">
              {toggle === "log in" ? "Sign up" : "Log In"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
