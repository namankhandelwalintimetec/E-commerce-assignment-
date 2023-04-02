import Navbar from "../../Components/Navbar/Navbar";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import Footerpage from "../../Components/Footer/Footer";
import { collection, getDocs } from "firebase/firestore";
import Selector from "../../Components/selectionNavbar/Selector";
import ele1 from "../../Assets/Image/ele1.png";
import Card from "../../Components/ItemCard/Card";
import { Item } from "../Authentication/Components/style";
import SerchText from "../../Redux/Reducer/SerchText";
import CarouselComponent from './Component/Cousoloul';
import { useDispatch } from 'react-redux';
import { setProductData, setSingleProductData } from '../../Redux/Action/Action';
import CardData from '../../Redux/Reducer/CartData';
// import Spinner from "../../Components/Spinner/Spinner";
import { setEmail } from "../../Redux/Action/Action";

export interface infoDataType {
  id: string;
  Name: string;
  cate: string;
  dec: string;
  image: string;
  price: string;
  rating: string;
}

const Home = () => {
  const usercart = useSelector((state: any) => state.userCart);
  const [productDetail, setProductDetail] = useState<infoDataType[]>([]);
  const productdata = useSelector((state:any) => state.CardData);
  const [loding, setloading] = useState(true);
  const history = useNavigate();
  
  const SerchText = useSelector((state: any) => state.SerchText);
  const setCategory = useSelector((state: any) => state.setCategory);
  const dispatch =useDispatch();
  //console.log(usercart);


  const userEmail = useSelector((state: any) => state.userEmail);
  //const dispatch = useDispatch();
  const value = localStorage.getItem("email");
   if (value != null) {
     dispatch(setEmail(value));
   }
   //console.log(SerchText);
  //  console.log(value);
   
   

  const fetchData=async()=>{
    try {
      const dataSet = collection(db, "product");
      const query = await getDocs(dataSet);
      const temp=query.forEach((doc) => {
        const data = doc.data() as infoDataType;
        setProductDetail((arr) => [...arr, data]);
      });
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setProductDetail([]); 
    fetchData();
    console.log(localStorage.getItem('email'));
    //console.log('========================================');
  }, []);

  return (
    <>
      <Navbar />
      <Selector />
      <CarouselComponent />
      {/* {loding && (
        <div className="spinner-tag ">
          <Spinner animation="border" />
        </div> */}
      {/* )} */}
      <div className="product-card">
        {/* {!loding &&
          productDetail.map((item) =>
           (
            // <Card
            //   Name={item.Name}
            //   price={item.price}
            //   cate={item.cate}
            //   image={item.image}
            //   rating={item.rating}
            //   dec={item.dec}
            // />
          ))} */}

        {productDetail.map((item: infoDataType) => {
          if (SerchText === "") {
            console.log("------------");
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
          // if (
          //   setCategory !== "" &&
          //   item.cate === setCategory &&
          //   SerchText === ""
          // ) {
          //   return (
          //     <Card
          //       id={item.id}
          //       Name={item.Name}
          //       price={item.price}
          //       cate={item.cate}
          //       image={item.image}
          //       rating={item.rating}
          //       dec={item.dec}
          //     />
          //   );
          // }
          // if (setCategory === "" && SerchText === "") {
          //   return (
          //     <Card
          //       id={item.id}
          //       Name={item.Name}
          //       price={item.price}
          //       cate={item.cate}
          //       image={item.image}
          //       rating={item.rating}
          //       dec={item.dec}
          //     />
          //   );
          // }
        })}
      </div>
      <Footerpage />
    </>
  );
};

export default Home;
