import React, { useEffect, useState } from "react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import "../stylecard.css";
import { infoDataType } from "../../Home";
import { useDispatch ,useSelector} from "react-redux";
import { increseCartValue, removeCartItem } from "../../../Redux/Action/Action";
import CardValue from '../../../Redux/Reducer/CartValue';
import { propType } from '../../../Redux/Reducer/UserCart';
import { SetUserCart } from "../../../Redux/Action/Action";

function Cart({ Name, price, desc, rating, idValue, cate, image,qua }: propType) {
  const productdata: any = useSelector((state: any) => state.CardData);
  const cardValue = useSelector((state: any) => state.CardValue);
  const [value, setvalue] = useState(1);
  const [cost, setcost] = useState(Number(price));
  const dispatch = useDispatch();
  //dispatch(increseCartValue(cardValue + Number(price)));

  useEffect(() => {
    dispatch(increseCartValue(cardValue+Number(price)));
    setvalue(Number(qua));
  }, [])

  // for increasing button
  const clickhandele = () => {
    setvalue(value + 1);
    setcost((value + 1) * Number(price));
    dispatch(increseCartValue(cardValue + Number(price)));
    dispatch(SetUserCart({Name,price,qua,idValue,image,rating,cate,desc}));
  };

  // for decreasing button
  const clicknega = () => {
    if (value > 1) {
      console.log(value);
      setvalue(value - 1);
      setcost((value - 1) * Number(price));
      dispatch(increseCartValue(cardValue-Number(price)));
    }
  };
  
  const removeItem=()=>{
    console.log(idValue);
    console.log("============================");
    dispatch(removeCartItem(productdata[Number(idValue)-1]));
    dispatch(increseCartValue(cardValue - (value*Number(price))));
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
                <span className="item-quantity"></span>Whistles
              </strong>
              {Name}
            </h1>
            <p>
              <strong>Navy, Size 10</strong>
            </p>
            <p>Product Code - 232321939</p>
            <p>7 Days return Policy</p>
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
