import styled from "styled-components";

export const ProductCardStyle = styled.div`
  .card-product {
    background-color: rgb(218, 231, 227);
    color: black;
    font-weight: 500;
    width: 45vh;
    border-radius: 10px;
    padding: 1%;
    font-size: 1em;
    margin: auto;
    text-align: center;
    border: none;
  }

  .card-product {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  .card-content {
    display: flex;
    width: 100%;
    margin: auto;
  }

  .align {
    font-size: 13px;
    font-weight: 500;
    margin: 0px;
    margin-top: 1%;
    margin-left: 1%;
  }

  .div-content {
    border-bottom: 1px solid rgb(176, 192, 187);
    padding: 3%;
    text-align: initial;
    margin-top: 3vh;
    margin-bottom: 5vh;
  }

  .card-image {
    margin-top: -5vh;
    width: 100%;
    height: 33vh;
    margin-bottom: 6vh;
  }

  .card-button-div {
    margin: auto;
    color: green;
    font-size: 1vw;
    margin-top: -3vh;
  }

  .card-button {
    margin-top: 8%;
    margin: auto;
    width: max-content;
    height: 40px;
    align-items: center;
    border-radius: 10px;
  }

  .comment-div {
    display: flex;
    background-color: rgb(240, 235, 230);
    width: 24%;
    padding-left: 2%;
    padding-right: 2%;
    margin-top: -27%;
    height: 25px;
    opacity: 0.9;
    border-radius: 5px;
    margin-left: 2%;
    font-size: 10px;
    font-weight: 700;
  }
  .align-rating{
    margin-left:2px;
    margin-top:2px;
  }

  .comment-div:hover {
    opacity: 1;
    scale: 0.9;
    font-weight: 700;
  }

  .vertrical-line {
    border-left: 1px solid #0078b2;
    height: 15px;
    margin-top: 6%;
    margin-right: 3px;
    margin-left: 3px;
  }

  .card {
    background-color: red;
    color: red;
  }

  .favicon {
    width: 8%;
    height: 8%;
    position: relative;
    top: 1vh;
    left: 8vw;
    opacity: 0.8;
  }

  .favicon:hover {
    scale: 1.1;
    opacity: 1;
  }

  .show-button {
    margin: auto;
    width: 60%;
    color: black;
    font-weight: 600;
    height: 35px;
    border-radius: 2px;
    background-color: #3392f3;
    border: none;
    margin-bottom: 5%;
    margin-top: 5%;
  }

  .hide {
    display: none;
  }

  .strong {
    font-weight: 650;
  }

  .card-button-div:hover + .hide {
    display: inline-flex;
    background-color: rgb(231, 221, 221);
    position: absolute;
    top: 0%;
    height: 20%;
    width: 98%;
    opacity: 0.7;
  }

  .flex-box {
    display: flex;
    gap: 5%;
    margin-top: 13px;
    align-items: center;
    margin-top: 0px;
  }

  .overline {
    text-decoration: line-through;
    font-weight: 600;
    opacity: 0.7;
    font-size: 10px;
  }

  .offer {
    font-size: 13px;
    font-weight: 500;
    margin: 0px;
    margin-top: 1%;
    margin-left: 1%;
    color: orangered;
  }
`;
