import React, { useState } from "react";
import "../../App.css";
import SingUp from "./Components/SingUp";
import Login from "./Components/Login";
const apiKey = "AIzaSyCyrK3FDGyU79QA57n-MlyR__BJQr7oSLs";

const Authentication = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passward: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [toggle, setToggle] = useState("Sing up");

  const setUser = (name: string, email: string, passward: string) => {
    setUserInfo((prev) => ({
      ...prev,
      name: name,
      email: email,
      passward: passward,
    }));
  };

  const handelAuthentication = async () => {
    if (!userInfo.name || !userInfo.email || !userInfo.passward) {
      setErrorMessage("Fill all fields");
      return;
    }
    setErrorMessage("");
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email,
            password: userInfo.passward,
            displayName: userInfo.name,
            returnSecureToken: true,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
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
    console.log(userInfo);
    try {
      const apiKey = "AIzaSyCyrK3FDGyU79QA57n-MlyR__BJQr7oSLs";
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userInfo.email,
            password: userInfo.passward,
            displayName: userInfo.name,
            returnSecureToken: true,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const changeoption = () => {
    if (toggle === "Sing up") setToggle("log in");
    else if (toggle === "log in") setToggle("Sing up");
  };

  return (
    <>
      <div className="main-div">
        <div className="main">
          <div className={toggle === "Sing up" ? "toggle" : "togglenot"}>
            <SingUp
              setUser={setUser}
              error={errorMessage}
              handelAuthentication={handelAuthentication}
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
