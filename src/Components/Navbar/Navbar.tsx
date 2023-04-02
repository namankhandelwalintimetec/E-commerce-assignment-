import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { NavStyle } from "./NavbarStyle";
import { LinkAddresh } from "../Constant";
import { FaSearch } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { auth } from "../../Services/Firebase/Firebaseconfiguration";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { LogOut, setText } from "../../Redux/Action/Action";
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import { infoDataType } from "../../Screens/Home/index";
import { addDoc } from "@firebase/firestore";
import userWishlist from '../../Redux/Reducer/userWishlist';
import { Item } from '../../Screens/Authentication/Components/style';
import { propType } from "../../Redux/Reducer/UserCart";

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [cartDetail, setcartDetail] = useState<infoDataType[]>([]);
  const [serchItem, setSetchItem] = useState("");
  const userState = useSelector((state: any) => state.changeState);
  const userCard: propType[] = useSelector((state: any) => state.userCart);
  const userWishlist = useSelector((state:any)=> state.userWishlist);
  const userEmail = useSelector(
    (state: any) => state.userEmail
  );
  const SerchText = useSelector((state: any) => state.SerchText);
  const dispatch = useDispatch();
  const history = useNavigate();
  

  // const fetchData = async () => {
  //   setcartDetail([]);
  //   try {
  //     const moviesCollectionRef = collection(
  //       doc(db, "Cart", `${localStorage.getItem('email')}`),
  //       "CartProduct"
  //     );
  //     const querySnapshot = await getDocs(moviesCollectionRef);
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data() as infoDataType;
  //       setcartDetail((arr) => [...arr, data]);
  //       console.warn(data);
  //     });
  //   } catch (error) {
  //     console.log(error + "----");
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetch =async (item: propType) => {
    const user = collection(db, "Cart");
    const usersub = doc(db, "Cart", `${userEmail}`);
    const postco=collection(usersub,"CartProduct");
    const newDoc = doc(postco);
    await setDoc(newDoc, {
      id: item.idValue,
      Name: item.Name,
      image: item.image,
      rating: item.rating,
      price: item.price,
    });
  };

  const pushWishList=async(item:infoDataType)=>{
    const user = collection(db, "Cart");
    const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
    const postco = collection(usersub, "wishList");
    const newDoc = doc(postco);
    await setDoc(newDoc, {
      id: item.id,
      Name: item.Name,
      image: item.image,
      rating: item.rating,
      price: item.price,
    });

  }

  const handleLogout = async () => {
    userCard.map((item) => {
      // console.log(item);
      fetch(item);
    });

    // userWishlist.map((item:infoDataType)=>{
    //   pushWishList(item);
    // })

    auth.signOut().then(() => {
      history("/login");
    });
    dispatch(LogOut());
  };

  console.log(SerchText);

  const serchTextvalue = () => {
    dispatch(setText(serchItem));
    setSetchItem("");
  };

  return (
    <>
      <NavStyle>
        <Link to="/" className="logo">
          Shopfy
        </Link>
        <input
          className="search"
          placeholder="Search"
          onChange={(e) => {
            setSetchItem(e.target.value);
          }}
          value={serchItem}
        />
        <p className="serch" onClick={serchTextvalue}>
          <FaSearch />
        </p>
        <ul
          className={mobileNavbar ? "nav-links-mobile-bar" : "nav-linkss"}
          onClick={() => setMobileNavbar(false)}
        >
          {LinkAddresh.map((item) => (
            <Link to={item.to}>
              <li className="li">{item.item}</li>
            </Link>
          ))}
          <li>
            <Link to="/wishlist">
              <span className="material-symbols-outlined">favorite</span>
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </li>

          <li>
            <Link to="/login" onClick={handleLogout}>
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
