import { useDispatch, useSelector } from "react-redux";
import { StateTypeWishList, infoDataType } from "./InterfaceWishList";
import WishlistCard from "../../Components/WishListCard/WishListCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs } from "@firebase/firestore";
import { setWishlist } from "../../Redux/Action/Action";
import { db } from "../../Config/Config";
import { useState } from "react";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState<infoDataType[]>([]);
  const userWishlist: infoDataType[] = useSelector(
    (state: StateTypeWishList) => state.userWishlist
  );

  useEffect(() => {
    if (localStorage.getItem("email") == null) {
      navigate("/");
    }
  }, []);

  const fetchData = async () => {
    try {
      const dataSet = collection(
        doc(db, "Cart", `${localStorage.getItem("email")}`),
        "wishList"
      );
      const querySnapshot = await getDocs(dataSet);
      querySnapshot.forEach((doc) => {
        const data = doc.data() as infoDataType;
        dispatch(setWishlist(data));
        setData((arr) => [...arr, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener("load", () => {
    fetchData();
  });

  return (
    <>
      <div className="product-card" data-testid="wishCard">
        {userWishlist.map((Item: infoDataType) => {
          return (
            <WishlistCard
              Name={Item.Name}
              image={Item.image}
              price={Item.price}
              rating={Item.rating}
              id={Item.id}
              cate={Item.cate}
              dec={Item.dec}
            />
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
