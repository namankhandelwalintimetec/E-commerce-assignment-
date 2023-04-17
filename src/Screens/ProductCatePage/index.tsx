import { useSelector, useDispatch } from "react-redux";
import { infoDataType } from "./InterfaceProductCate";
import Card from "../../Components/ProductCard/Card";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { CateStyle } from "./styleCatePage";
import { setProductType } from "../../Redux/Action/Action";

const ProductCategoryPage = () => {
  const productdata = useSelector((state: any) => state.CardData);
  const [loading, setloading] = useState<Number>(1);
  const [price, setPrice] = useState("0");
  const [rating, setRating] = useState<number>(0);
  const setCategory: string = useSelector((state: any) => state.setCategory);
  const { cate } = useParams();
  const dispatch = useDispatch();

  setTimeout(() => {
    setloading(0);
  }, 500);

  const changeCate = (value: string) => {
    dispatch(setProductType(value));
  };

  return (
    <CateStyle>
      <div className={loading ? "spinner-tag" : "hide-spinner"}>
        <Spinner animation="border" />
      </div>
      <div className="filter-option">
        <h3 className="filter">Filters</h3>
        <div className="filter-div">
          <div className="slidecontainer rating-box" data-testid="product-cart">
            <label className="cate-name">Price</label>
            <input
              type="range"
              className="slider"
              min="0"
              max="100000"
              value={price}
              data-testid="slider"
              onChange={(e: any) => setPrice(e.target.value)}
            />
          </div>
          <p className="cate-name">Rs.{price}</p>
          <div className="rating-box-second">
            <label className="cate-name">Rating</label>
            <input
              type="number"
              className="input-rating"
              value={rating}
              data-testid="rating"
              onChange={(e: any) => {
                if (e.target.value <= 5 && e.target.value >= 0) {
                  setRating(e.target.value);
                }
              }}
            ></input>
          </div>
        </div>

        <div className="product-div" data-testid="product-card">
          {productdata.map((item: infoDataType) => {
            if (
              item.cate === cate &&
              price > "1" &&
              Number(item.price) > Number(price) &&
              item.rating >= String(rating)
            ) {
              return (
                <Card
                  id={item.id}
                  Name={item.Name}
                  price={item.price}
                  cate={item.cate}
                  image={item.image}
                  rating={item.rating}
                  dec={item.dec}
                />
              );
            }
            if (
              item.cate === cate &&
              price == "0" &&
              item.rating >= String(rating)
            ) {
              return (
                <Card
                  id={item.id}
                  Name={item.Name}
                  price={item.price}
                  cate={item.cate}
                  image={item.image}
                  rating={item.rating}
                  dec={item.dec}
                />
              );
            }
            if (
              item.cate === cate &&
              price > "0" &&
              rating <= 0 &&
              Number(item.price) > Number(price)
            ) {
              return (
                <Card
                  id={item.id}
                  Name={item.Name}
                  price={item.price}
                  cate={item.cate}
                  image={item.image}
                  rating={item.rating}
                  dec={item.dec}
                />
              );
            }
            if (item.cate === cate && price === "0" && rating == 0) {
              return (
                <Card
                  id={item.id}
                  Name={item.Name}
                  price={item.price}
                  cate={item.cate}
                  image={item.image}
                  rating={item.rating}
                  dec={item.dec}
                />
              );
            }
          })}
        </div>
      </div>
    </CateStyle>
  );
};

export default ProductCategoryPage;
