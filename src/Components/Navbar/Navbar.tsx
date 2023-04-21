import { useState } from "react";
import { Link } from "react-router-dom";
import { NavStyle } from "./NavbarStyle";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { auth } from "../../Config/Config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProductType, setText } from "../../Redux/Action/Action";
import { StateTypeNavbar } from "./NavbarInterface";
import Notification from "../Notification";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const userWishList = useSelector(
    (state: StateTypeNavbar) => state.userWishlist
  );
   const userCartDetails = useSelector(
     (state: StateTypeNavbar) => state.userCart
   );
  const userEmail = useSelector((state: StateTypeNavbar) => state.userEmail);
  const [popUpNotification, setPopUpNotification] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });

  const history = useNavigate();
  const dispatch = useDispatch();
  const showPopUp = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUpNotification({
      title: title,
      message: message,
      type: type,
      class: classValue,
    });
    setTimeout(() => {
      setPopUpNotification({
        title: title,
        message: message,
        type: type,
        class: "hide",
      });
    }, 1000);
  };

  const navigateCategory = (value: string) => {
    dispatch(setProductType(value));
    navigate(`/product/${value}`);
  };

  const eraseLocalStorage = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("passward");
  };

  const handleLogout = async () => {
    eraseLocalStorage();
    auth.signOut().then(() => {
      history("/login");
    });
  };

  const setSerchTextvalue = () => {
    dispatch(setText(searchItem));
    setSearchItem("");
  };

  return (
    <>
      <Notification
        title={popUpNotification.title}
        message={popUpNotification.message}
        type={popUpNotification.type}
        classValue={popUpNotification.class}
        data-testid="notify"
      />
      <NavStyle data-testid="Navbar">
        <Link to="/" className="logo" data-testid="logoNav">
          Sopshy
        </Link>
        <ul className="list-bar">
          <li className="list-inside">
            <p
              onClick={() => {
                dispatch(setProductType(""));
                navigate("/");
              }}
              data-testid="homeNavigation"
            >
              All
            </p>
          </li>
          <li
            className="li"
            onClick={() => {
              navigateCategory("men");
            }}
            data-testid="menProductNavigation"
          >
            Men
          </li>
          <li
            className="li"
            onClick={() => {
              navigateCategory("female");
            }}
            data-testid="femaleProductNavigation"
          >
            Women
          </li>
          <li
            className="li"
            onClick={() => {
              navigateCategory("electronic");
            }}
            data-testid="electronicProductNavigation"
          >
            Electronic
          </li>
        </ul>
        <input
          data-testid="search"
          className="search"
          placeholder="Search Your Products"
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          value={searchItem}
        />
        <p
          className="serch-icon"
          onClick={setSerchTextvalue}
          data-testid="search-value"
        >
          <FaSearch />
        </p>

        <ul className="profile-list">
          <li className="profile-inside">
            <Link to="/login" onClick={handleLogout}>
              <BiLogInCircle
                size={"1.3em"}
                className={
                  localStorage.getItem("email") ? "hide" : "show color"
                }
                data-testid="login"
              />

              <BiUserCircle
                size={"1.3em"}
                className={
                  localStorage.getItem("email") ? "show color" : "hide "
                }
                data-testid="logout"
              />
            </Link>
          </li>
          <p className="hide" data-testid="hover">
            {localStorage.getItem("email")}
          </p>
          <li className="profile-inside">
            <Link to="/wishlist">
              <span
                className="material-symbols-outlined color"
                data-testid="wishlistNav"
                onClick={() => navigateCategory("Wishlist")}
              >
                favorite
              </span>
              <span className="numberfav">
                {localStorage.getItem('email') ? userWishList.length : ""}
              </span>
            </Link>
          </li>

          <li className="profile-inside">
            <Link to="/Cart">
              <span
                className="material-symbols-outlined color"
                data-testid="CartNav"
                onClick={() => navigateCategory("cart")}
              >
                shopping_cart
              </span>
              <span className="card-count">
                {localStorage.getItem("email") ? userCartDetails.length : " "}
              </span>
            </Link>
          </li>
        </ul>

        <ul className="dropdown">
          <li className="text" data-testid="dropdown">
            <BiUserCircle size={"1.3em"} className="show" />
          </li>
          <div className="dropdown-content" data-testid="dropdownContent">
            <li className="list-inside">
              <p
                onClick={() => {
                  navigate("/");
                }}
                data-testid="allDrop"
              >
                All
              </p>
            </li>
            <li
              className="li"
              onClick={() => {
                navigateCategory("men");
              }}
              data-testid="mendrop"
            >
              Men
            </li>
            <li
              className="li"
              onClick={() => {
                navigateCategory("female");
              }}
              data-testid="femaleDrop"
            >
              Women
            </li>
            <li
              className="li"
              onClick={() => {
                navigateCategory("electronic");
              }}
              data-testid="electronicDrop"
            >
              Electronic
            </li>

            <li className="profile-inside">
              <Link to="/login" onClick={handleLogout}>
                <BiLogInCircle
                  size={"1.3em"}
                  className={
                    localStorage.getItem("email") ? "hide" : "show color"
                  }
                />

                <BiUserCircle
                  size={"1.3em"}
                  className={
                    localStorage.getItem("email") ? "show color" : "hide "
                  }
                />
              </Link>
            </li>
            <li className="profile-inside">
              <Link to="/wishlist">
                <span className="material-symbols-outlined color">
                  favorite
                </span>
              </Link>
            </li>

            <li className="profile-inside">
              <Link to="/Cart">
                <span className="material-symbols-outlined color">
                  shopping_cart
                </span>
                <span className="number">
                  {userCartDetails.length ? userCartDetails.length : ""}
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </NavStyle>
    </>
  );
};
export default Navbar;
