import { useNavigate } from "react-router-dom";
import { SuccessOrder } from "./OrderPlacedStyle";
import images from "../../Assets/Image/images.png";

const OrderPlace = () => {
  const navigate = useNavigate();
  return (
    <div data-testid="orderPlace">
      <SuccessOrder>
        <img src={images}></img>
        <h1 className="order-text">your order placed successfully !</h1>
        <button
          className="shop-button"
          onClick={() => {
            navigate("/");
          }}
          data-testid="orderPlaceNavigate"
        >
          Continue Shop...
        </button>
      </SuccessOrder>
    </div>
  );
};

export default OrderPlace;
