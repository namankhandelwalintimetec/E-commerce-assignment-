import { ProductStyle } from "../../Screens/ProductPage/ProductPageStyle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  infoDataType,
  productDescriptioType,
  singleProductCardStateType,
} from "./InterfaceSingleProductPage";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserCart } from "../../Redux/Action/Action";
import { setWishlist } from "../../Redux/Action/Action";
import { useCallback } from "react";
import { increseCartValue } from "../../Redux/Action/Action";
import Notification from "../Notification";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { uplodeCart, uplodeWishList } from "../../Services/ServicesLayer";

const SingleProductCard = ({
  Name,
  image,
  rating,
  desc,
  price,
}: productDescriptioType) => {
  const dispatch = useDispatch();
  const [popUpNotification, setPopUpNotification] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });
  const [addWishList, setAddWishList] = useState(false);
  const { id } = useParams();
  const productdata = useSelector((state: any) => state.CardData);
  const userdata = useSelector((state: any) => state.SingleProductDetail);
  const userWishlist: infoDataType[] = useSelector(
    (state: singleProductCardStateType) => state.userWishlist
  );
  const cartValue = useSelector(
    (state: singleProductCardStateType) => state.CardValue
  );
  const userCart = useSelector(
    (state: singleProductCardStateType) => state.userCart
  );
  let idValue: string;

  const checkWishListStatus = () => {
    const index = userWishlist.findIndex(
      (product) => product.id === String(Number(id))
    );
    if (index === -1) {
      setAddWishList(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
    checkWishListStatus();
    if (id !== undefined) {
      idValue = id;
    }
  }, [userCart]);

  const setPopUpBoxProperty = (
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
  };

  const showPopUp = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUpBoxProperty(title, message, type, classValue);
    setTimeout(() => {
      setPopUpBoxProperty("success", "", "success", "hide");
    }, 1000);
  };

  const saveInCart = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    if (localStorage.getItem("email") != null) {
      const qua = "1";
      let id = productdata[Number(idValue)].id;
      const cate = productdata[Number(id)].cate;
      const desc = productdata[Number(id)].desc;
      dispatch(
        setUserCart({ id, Name, image, rating, desc, price, qua, cate })
      );
      dispatch(increseCartValue(cartValue + Number(price)));
      showPopUp("success", "Added to Card", "success", "show");
      setTimeout(() => {
        uplodeCart(userCart);
      }, 3000);
      uplodeCart(userCart);
    } else {
      showPopUp("warning", "First Log in", "warning", "show");
    }
  }, [dispatch, id, productdata, userdata, userCart]);

  const saveInWishlist = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    if (localStorage.getItem("email") != null) {
      dispatch(setWishlist(productdata[Number(id)]));
      setAddWishList(true);
      showPopUp("success", "Added in WishList", "success", "show");
      uplodeWishList(userWishlist);
    } else {
      showPopUp("warning", "First Log in", "warning", "show");
    }
  }, [dispatch, id, productdata, userdata, userCart]);

  return (
    <>
      <ProductStyle>
        <div className="flex-style">
          <Carousel className="product-image-style">
            <Carousel.Item>
              <img
                className="product-image-style"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="product-image-style" src={image} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="product-image-style" src={image} />
            </Carousel.Item>
          </Carousel>
          <button
            className="buy-button"
            onClick={saveInCart}
            data-testid="buynow"
          >
            Buy now
          </button>
          {addWishList && (
            <button
              className="wishlist-button"
              onClick={saveInWishlist}
              data-testid="wishlistbutton"
            >
              Wishlist
            </button>
          )}
          {!addWishList && (
            <button className="wishlist-button green">Added</button>
          )}
          <Notification
            title={popUpNotification.title}
            message={popUpNotification.message}
            type={popUpNotification.type}
            classValue={popUpNotification.class}
          />
        </div>

        <div className="product-detail-div" data-testid="singleProduct">
          <h3 data-testid="product-name" className="product-name">
            {Name}
          </h3>
          <div className="flex border-rating">
            <p className="rating">{rating}⭐ | 4K Rating</p>
            <p className="Off">Extra 10% off </p>
          </div>
          <div className="border"></div>

          <div className="flex">
            <p className="price-item">₹ {price}</p>
            <p className="mrp"> MRP ₹{price} </p>
            <p className="offer"> (55% off)</p>
          </div>
          <p className="tax-bar">inclusive of all taxes</p>
          <p className="offer-tag">offer valid</p>
          <ul className="offer-list">
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>bank of
              india
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>phone pe
              150 Off
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>net banking
              off
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>bank of
              india
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>bank of
              india
            </li>
          </ul>
          <div className="flex">
            <p className="font-weight">Delivery</p>
            <input
              className="input-div"
              placeholder="Check Your pincode"
              data-testid="pincode"
            ></input>
            <button className="check-button">check</button>
          </div>
          <div className="description-div">
            <p>Description-</p>
            <span>{desc}</span>
          </div>
        </div>
      </ProductStyle>
    </>
  );
};

export default SingleProductCard;
