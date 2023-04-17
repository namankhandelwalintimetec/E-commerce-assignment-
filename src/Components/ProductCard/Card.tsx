import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteIcon from "../../Assets/Image/heart.png";
import cart from "../../Assets/Image/add-cart.png";
import { ProductCardStyle } from "./CardStyle";
import { productDataType, propType } from "./CardInterface";
import { StateType } from "./CardInterface";
import Notification from "../Notification";
import { infoDataType } from "./CardInterface";
import {
  removeWish,
  setUserCart,
  setWishlist,
  removeCartItem,
} from "../../Redux/Action/Action";
import {
  removeWishListData,
  uplodeWishList,
  uplodeCart,
  removeCart,
} from "../../Services/ServicesLayer";

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
  const [cartStatus, setCartStatus] = useState<boolean>(false);
  const productdata = useSelector((state: any) => state.CardData);
  const userWishlist = useSelector((state: StateType) => state.userWishlist);
  const userCart = useSelector((state: StateType) => state.userCart);
  const [popUpNotification, setPopUpNotification] = useState({
    title: "success",
    message: "",
    type: "success",
    class: "hide",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkItemInCart = () => {
    const index = userCart.findIndex(
      (product: propType) => product.id === String(Number(id))
    );
    if (index === -1) {
      setCartStatus(true);
    }
  };

  const checkItemInWishList = () => {
    const index = userWishlist.findIndex(
      (product: infoDataType) => product.id === String(Number(id))
    );
    if (index === -1) {
      setFavourit(true);
    }
  };

  useEffect(() => {
    setComment(Math.floor(Math.random() * 100));
    checkItemInCart();
    checkItemInWishList();
  }, []);
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

  const addTOWishList = () => {
    if (localStorage.getItem("email") != null) {
      dispatch(setWishlist(productdata[Number(id)]));
      setFavourit(false);
      uplodeWishList(userWishlist);
      showPopUp("success", "Add To WishList", "success", "show");
    } else {
      navigate("/login");
    }
  };

  const removeToWishList = () => {
    if (localStorage.getItem("email") != null) {
      dispatch(removeWish(Number(id) - 1));
      uplodeWishList(userWishlist);
      removeWishListData(userWishlist);
      setFavourit(true);
    }
  };

  const addTOCart = () => {
    if (localStorage.getItem("email") != null) {
      dispatch(
        setUserCart({
          id: productdata[Number(id)].id,
          Name: productdata[Number(id)].Name,
          image: productdata[Number(id)].image,
          rating: productdata[Number(id)].rating,
          desc: productdata[Number(id)].desc,
          price: productdata[Number(id)].price,
          qua: "1",
          cate: productdata[Number(id)].cate,
        })
      );
      setCartStatus(false);
      uplodeCart(userCart);
      showPopUp("success", "Add To Cart", "success", "show");
    } else {
      navigate("/login");
    }
  };

  const removeToCart = () => {
    if (localStorage.getItem("email") != null) {
      dispatch(removeCartItem(productdata[Number(id)]));
      uplodeCart(userCart);
      removeCart(userCart);
      setCartStatus(true);
    }
  };

  const navigateProductDescPage = () => {
    navigate(`/product/${cate}/${id}`);
  };

  return (
    <>
      <ProductCardStyle data-testid="ProductCard">
        <div className="card-product">
          {favourit && (
            <span
              className="material-symbols-outlined favicon"
              onClick={() => {
                addTOWishList();
              }}
            >
              favorite
            </span>
          )}
          {!favourit && (
            <img
              className="favicon"
              src={FavoriteIcon}
              onClick={removeToWishList}
            />
          )}
          {cartStatus && (
            <span
              className="material-symbols-outlined favicon-cart"
              onClick={addTOCart}
            >
              shopping_cart
            </span>
          )}
          {!cartStatus && (
            <img
              className="favicon-cart-image"
              src={cart}
              onClick={removeToCart}
            />
          )}
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
        <Notification
          title={popUpNotification.title}
          message={popUpNotification.message}
          type={popUpNotification.type}
          classValue={popUpNotification.class}
          data-testid="notify"
        />
      </ProductCardStyle>
    </>
  );
};

export default ProductCard;
