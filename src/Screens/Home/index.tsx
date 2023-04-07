import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { db } from "../../Config/Firebaseconfiguration";
import Footerpage from "../../Components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../../Components/ProductCard/Card";
import SerchText from "../../Redux/Reducer/SerchText";
import CarouselComponent from "../../Components/Courosoul/Cousoloul";
import { useDispatch } from "react-redux";
import { setEmail } from "../../Redux/Action/Action";
import { infoDataType, stateType } from "./InterfaceHome";
import { categoryList } from "../../Components/Constant";
import serchText from "../../Redux/Reducer/SerchText";

const Home = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
  const [updateData, setUpdateData] = useState<infoDataType[]>([]);
  const SerchText: string = useSelector((state: stateType) => state.SerchText);
  const setCategory = useSelector((state: stateType) => state.setCategory);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setProductDetail([]);
    try {
      const dataSet = collection(db, "product");
      const query = await getDocs(dataSet);
      query.forEach((doc) => {
        const data = doc.data() as infoDataType;
        setProductDetail((arr) => [...arr, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener("load", () => {
    if (localStorage.getItem("email") != null) {
      const value = localStorage.getItem("email");
      if (value != null) {
        dispatch(setEmail(value));
      }
    }
  });

  useEffect(() => {
    setProductDetail([]);
    fetchData();
    console.log(updateData);
  }, []);

  return (
    <>
      <CarouselComponent />
      <div className="product-card">
        {productDetail.map((item: infoDataType) => {
          if (SerchText !== "" && item.Name && item.Name.includes(SerchText)) {
            return (
              <ProductCard
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
            setCategory !== "" &&
            item.cate === setCategory &&
            SerchText === ""
          ) {
            return (
              <ProductCard
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
          if (setCategory === "" && SerchText === "") {
            return (
              <ProductCard
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
      <Footerpage />
    </>
  );
};

export default Home;
