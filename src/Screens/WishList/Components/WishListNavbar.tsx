import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { infoDataType } from "../../Home";
import { WishlistNav } from "./NavbarStyle";

const WishListNavbar=()=>{
	const userWishlist: infoDataType[] = useSelector(
    (state: any) => state.userWishlist
  );
	return (
    <WishlistNav>
      <div className="back-navigation">
        <Link className="back-image" to="/">
          <span className="material-symbols-outlined ">arrow_back</span>
        </Link>
        <p className="back">continue Shopping... {userWishlist.length}</p>
      </div>
    </WishlistNav>
  );
}

export default WishListNavbar