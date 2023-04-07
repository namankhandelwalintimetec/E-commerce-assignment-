import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Orde = styled.div`
  margin: auto;
  text-align: center;
  item-align: center;
  margin-top: 30vh;
  .order-text {
    margin: auto;
    font-size: 3em;
    color: Green;
  }
  .shop-button {
    margin: auto;
    margin-left: 30vh;
    margin-top: 5vh;
    background: #87ea55;
	color:black;
	font-weight:500;
    width: 40%;
    height: 7vh;
  }
`;

const OrderPlace = () => {
	const navigate=useNavigate();
  return (
    <div>
      <Orde>
        <h1 className="order-text">your order placed successfully !</h1>
		<button className="shop-button" onClick={()=>{
			navigate('/');
		}}>Continue Shop...</button>
      </Orde>
    </div>
  );
};

export default OrderPlace;
