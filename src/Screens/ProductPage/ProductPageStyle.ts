import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 100vw;
  height: 90vh;
  margin: auto;
  color: black;
  display: flex;
  overflow: hidden;
  scroll: none;

  .hide{
    display:none;
  }
  .item-not{
    width:1000vh;
    margin-left:50vw;
    margin-top:20vh;
  }

  .product-image-style {
    width: 98%;
    height: 300px;
    display: block;
    margin-bottom: 7vh;
    margin-top:2vh;
  }
  .box-quantity {
    height: 30px;
    width: 30px;
    border: 1px solid black;
    background-color: rgb(235, 233, 233);
    margin-left: 3%;
    margin-right: 3%;
    margin-top: -1vh;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    padding: 2px;
  }
  .negative-button{
    margin-left:5vh;
  }
  .green{
    background:green;
  }
  .product-name{

    font-weight:600;
    margin-top:5vh;
    margin-left:1vw;
  }
  .flex-style {
    padding: 2%;
    width: 35%;
    height: 95vh;
    margin-left:3vw;
    border: 1px solid wheat;
  }

  .green {
    background: #87ea55;
  }
  .buy-button,
  .wishlist-button {
    width: 45%;
    height: 40px;
    color: black;
    background: #3392f3;
    font-size: 1em;
    margin: 2%;
    margin-top:-20vh;
    border-radius: 2px;
    font-weight: 600;
    border: none;
  }
  .Off{
   margin-left:2vw;
   margin-top:2vh;
  }

  .buy-button:hover {
    color: white;
    opacity: 0.7;
    scale: 0.9;
    font-weight: 700;
  }

  .wishlist-button:hover {
    opacity: 0.8;
    scale: 0.9;
    font-weight: 900;
  }
  .flex-button {
    display: flex;
    
  }

  .product-detail-div {
    padding: 1%;
    margin-left: 5vw;
    width: 40%;
  }
  .description-div {
    margin-top: 2vh;
    font-weight:600;
  }
  .border{
    border:1px solid ;
    width:50vw;
    margin-top:-2vh;
  }
  .rating {
    border: 1px solid #FFFFFF;
    padding: 2%;
    background: FFFFFF;
    color: black;
    border-radius: 5px;
    font-weight:3vh;
    border:1px solid #DEE2E6;
  }
  .flex {
    display: flex;
    text-aligh:center;
  }
 
  .mrp
  {
    margin-top:3vh;
    margin-left:2vw;
    font-size:1.1em;
    text-decoration:line-through;
  }
  .tax-bar{
    color:#1BA685;
    margin-top:-4vh;
    margin-left:1vw;
  }

  .price-item {
    padding:2%;
    font-size: 1.5em;
    font-weight: 700;
  }

  .offer-list {
    list-style-type: none;
    font-size: 1em;
    font-weight: 500;
    margin: auto;
    margin-bottom:1vw;
  }
  .offer{
    color:#FF905A;
    margin-top:3vh;
    margin-left:2vw;
    font-weight:600;
  }
  .offer-tag {
    font-size: 1em;
    font-weight: 600;
    margin: auto;
    margin-bottom:2vh;
  }
  .font-weight{
    font-weight:600;
    margin-top:2vh;
  }
  .input-div {
    border-bottom: 1px solid #rgb(222,226,230);
    margin-left: 4%;
    margin-right:1vw;
    padding:1vh;
  }
  .check-button{
     border:none;
     font-weight:500;
     padding:1vh;
     background:#3392F3;
     color:white;
     weight:4vw;
     mar
  }

  @media screen and (max-width: 667px) {
    width: 100vw;
    height: 80vh;
    color: black;
    display: block;
    overflow: scroll;
    scroll: none;
    .product-image-style {
      width: 80vw;
      height: 300px;
      display: block;
      margin-left: 1vw;
      margin-bottom: 2vh;
    }
    .flex-style {
      padding: 2%;
      width: 90vw;
      height: 95vh;
      border: 1px solid wheat;
      margin-bottom:-40vh;
    }

    .buy-button,
    .wishlist-button {
      width: 30vw;
      height: 40px;
      color: black;
      background: #3392f3;
      font-size: 1em;
      margin: 2%;
      margin-left: 8vw;
      border-radius: 2px;
      font-weight: 600;
      border: none;
    }
    .product-detail-div {
      padding: 1%;
      margin-left: 4%;
      width: 95vw;
      margin: 4vw;
    }
  }
`;
