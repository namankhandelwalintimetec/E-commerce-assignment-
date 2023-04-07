import { useDispatch, useSelector } from "react-redux";
import { infoDataType } from "./InterfaceWishList";
import { WishCart } from "./WishCart";
import { removeWish } from "../../Redux/Action/Action";

const WishlistCard = ({
  Name,
  price,
  rating,
  id,
  cate,
  image,
}: infoDataType) => {
  var min = 1;
  var max = 10;
  var randomValue = Math.floor(min + Math.random() * (max - min));
  const dispatch = useDispatch();
  const productData: infoDataType[] = useSelector(
    (state: any) => state.singleProductData
  );
  const removeWishItem = () => {
    dispatch(removeWish(Number(id)-1));
  };
  return (
    <WishCart>
      <div className="product-card1">
        <div className="card-wishlist">
          <p className="close" onClick={removeWishItem}>
            <span className="material-symbols-outlined">cancel</span>
          </p>
          <img src={image} className="wish-image" />
          <div className="comment-div">
            <p className="align-rating">{rating}⭐</p>
            <div className="vertrical-line"></div>
            <p>{randomValue}K</p>
          </div>
          <p>{Name}</p>
          <div className="wish-price">
            <p>Rs. {price} </p>
            <p className="cross">1800 (75%)</p>
            <p>Red</p>
          </div>
          <div className="wish-border"></div>
          <button className="wish-button">Move To Cart</button>
        </div>
      </div>
    </WishCart>
  );
};

export default WishlistCard;
