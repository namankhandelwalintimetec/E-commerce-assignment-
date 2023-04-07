import { useNavigate } from "react-router-dom";
import { OrderFailed } from "./OrderFailStyle";

const OrderFail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <OrderFailed>
        <img></img>
        <h1 className="order-text">your order Not Placed !</h1>
        <button
          className="shop-button"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Try again...
        </button>
      </OrderFailed>
    </div>
  );
};

export default OrderFail;
