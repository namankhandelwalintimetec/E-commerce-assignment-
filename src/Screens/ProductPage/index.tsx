import Navbar from '../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import SingleProductCard from "./SingleProductCard";
import { useSelector } from "react-redux";
import { infoDataType } from '../Home/index';
import {useState,useEffect} from 'react';

const ProductPage = () => {
  const { id } = useParams();
  const productdata = useSelector((state: any) => state.CardData);
  const usercart = useSelector((state: any) => state.userCart);
  const ididz:number = Number(id);
  
  const found = productdata.find((obj:any) => {
    return obj.id === id;
  });

  
  return (
    <>
      <SingleProductCard
        Name={productdata[ididz - 1].Name}
        image={productdata[ididz - 1].image}
        price={productdata[ididz - 1].price}
        desc={productdata[ididz - 1].desc}
        rating={productdata[ididz - 1].rating}
      />
    </>
  );
};

export default ProductPage;
