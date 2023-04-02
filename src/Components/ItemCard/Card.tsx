import ele1 from "../../Assets/Image/ele1.png";
import { infoDataType } from "../../Screens/Home";
import "./Card.css";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, logout, setSingleProductData } from "../../Redux/Action/Action";
import SingleProductDetail from "../../Redux/Reducer/SingleProductDetail";

const Card = ({ id, Name, cate, price, image, rating, dec }: infoDataType) => {
  const [comment, setComment] = useState<number>(0);
  const ProductPage = useSelector((state: any) => state.SingleProductDetail);
  const productdata = useSelector((state: any) => state.CardData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setComment(Math.floor(Math.random() * 100));
    // dispatch(setSingleProductData(productdata[id]));
  }, []);

  const send = () => {
    navigate(`/product/${cate}/${id}`);
  };

  return (
    <>
      <div className="card">
        <img src={image} className="card-image" />
        <div className="comment-div">
          <p className="align-rating">{rating}⭐</p>
          <div className="vertrical-line"></div>
          <p>{comment}K</p>
        </div>
        <div className="div-content">
          <p className="align"> {Name}</p>
          <p className="align">Best deals here--</p>
          <p className="align">Rs.{price}</p>
        </div>

        <div className="card-button-div">
          <button className="show-button" onClick={send}>
            show
          </button>
        </div>

        <div className="hide">
          <button className="card-button">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="card-button">
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
