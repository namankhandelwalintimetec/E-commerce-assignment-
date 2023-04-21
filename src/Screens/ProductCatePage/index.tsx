import { useSelector } from "react-redux";
import { infoDataType } from "./InterfaceProductCate";
import Card from "../../Components/ProductCard/Card";
import { useParams, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CateStyle } from "./styleCatePage";

const ProductCategoryPage = () => {
  const productdata = useSelector((state: any) => state.CardData);
  const [loading, setloading] = useState<Number>(1);
  const [price, setPrice] = useState("0");
  const [max, setMaxPrice] = useState(-1);
  const [setcate,setSetCate]=useState('');
  const [rating, setRating] = useState<number>(0);
  const { cate } = useParams();

  useEffect(() => {
    productdata.map((item: infoDataType) => {
      if (cate === "men"){
        setMaxPrice(15000)
        setSetCate("men");
      }
      if (cate === "female") {
        setMaxPrice(8900);
        setSetCate("female");
      }
      if (cate === "electronic") {
        setMaxPrice(1900000);
        setSetCate("electronic");
      }
      else{
        setSetCate("nan")
      }
    });
  },[cate])

  setTimeout(() => {
    setloading(0);
  }, 500);

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
              max={max}
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
              Number(item.price) >= Number(price) &&
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
              price === "0" &&
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
              Number(item.price) >= Number(price)
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
            if (item.cate === cate && price === "0" && rating === 0) {
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
          {setcate === "nan" && <h2>Category is not Avaliavle</h2>}
        </div>
      </div>
    </CateStyle>
  );
};

export default ProductCategoryPage;
