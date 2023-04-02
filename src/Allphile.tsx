import { useSelector } from "react-redux";
import { infoDataType } from "./Screens/Home";
import Card from "./Components/ItemCard/Card";
import { Item } from './Screens/Authentication/Components/style';
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useState } from "react";

const Allproductdtl = () => {
  const productdata = useSelector((state: any) => state.CardData);
  const [loading, setloading] = useState<Number>(1)
  const setCategory:string = useSelector((state: any) => state.setCategory);
  const {cate} = useParams();


  return (
    <>
    { loading &&
      <div className="spinner-tag ">
        <Spinner animation="border" />
      </div>
    }
      <div className="product-card">
        {productdata.map((item: infoDataType) => {
          console.log(item.id);
          if (item.cate === cate) {
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
    </>
  );
};

export default Allproductdtl;
