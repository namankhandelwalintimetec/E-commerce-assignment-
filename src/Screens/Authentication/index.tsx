import { useState } from "react";
import SingUp from "../../Components/SingUp/SingUp";
import Login from "../../Components/LogIn/Login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Redux/Action/Action";
import { auth } from "../../Config/Firebaseconfiguration";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Authentication = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleButton, setToggleButton] = useState("Sing up");
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
    } catch (error) {
      setErrorMessage("write valid inputs");
    }
  };

  const userLogIn = async () => {
    if (!userInfo.email || !userInfo.password) {
      setErrorMessage("Fill all fields");
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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const changeOption = () => {
    if (toggleButton === "Sing up") setToggleButton("log in");
    else if (toggleButton === "log in") setToggleButton("Sing up");
  };

  return (
    <>
      <div className="main-div">
        <div className="main">
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
            <p onClick={changeOption} className="toggle-text">
              {toggleButton === "log in" ? "Sign up" : "Log In"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
