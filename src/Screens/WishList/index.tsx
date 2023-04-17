import { useDispatch, useSelector } from "react-redux";
import { StateTypeWishList, infoDataType } from "./InterfaceWishList";
import WishlistCard from "../../Components/WishListCard/WishListCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userWishlist: infoDataType[] = useSelector(
    (state: StateTypeWishList) => state.userWishlist
  );

  useEffect(() => {
    if (localStorage.getItem("email") == null) {
      navigate("/EmptyWishlist");
    }
  }, []);

  return (
    <>
      <div className="product-card" data-testid="wishCard">
        {userWishlist.map((Item: infoDataType) => {
          return (
            <WishlistCard
              Name={Item.Name}
              image={Item.image}
              price={Item.price}
              rating={Item.rating}
              id={Item.id}
              cate={Item.cate}
              dec={Item.dec}
            />
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
