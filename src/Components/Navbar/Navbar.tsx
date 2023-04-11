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
import { propType } from "../../Redux/Reducer/UserCart";
import {
  uplodeCartDataValue,
  uplodeWishListDataValue,
} from "../../Services/ServicesLayer";
import { StateTypeNavbar } from "./NavbarInterface";

const Navbar = () => {
  const navigate = useNavigate();
  const [serchItem, setSetchItem] = useState("");
  const userCard = useSelector((state: StateTypeNavbar) => state.userCart);
  const userWishlist = useSelector(
    (state: StateTypeNavbar) => state.userWishlist
  );
  const userEmail = useSelector((state: StateTypeNavbar) => state.userEmail);
  const history = useNavigate();
  const dispatch = useDispatch();

  const navigateCate = (value: string) => {
    navigate(`/product/${value}`);
  };

  const uplodeCartData = async (item: propType) => {
    uplodeCartDataValue(item);
  };

  const uplodeWishListData = async (item: propType) => {
    uplodeWishListDataValue(item);
  };

  const uplodeData = () => {
    userCard.map((item) => {
      uplodeCartData(item);
    });
    userWishlist.map((item: propType) => {
      uplodeWishListData(item);
    });
  };

  const eraseLocalStorage = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("passward");
  };

  const handleLogout = async () => {
    uplodeData();
    auth.signOut().then(() => {
      history("/login");
    });
    eraseLocalStorage();
  };

  const setSerchTextvalue = () => {
    dispatch(setText(serchItem));
  };

  return (
    <>
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
              dispatch(setProductType("men"));
              navigateCate("men");
            }}
            data-testid="menProductNavigation"
          >
            Men
          </li>
          <li
            className="li"
            onClick={() => {
              dispatch(setProductType("female"));
              navigateCate("female");
            }}
            data-testid="femaleProductNavigation"
          >
            Women
          </li>
          <li
            className="li"
            onClick={() => {
              dispatch(setProductType("electronic"));
              navigateCate("electronic");
            }}
            data-testid="electronicProductNavigation"
          >
            Electronic
          </li>
        </ul>
        <input
          className="search"
          placeholder="Search Your Products"
          onChange={(e) => {
            setSetchItem(e.target.value);
          }}
          value={serchItem}
        />
        <p className="serch-icon" onClick={setSerchTextvalue}>
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
                data-testid="loginButton"
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
              <span
                className="material-symbols-outlined color"
                data-testid="wishlistNav"
              >
                favorite
              </span>
            </Link>
          </li>

          <li className="profile-inside">
            <Link to="/Cart">
              <span
                className="material-symbols-outlined color"
                data-testid="CartNav"
              >
                shopping_cart
              </span>
              <span className="number">
                {userCard.length ? userCard.length : ""}
              </span>
            </Link>
          </li>
        </ul>
        <ul className="dropdown">
          <li className="text">
            <BiUserCircle
              size={"1.3em"}
              className={localStorage.getItem("email") ? "show color" : "hide "}
            />
          </li>
          <div className="dropdown-content">
            <li className="list-inside">
              <p
                onClick={() => {
                  dispatch(setProductType(""));
                  navigate("/");
                }}
              >
                All
              </p>
            </li>
            <li
              className="li"
              onClick={() => {
                dispatch(setProductType("men"));
                navigateCate("men");
              }}
            >
              Men
            </li>
            <li
              className="li"
              onClick={() => {
                dispatch(setProductType("female"));
                navigateCate("female");
              }}
            >
              Women
            </li>
            <li
              className="li"
              onClick={() => {
                dispatch(setProductType("electronic"));
                navigateCate("electronic");
              }}
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
                  {userCard.length ? userCard.length : ""}
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
