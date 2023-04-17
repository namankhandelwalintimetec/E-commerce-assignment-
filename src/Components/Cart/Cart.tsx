import { useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  increseCartValue,
  decreseCartQuantity,
  decreseCartValue,
} from "../../Redux/Action/Action";
import { StateTypeCart, propType } from "./CartInterface";
import { Cartstyle } from "./Cartstyle";
import { cartUpdate } from "../../Redux/Action/Action";
import Notification from "../Notification";
import { removeCart, uplodeCart } from "../../Services/ServicesLayer";

const Cart = ({
  Name,
  price,
  desc,
  rating,
  id,
  cate,
  image,
  qua,
}: propType) => {
  const productDetail: any = useSelector(
    (state: StateTypeCart) => state.CardData
  );
  const userCart = useSelector((state: StateTypeCart) => state.userCart);
  const [popUpNotification, setPopUpNotification] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });
  const [productQuantity, setQuantity] = useState(Number(qua));
  const [productCost, setCost] = useState(Number(price));
  const dispatch = useDispatch();

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

  const quantityIncrease = () => {
    if (productQuantity < 5) {
      setQuantity(productQuantity + 1);
      setCost((productQuantity + 1) * Number(price));
      dispatch(increseCartValue(Number(price)));
      dispatch(cartUpdate({ id, Name, image, rating, desc, price, qua, cate }));
      showPopUp("success", "Quantity Increase", "success", "show");
      uplodeCart(userCart);
      removeCart(userCart);
    } else {
      showPopUp("success", "Quantity Max", "success", "show");
    }
  };

  const quantityDecsease = () => {
    if (productQuantity > 1) {
      setQuantity(productQuantity - 1);
      setCost((productQuantity - 1) * Number(price));
      dispatch(decreseCartValue(Number(price)));
      qua = String(productQuantity);
      dispatch(
        decreseCartQuantity({ id, Name, image, rating, desc, price, qua, cate })
      );
      showPopUp("success", "Quantity Decrease", "success", "show");
      uplodeCart(userCart);
      removeCart(userCart);
    }
    showPopUp("success", "Quantity Negative", "success", "show");
  };

  const removeItem = async () => {
    dispatch(removeCartItem(productDetail[Number(id)]));
    dispatch(decreseCartValue(productQuantity * Number(price)));
    removeCart(userCart);
    showPopUp("success", "Removed From Cart", "success", "show");
  };

  return (
    <Cartstyle>
      <Notification
        title={popUpNotification.title}
        message={popUpNotification.message}
        type={popUpNotification.type}
        classValue={popUpNotification.class}
      />
      <div data-testid="cart-card">
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
              Free delevary above 799
            </p>
            <div className="remove-button" data-testid="remove-item">
              <p onClick={removeItem}>Remove</p>
            </div>
          </div>
          <div className="quantity d-flex ">
            <GrFormSubtract
              onClick={quantityDecsease}
              data-testid="removeButton"
            />
            <div className="box-quantity" data-testid="quantity-box">
              {productQuantity}
            </div>
            <GrFormAdd onClick={quantityIncrease} data-testid="addButton" />
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
            <p>Rs.{productCost}</p>
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
