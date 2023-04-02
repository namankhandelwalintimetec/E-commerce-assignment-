import Navbar from "../../Components/Navbar/Navbar";
import { ProductStyle } from "./ProductPageStyle";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { addDoc ,collection,doc,getDocs } from "@firebase/firestore";
import { db } from "../../Services/Firebase/Firebaseconfiguration";
import { infoDataType } from "../Home";
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { SetUserCart, setSingleProductData } from "../../Redux/Action/Action";
import userCart from '../../Redux/Reducer/UserCart';
import { SetWishlist } from "../../Redux/Action/Action";
import {useCallback} from 'react';

interface propsType{
	Name:string;
	image:string;
	rating:string;
	desc:string;
	price:string;
}

const SingleProductCard=({Name,image,rating,desc,price}:propsType)=>{
  const dispatch = useDispatch();
  const [already, setalready] = useState(false);
	const {id}=useParams()
	const productdata:any = useSelector((state: any) => state.CardData);
  const userdata = useSelector((state: any) => state.SingleProductDetail);
  const userCart = useSelector((state:any)=>state.userCart);

  const fetchData = async () => {
    try {
    const moviesCollectionRef = collection(
      doc(db, "Cart", "naman@GrMail.com"),
      "CartProduct"
    );
    const querySnapshot = await getDocs(moviesCollectionRef);
    querySnapshot.forEach((doc) => {
      const data = doc.data() as infoDataType;
       if(data.id===id)
       {
        setalready(true);
       }
    });
  } catch (error) {
    console.log(error+"----");
  }
};
  // console.log(already);


  useEffect(() => {
   console.log(userCart)
  }, [userCart])
  

  const saveInCart = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    const qua=1;
    const idValue:string=productdata[Number(id)].id;
    const cate=productdata[Number(id)].cate;
  dispatch(SetUserCart({ idValue ,Name, image, rating, desc, price ,qua,cate}));
  // console.log(userCart);
}, [dispatch, id, productdata, userdata, userCart]);

  // const saveInCart=async()=>{
  //   console.log(userdata);
    
  //   dispatch(SetUserCart(productdata[Number(id)]));
  //   console.log(userCart);



    //fetchData();
    // if(!already)
    // {
    //   try {
    //     const user=collection(db,"Cart");
    //     const usersub=doc(db,"Cart",`${localStorage.getItem("email")}`);
    //     console.log(localStorage.getItem())
    //     const postco=collection(usersub,"CartProduct");
    //     await addDoc(postco,{
    //       id:id,
    //       Name:Name,
    //       image:image,
    //       rating:rating,
    //       desc:desc,
    //       price:price
    //     });
      
    //     console.log("hii");
    //   } catch (err) {
    //     console.log("error occure");
    //   }
    // }
    // else{
    //   console.warn("already added");
    // }


  // }

  const saveInWishlist= useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
  // console.log(userdata);
  dispatch(SetWishlist(productdata[Number(id)]));
  // console.log(userCart);
}, [dispatch, id, productdata, userdata, userCart]);


	return (
    <>
      <Navbar />
      <ProductStyle>
        <div className="flex-style">
          <img src={image} className="product-image-style" />
          <button className="buy-button" onClick={saveInCart}> buy now </button>
          <button className="wishlist-button" onClick={saveInWishlist}> wishlist </button>
        </div>
        <div className="product-detail-div">
          <p>{Name}</p>
          <div className="flex">
            <p className="rating">⭐{rating}</p>
            {/* <p> 990 comments</p> */}
          </div>
          <p>Extra 10% off </p>
          <p className="price-item">$ {price}</p>

          <p className="offer-tag">offer valid</p>
          <ul className="offer-list">
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>bank of
              india
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>phone pe
              150 Off
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>net banking
              off
            </li>
            <li className="flex">
              <span className="material-symbols-outlined">sell</span>bank of
              india
            </li>
          </ul>

          <div className="flex">
            <p>Delivery</p>
            <input
              className="input-div"
              placeholder="Check Your pincode"
            ></input>
            <button>check</button>
          </div>
          <div className="description-div">
            <span >
              Description- {desc} {desc}
              {desc}
              {desc}
            </span>
          </div>
        </div>
      </ProductStyle>
    </>
  );
}

export default SingleProductCard;