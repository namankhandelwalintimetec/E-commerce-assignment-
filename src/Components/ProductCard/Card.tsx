import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "../../Assets/Image/heart.png";
import { setWishlist } from "../../Redux/Action/Action";
import { ProductCardStyle } from "./CardStyle";
import { productDataType } from "./CardInterface";
import { infoDataType } from "../Interfaces";
import { StateType } from "./CardInterface";

const ProductCard = ({
  id,
  Name,
  cate,
  price,
  image,
  rating,
  dec,
}: productDataType) => {
  const [comment, setComment] = useState<number>(0);
  const [favourit, setFavourit] = useState<boolean>(false);
  const productdata = useSelector((state: StateType) => state.cardData);
  const userWishlist = useSelector((state: StateType) => state.userWishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setComment(Math.floor(Math.random() * 100));
    const index = userWishlist.findIndex(
      (product: infoDataType) => product.id == String(Number(id))
    );
    if (index === -1) {
      setFavourit(true);
    }
  }, []);

  const navigateProductDescPage = () => {
    navigate(`/product/${cate}/${id}`);
  };

  return (
    <ProductCardStyle data-testid="ProductCard">
      <div className="card-product">
        {favourit && (
          <span
            className="material-symbols-outlined favicon"
            onClick={() => {
              dispatch(setWishlist(productdata[Number(id) - 1]));
            }}
          >
            favorite
          </span>
        )}
        {!favourit && <img className="favicon" src={FavoriteIcon} />}
        <img
          src={image}
          className="card-image"
          onClick={navigateProductDescPage}
          data-testid="imagenav"
        />
        <div className="comment-div">
          <p className="align-rating">{rating}⭐</p>
          <div className="vertrical-line"></div>
          <p className="align-rating">{comment}K</p>
        </div>
        <div className="div-content">
          <b className="align strong">{Name}</b>
          <p className="align">Best deals here--</p>
          <div className="flex-box">
            <p className="align">Rs.{price}</p>
            <p className="align overline">Rs. {Number(price) * 2}</p>
            <p className="offer">(80% OFF)</p>
          </div>
        </div>

        <div className="card-button-div">Trending...</div>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
