import Navbar from "../../Components/Navbar/Navbar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import "./stylecard.css";
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, getDocs } from "@firebase/firestore";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import { infoDataType } from "../Home";
import { propType } from "../../Redux/Reducer/UserCart";

const ShopCart = () => {
  const [sub, setsub] = useState<number>(0);
  const productdata = useSelector((state: any) => state.singleProductData);
  const userCart: propType[] = useSelector((state: any) => state.userCart);
  const [cartDetail, setcartDetail] = useState<infoDataType[]>([]);
  const dispatch = useDispatch();

  // const fetchData = async () => {
  //   setcartDetail([]);
  //   try {
  //     const moviesCollectionRef = collection(
  //       doc(db, "Cart", "naman@GrMail.com"),
  //       "CartProduct"
  //     );
  //     const querySnapshot = await getDocs(moviesCollectionRef);
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data() as infoDataType;
  //       setcartDetail((arr) => [...arr, data]);
  //       console.warn(data);
  //     });
  //   } catch (error){
  //     console.log(error + "----");
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // },[])

  console.warn(cartDetail);
  return (
    <>
      <Navbar />
      <main>
        <div className="basket">
          <div className="basket-labels">
            <ul className="ul">
              <li className="item item-heading li">Item</li>
              <li className="price li">Price</li>
              <li className="quantity li">Quantity</li>
              <li className="subtotal li">Subtotal</li>
            </ul>
          </div>

          {userCart.map((item) => {
            console.log(item.idValue);
            return (
              <Cart
                Name={item.Name}
                dec={item.desc}
                image={item.image}
                price={item.price}
                rating={item.rating}
                id={item.idValue}
                cate={item.cate}
              />
            );
          })}
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items"></span> Items in your Bag
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                {sub}
              </div>
              <div className="summary-promo hide">
                <div className="promo-title">Promotion</div>
                <div
                  className="promo-value final-value"
                  id="basket-promo"
                ></div>
              </div>
            </div>
            <div className="summary-delivery">
              <select
                name="delivery-collection"
                className="summary-delivery-selection"
              >
                <option value="0">Select Collection or Delivery</option>
                <option value="collection">Collection</option>
                <option value="first-class">Royal Mail 1st Class</option>
                <option value="second-class">Royal Mail 2nd Class</option>
                <option value="signed-for">Royal Mail Special Delivery</option>
              </select>
            </div>
            <div className="summary-total ">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">
                {sub}
              </div>
            </div>
            <div className="summary-checkout">
              <button className="checkout-cta">Go to Secure Checkout</button>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default ShopCart;
