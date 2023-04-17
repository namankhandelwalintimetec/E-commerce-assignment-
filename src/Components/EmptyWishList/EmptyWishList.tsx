import { useNavigate } from "react-router-dom";
import emptyCart from "../../Assets/Image/EmptyWishlist.png";
import { EmptyWishListTag } from "./Style";

const EmptyWishListPage = () => {
  const navigate = useNavigate();

  return (
    <EmptyWishListTag data-testid="empty">
      <img src={emptyCart} />
      <h4>Missing WishList?</h4>
      <p data-testid="text">Login to see the items you added previously</p>
      <button
        onClick={() => {
          navigate("/Login");
        }}
        data-testid="emptywishlist"
      >
        Log in
      </button>
    </EmptyWishListTag>
  );
};

export default EmptyWishListPage;
