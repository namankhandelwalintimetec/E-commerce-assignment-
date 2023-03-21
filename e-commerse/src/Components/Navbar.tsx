import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { NavStyle } from "./NavbarStyle";
import { LinkAddresh } from "./Constant";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <>
      <NavStyle className="navbar">
        <Link to="/" className="logo">
          Shopfy
        </Link>
        <input className="search" placeholder="Search" />
        <button className="serch-button" type="submit">
          <FaSearch />
        </button>
        <ul
          className={mobileNavbar ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobileNavbar(false)}
        >
          {LinkAddresh.map((item) => (
            <Link to={item.to}>
              <li className="li">{item.item}</li>
            </Link>
          ))}
          <li>
            <Link to="/Login">
              <BiLogInCircle size={"1.3em"} />
            </Link>
          </li>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setMobileNavbar(!mobileNavbar)}
        >
          <ImCross />
        </button>
      </NavStyle>
    </>
  );
};
export default Navbar;
