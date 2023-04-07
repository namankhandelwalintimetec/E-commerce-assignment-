import { ProductStyle } from "./ProductPageStyle";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { infoDataType } from "../Home";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartUpdate } from "../../Redux/Action/Action";
import { setWishlist } from "../../Redux/Action/Action";
import { useCallback } from "react";
import { increseCartValue } from "../../Redux/Action/Action";
import Notification from "../../Components/NotificationPopUp";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

interface productDescriptioType {
  Name: string;
  image: string;
  rating: string;
  desc: string;
  price: string;
}

const SingleProductCard = ({
  Name,
  image,
  rating,
  desc,
  price,
}: productDescriptioType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [popUp, setPopUp] = useState({
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
    (state: any) => state.userWishlist
  );
  const cartValue = useSelector((state: any) => state.CardValue);
  const userCart = useSelector((state: any) => state.userCart);

  useEffect(() => {
    const index = userWishlist.findIndex(
      (product) => product.id == String(Number(id))
    );
    console.log(index);
    if (index === -1) {
      setAddWishList(true);
    }
  }, [userCart]);

   const setPopUpBoxProperty = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUp({
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
      setPopUpBoxProperty("success", "Added in WishList", "success", "hide");
    }, 1000);
  };

  const saveInCart = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    if (localStorage.getItem("email") != null) {
      const qua = "1";
      const idValue: string = productdata[Number(id)].id;
      const cate = productdata[Number(id)].cate;
      dispatch(
        cartUpdate({ idValue, Name, image, rating, desc, price, qua, cate })
      );
      dispatch(increseCartValue(cartValue + Number(price)));
      showPopUp("success", "Added to Card", "success", "show");
    } else {
      showPopUp("warning", "First Log in", "warning", "show");
    }
  }, [dispatch, id, productdata, userdata, userCart]);

  const saveInWishlist = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    if (localStorage.getItem("email") != null) {
      dispatch(setWishlist(productdata[Number(id) - 1]));
      setAddWishList(true);
      showPopUp("success", "Added in WishList", "success", "show");
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
          <button className="buy-button" onClick={saveInCart}>
            Buy now
          </button>
          {addWishList && (
            <button className="wishlist-button" onClick={saveInWishlist}>
              Wishlist
            </button>
          )}
          {!addWishList && (
            <button className="wishlist-button green" onClick={saveInWishlist}>
              Added
            </button>
          )}
          <Notification
            title={popUp.title}
            message={popUp.message}
            type={popUp.type}
            classValue={popUp.class}
          />
        </div>
        <div className="product-detail-div">
          <p>{Name}</p>
          <div className="flex">
            <p className="rating">⭐{rating}</p>
            {/* <p> 990 comments</p> */}
          </div>
          <p>Extra 10% off </p>
          <p className="price-item">$ {price}</p>

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
            <p>Delivery</p>
            <input
              className="input-div"
              placeholder="Check Your pincode"
            ></input>
            <button>check</button>
          </div>
          <div className="description-div">
            <p>Description-</p>
            <span>
              {desc}
              {desc}
              {desc}
            </span>
          </div>
        </div>
      </ProductStyle>
    </>
  );
};

export default SingleProductCard;
