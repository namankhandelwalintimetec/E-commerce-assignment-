import { useNavigate } from "react-router-dom";
import emptyCart from "../../Assets/Image/cart.png";
import { EmptyCartTag } from "./EmptyCartStyle";
const EmptyCartPage = () => {
  const navigate = useNavigate();

  return (
    <EmptyCartTag data-testid="empty">
      <img src={emptyCart} />
      <h4>Missing Cart items?</h4>
      <p data-testid="text">Login to see the items you added previously</p>
      <button
        onClick={() => {
          navigate("/Login");
        }}
        data-testid="emptycart"
      >
        Log in
      </button>
    </EmptyCartTag>
  );
};

export default EmptyCartPage;
