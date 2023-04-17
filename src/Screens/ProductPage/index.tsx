import { useParams } from "react-router-dom";
import SingleProductCard from "../../Components/SingleProductPage/SingleProductCard";
import { useSelector } from "react-redux";
import Footerpage from "../../Components/Footer/Footer";
import { infoDataType } from "../Home/InterfaceHome";

const ProductPage = () => {
  const { id,cate } = useParams();
  const productdata = useSelector((state: any) => state.CardData);

  return (
    <>     
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

      <Footerpage />
    </>
  );
};

export default ProductPage;
