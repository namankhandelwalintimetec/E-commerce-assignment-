import { useDispatch, useSelector } from "react-redux";
import { infoDataType, wishListStateType } from "./InterfaceWishList";
import { WishCart } from "./WishCart";
import { removeWish } from "../../Redux/Action/Action";
import {
  removeWishListData,
  uplodeWishList,
} from "../../Services/ServicesLayer";

const WishlistCard = ({
  Name,
  price,
  rating,
  id,
  cate,
  image,
}: infoDataType) => {
  var randomValue = Math.floor(1 + Math.random() * (10 - 1));
  const dispatch = useDispatch();
  const userWishlist = useSelector(
    (state: wishListStateType) => state.userWishlist
  );

  const removeWishItem = () => {
    dispatch(removeWish(Number(id) - 1));
    uplodeWishList(userWishlist);
    removeWishListData(userWishlist);
  };
  return (
    <WishCart>
      <div className="product-card1" data-testid="wishListCard">
        <div className="card-wishlist">
          <p className="close" onClick={removeWishItem}>
            <span
              className="material-symbols-outlined"
              data-testid="removeWishList"
            >
              cancel
            </span>
          </p>
          <img src={image} className="wish-image" />
          <div className="comment-div">
            <p className="align-rating" data-testid="rating">
              {rating}⭐ | {randomValue}K Rating
            </p>
            <div className="vertrical-line"></div>
          </div>
          <h5>{Name}</h5>
          <div className="wish-price">
            <p data-testid="price">Rs.{price} </p>
            <p className="cross">MRP {Number(price) + 100} (75%)</p>
          </div>
          <div className="wish-border"></div>
          <div className="wish-button" onClick={removeWishItem}>
            Remove
          </div>
        </div>
      </div>
    </WishCart>
  );
};

export default WishlistCard;
