import Home from "../../Assets/Image/Home.webp";
import fashion from "../../Assets/Image/fashion.webp";
import smart from "../../Assets/Image/smart.webp";
import mobile from "../../Assets/Image/mobile.webp";
import { SelectorNavbar } from "./SelectorStyle";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setProductType } from "../../Redux/Action/Action";
import { useNavigate } from "react-router-dom";


const Selector = () => {
  const setCategory = useSelector((state: any) => state.setCategory);
  const dispatch = useDispatch();
   const navigate = useNavigate();
  console.log(setCategory);

  const navigat=(value:string)=>{
    navigate(`/product/${value}`)
  }

  return (
    <SelectorNavbar className="d-flex">
      <div
        className="itemset"
        onClick={() => {
          dispatch(setProductType("men"));
          navigat("men");
        }}
      >
        <img src={Home} className="imageset" />
        <p className="setsize"> Men</p>
      </div>
      <div
        className="itemset"
        onClick={() => {
          dispatch(setProductType("fashion"));
          navigat("fashion");
        }}
      >
        <img src={fashion} className="imageset" />
        <p className="setsize">Fashion</p>
      </div>
      <div
        className="itemset"
        onClick={() => {
          dispatch(setProductType("electronic"));
          navigat("electronic");
        }}
      >
        <img src={smart} className="imageset" />
        <p className="setsize">Electronic</p>
      </div>
      <div className="itemset">
        <img
          src={mobile}
          className="imageset"
          onClick={() => {
            dispatch(setProductType("mobile"));
            
          }}
        />
        <p className="setsize">Mobile</p>
      </div>
      <div className="itemset">
        <img src={mobile} className="imageset" />
        <p className="setsize">Large</p>
      </div>
      <div className="itemset">
        <img src={mobile} className="imageset" />
        <p className="setsize">Large</p>
      </div>
    </SelectorNavbar>
  );
};

export default Selector;
