import styled from "styled-components";

export const Cartstyle = styled.div`
  width: 100vh;
  height: 30vh;
  margin: auto;
  margin-bottom: 6vh;

  .cart-card {
    display: flex;
    width: 90%;
  }
  .product-image {
    width: 35%;
    float: left;
    width: 40%;
  }
  .product-frame {
    border: 1px solid #aaa;
    width: 12vw;
    height: 25vh;
    margin-bottom: 2vh;
  }
  .remove-button {
    position: relative;
    right: -48vw;
    bottom: -1vh;
    border: none;
    color: black;
    font-weight: 700;
  }
  .middle-div {
    color: black;
    font-weight: 400;
    gap: 1vh;
    width: 30%;
    padding: 3vh;
    margin-left: -2vw;
  }
  .set-margin-cart {
    margin: 0;
    font-weight: 500;
  }
  .title-cart {
    font-weight: 700;
    font-size: 1em;
    text-transform: capitalize;
  }
  .subtitle-cart {
    font-size: 1vw;
  }
  .seller {
    color: blue;
    font-size: 1vw;
    font-weight: 600;
  }
  .quantity {
    margin: auto;
  }
  .box-quantity {
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background-color: rgb(235, 233, 233);
    margin-left: 8%;
    margin-right: 3%;
    margin-top: -1vh;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    padding: 2px;
  }
  .delivery-div {
    width: 13vw;
    margin-left: 5vw;
    color: black;
  }
  .free-tag {
    color: green;
    font-size: larger;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .price-div {
    text-align: center;
    width: 13vw;
    padding: 2vw;
    font-weight: 600;
  }
  .discount-paragraph {
    font-size: 1vw;
    margin-top: -3vh;
  }
  .sub-total {
    width: 15vw;
    margin-left: 8vw;
  }
  .last-div {
    display: flex;
    margin-top: -4vh;
    font-weight: 600;
    font-size: 10px;
    gap: 1vw;
    color: green;
    padding: 1px;
  }
  .basket-labels {
    display: flex;
  }
   @media screen and (max-width: 667px) {
  width: 100vh;
  height: 30vh;
  // margin: auto;
  margin-bottom: 6vh;
   }
   .delivery-div {
    display:none;
  }
  .price-div
  {
    display:none;
  }
  .middle-div {
    color: black;
    font-weight: 400;
    font-size:5vw;
    gap: 1vh;
    width: 30vw;
    padding: 3vh;
    margin-left: -50vw;
  }
  .remove-button {
    position: relative;
    right: -25vw;
    bottom: -1vh;
    top:8vh;
    border: none;
    color: black;
    font-weight: 700;
  }
  .quantity {
    margin-left:-1vw;
  }
  .sub-total {
    width: 15vw;
    position: relative;
    left: -80vw;
    top:2vh;
  }
  .set-margin-cart {
    font-size:2vw;
  }
  .last-div {
    display: flex;
    margin-top: -2vh;
    font-weight: 600;
    font-size: 10px;
    gap: 1vw;
    color: green;
    padding: 1px;
  }
}
`;
