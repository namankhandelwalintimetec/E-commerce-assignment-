import { useParams } from "react-router-dom";
import SingleProductCard from "../../Components/SingleProductPage/SingleProductCard";
import { useSelector } from "react-redux";
import Footerpage from "../../Components/Footer/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const productdata = useSelector((state: any) => state.CardData);
  const idValue: number = Number(id);

  return (
    <>
      <SingleProductCard
        Name={productdata[idValue - 1].Name}
        image={productdata[idValue - 1].image}
        price={productdata[idValue - 1].price}
        desc={productdata[idValue - 1].desc}
        rating={productdata[idValue - 1].rating}
      />
      <Footerpage />
    </>
  );
};

export default ProductPage;
