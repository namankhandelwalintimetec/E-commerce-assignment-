import { useEffect, useState } from "react";
import { db } from "../../Config/Config";
import Footerpage from "../../Components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import ProductCard from "../../Components/ProductCard/Card";
import CarouselComponent from "../../Components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../Redux/Action/Action";
import { infoDataType, stateType } from "./InterfaceHome";

const Home = () => {
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
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
  }, []);

  return (
    <>
      <CarouselComponent />
      <div className="product-card" data-testid="homePage">
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
              <div data-testid="con">
                <ProductCard
                  id={item.id}
                  Name={item.Name}
                  price={item.price}
                  cate={item.cate}
                  image={item.image}
                  rating={item.rating}
                  dec={item.dec}
                />
              </div>
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
      <Footerpage/>
    </>
  );
};

export default Home;
