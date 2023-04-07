import React, { useEffect, useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, increseCartValue } from "../../Redux/Action/Action";
import { StateTypeCart, propType, popUpBoxPropes } from "./CartInterface";
import { Cartstyle } from "./Cartstyle";
import { cartUpdate } from "../../Redux/Action/Action";
import Notification from "../NotificationPopUp";

const Cart = ({
  Name,
  price,
  desc,
  rating,
  idValue,
  cate,
  image,
  qua,
}: propType) => {
  const productdata: any = useSelector(
    (state: StateTypeCart) => state.CardData
  );
  const cardValue = useSelector((state: StateTypeCart) => state.CardValue);
  const [popUp, setPopUp] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });
  const [quantity, setQuantity] = useState(Number(qua));
  const [cost, setcost] = useState(Number(price));
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(Number(qua));
    setcost(quantity * Number(price));
    if (quantity === 1) {
      dispatch(increseCartValue(cardValue + cost));
    } else {
      dispatch(increseCartValue(cardValue + cost - Number(price)));
    }
  }, []);

  const showPopUp = (
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
    setTimeout(() => {
      setPopUp({
        title: title,
        message: message,
        type: type,
        class: "hide",
      });
    }, 1000);
  };

  const quantityIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
      setcost((quantity + 1) * Number(price));
      dispatch(increseCartValue(cardValue + Number(price)));
      dispatch(
        cartUpdate({ idValue, Name, image, rating, desc, price, qua, cate })
      );
      showPopUp("success", "Quantity Increase", "success", "show");
    } else {
      setQuantity(5);
      showPopUp("success", "Quantity Max", "success", "show");
    }
  };

  const quantityDecsease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setcost((quantity - 1) * Number(price));
      dispatch(increseCartValue(cardValue - Number(price)));
      dispatch(
        cartUpdate({ idValue, Name, image, rating, desc, price, qua, cate })
      );
      showPopUp("success", "Quantity Decrease", "success", "show");
    }
    showPopUp("success", "Quantity Negative", "success", "show");
  };

  const removeItem = () => {
    dispatch(removeCartItem(productdata[Number(idValue) - 1]));
    dispatch(increseCartValue(cardValue - quantity * Number(price)));
    showPopUp("success", "Removed From Cart", "success", "show");
  };

  return (
    <Cartstyle>
      <Notification
        title={popUp.title}
        message={popUp.message}
        type={popUp.type}
        classValue={popUp.class}
      />
      <div>
        <div className="cart-card">
          <div className="product-image">
            <img src={image} className="product-frame" />
          </div>
          <div className="middle-div">
            <p className="set-margin-cart title-cart">{Name}</p>
            <p className="set-margin-cart seller">Certified seller</p>
            <p className="set-margin-cart subtitle-cart">4K Comment</p>
            <p className="set-margin-cart subtitle-cart">Offer(70%) </p>
            <p className="set-margin-cart subtitle-cart free">
              {" "}
              Free delevary above 799{" "}
            </p>
            <div className="remove-button">
              <p onClick={removeItem}>Remove</p>
            </div>
          </div>
          <div className="quantity d-flex ">
            <GrFormSubtract onClick={quantityDecsease} />
            <div className="box-quantity">{quantity}</div>
            <GrFormAdd onClick={quantityIncrease} />
          </div>
          <div className="price-div">
            <p>Rs. {price}</p>
            <p className="discount-paragraph">(70% OFF)</p>
          </div>
          <div className="delivery-div">
            <p className="free-tag">Free</p>
            <p>Delivery in 2-3 business days Checkout ...</p>
          </div>
          <div className="sub-total">
            <p>Rs.{cost}</p>
          </div>
        </div>
        <div className="last-div">
          <span className="material-symbols-outlined">verified</span>
          <p>30 Days Easy Retun available</p>
        </div>
      </div>
    </Cartstyle>
  );
};

export default Cart;
