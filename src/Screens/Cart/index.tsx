import Cart from "../../Components/Cart/Cart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { propType } from "../../Redux/Reducer/UserCart";
import { useNavigate } from "react-router-dom";
import { CartStyle } from "./style";
import emptyCartImage from "../../Assets/Image/cart.png";
import { StateTypeCartPage } from "./InterfaceCart";
import {
  increseCartValue,
  resetCartValue,
  setOrderAmount,
} from "../../Redux/Action/Action";
import { emptyCart, fetchCartDataValue } from "../../Services/ServicesLayer";

const ShopCart = () => {
  const userCart: propType[] = useSelector(
    (state: StateTypeCartPage) => state.userCart
  );
  const cardValue = useSelector((state: StateTypeCartPage) => state.CardValue);
  let discount = Math.floor((Math.random() * cardValue) / 10) + 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      navigate("/EmptyCart");
    }
    if (userCart.length == 0) {
      dispatch(resetCartValue(cardValue));
    }
    userCart.map((item) => {
      dispatch(increseCartValue(Number(item.price) * Number(item.qua)));
    });
    return () => {
      dispatch(resetCartValue(cardValue));
    };
  }, []);

  useEffect(() => {
    dispatch(setOrderAmount(discount));
  }, [discount]);

  const fetchCartDatarelode = async () => {
    const cartData = await fetchCartDataValue();
    if (cartData !== undefined) {
      cartData.map((item) => {
        const data = item as propType;
        dispatch(increseCartValue((Number(data.price) * Number(data.qua)) / 2));
      });
    }
  };
  window.addEventListener("load", () => {
    fetchCartDatarelode();
  });

  return (
    <div title="container">
      {userCart.length > 0 && (
        <CartStyle>
          <div
            className="basket-labels"
            data-testid="container"
            title="container"
          >
            <ul className="ul cros">
              <li className="item item-heading li">Item</li>
              <li className="quantity-tag li">Quantity</li>
              <li className="price-tag li">Price</li>
              <li className="subtotal-tag li">Subtotal</li>
            </ul>
          </div>
          <div className="basket">
            <div className="display-cart">
              <div className="product-div" data-testid="product-card">
                {userCart.map((item) => {
                  return (
                    <Cart
                      Name={item.Name}
                      desc={item.desc}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      id={item.id}
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
                <p>Price</p>
                <p>{cardValue}</p>
              </div>
              <div className="price-main-1">
                <p>Discount</p>
                {cardValue > discount && <p>{discount}</p>}
                {cardValue < discount && <p>0</p>}
              </div>
              <div className="price-main-2">
                <p>Delivery Charge</p>
                <p>Free</p>
              </div>
              <div className="border-div"></div>
              <div className="price-main-3">
                <p>Total Amount</p>
                <p data-testid="empty-cart-message">
                  {cardValue > discount ? cardValue - discount : cardValue}
                </p>
              </div>
              <div className="border-div"></div>
              <button
                className="checkout-div"
                onClick={() => {
                  if (userCart.length >= 1) {
                    navigate("/checkout");
                  }
                }}
                data-testid="place"
              >
                Place Order
              </button>
              <button
                className="checkout-div"
                onClick={() => {
                  if (userCart.length >= 1) {
                    navigate("/orderSummary");
                  }
                }}
              >
                Order history
              </button>
            </div>
          </div>
        </CartStyle>
      )}
      {userCart.length === 0 && (
        <div className="center-empty" data-testid="empty">
          <img src={emptyCartImage} />
          <h4>Your Cart Is Empty?</h4>
          <h5>Add some Items....</h5>
          <button
            className="checkout-div1"
            onClick={() => {
                navigate("/orderSummary");
            }}
          >
            Order history
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
