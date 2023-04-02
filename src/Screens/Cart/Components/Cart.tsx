import React, { useEffect, useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import "../stylecard.css";
// import image from '../../../Assets/Image/ele1.png'
import { infoDataType } from "../../Home";
import { useDispatch ,useSelector} from "react-redux";
import { removeCartItem } from "../../../Redux/Action/Action";

function Cart({ Name, price, dec, rating, id, cate, image }: infoDataType) {
  const productdata: any = useSelector((state: any) => state.CardData);
  const [value, setvalue] = useState(1);
  const [cost, setcost] = useState(26);
  const dispatch = useDispatch();

  // for increasing button
  const clickhandele = () => {
    setvalue(value + 1);
    setcost((value + 1) * 26);
  };

  // for decreasing button
  const clicknega = () => {
    if (value > 1) {
      console.log(value);
      setvalue(value - 1);
      setcost((value - 1) * 26);
    }
  };
  
  const removeItem=()=>{
    console.log("hii");
    console.log(productdata[Number(id)-1]);
    dispatch(removeCartItem(productdata[Number(id)-1]));
  }

  return (
    <>
      <div className="basket-product">
        <div className="item">
          <div className="product-image">
            <img src={image} className="product-frame" />
          </div>
          <div className="product-details">
            <h1>
              <strong>
                <span className="item-quantity">1</span> x Whistles
              </strong>{" "}
              {Name}
            </h1>
            <p>
              <strong>Navy, Size 10</strong>
            </p>
            <p>Product Code - 232321939</p>
          </div>
        </div>
        <div className="price">{price}</div>
        <div className="quantity d-flex ">
          <GrFormSubtract onClick={clicknega} />
          <div className="boxofitem">{value}</div>
          <GrFormAdd onClick={clickhandele} />
        </div>
        <div className="subtotal">{cost}</div>
        <div className="remove">
          <button onClick={removeItem}>Remove</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
