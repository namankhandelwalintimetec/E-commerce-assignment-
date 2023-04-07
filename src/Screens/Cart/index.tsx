import Cart from "../../Components/Cart/Cart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { propType } from "../../Redux/Reducer/UserCart";
import { useNavigate } from "react-router-dom";
import { CartStyle } from "./style";
import { StateTypeCartPage } from "./InterfaceCart";

const ShopCart = () => {
  const userCart: propType[] = useSelector((state: StateTypeCartPage) => state.userCart);
  const cardValue = useSelector((state: StateTypeCartPage) => state.CardValue);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email") == null) {
      navigate("/");
    }
  }, []);

  return (
    <CartStyle>
        <div className="basket-labels">
          <ul className="ul">
            <li className="item item-heading li">Item</li>
            <li className="quantity-tag li">Quantity</li>
            <li className="price-tag li">Price</li>
            <li className="subtotal-tag li">Subtotal</li>
          </ul>
        </div>
        <div className="basket">
          <div className="display-cart">
            <div className="product-div">
              {userCart.map((item) => {
                return (
                  <Cart
                    Name={item.Name}
                    desc={item.desc}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    idValue={item.idValue}
                    cate={item.cate}
                    qua={item.qua}
                  />
                );
              })}
            </div>
          </div>
          <div className="price-cart">
            <p className="cart-header">Price Details</p>
            <div className="border-div"></div>
            <div className="price-main">
              <p>Price{3}</p>
              <p>{cardValue}</p>
            </div>
            <div className="price-main-1">
              <p>Discount</p>
              <p>900</p>
            </div>
            <div className="price-main-2">
              <p>Delivery Charge</p>
              <p>Free</p>
            </div>
            <div className="border-div"></div>
            <div className="price-main-3">
              <p>Total Amount</p>
              <p>{cardValue}</p>
            </div>
            <div className="border-div"></div>
            <button
              className="checkout-div"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
    </CartStyle>
  );
};

export default ShopCart;
