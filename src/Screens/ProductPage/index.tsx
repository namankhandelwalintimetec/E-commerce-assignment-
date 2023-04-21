import { useParams } from "react-router-dom";
import SingleProductCard from "../../Components/SingleProductPage/SingleProductCard";
import { useSelector } from "react-redux";
import Footerpage from "../../Components/Footer/Footer";
import { infoDataType } from "../Home/InterfaceHome";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id, cate } = useParams();
  const productdata = useSelector((state: any) => state.CardData);
  const [setdata, setsetdata] = useState(1);

  useEffect(() => {
    productdata.map((item: infoDataType) => {
      if (item.id == id && item.cate === cate) {
        setsetdata(0);
      }
    });
  }, []);

  return (
    <div data-testid="productPage">
      {productdata.map((item: infoDataType) => {
        if (item.id == id && item.cate === cate) {
          return (
            <SingleProductCard
              Name={item.Name}
              image={item.image}
              price={item.price}
              desc={item.dec}
              rating={item.rating}
            />
          );
        }
      })}
      {
        setdata &&  <h1 className="item-not"> Item is not Fount </h1>
      }

      <Footerpage />
    </div>
  );
};

export default ProductPage;
