import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  color: black;
  display: flex;
  overflow: hidden;
  scroll: none;

  .product-image-style {
    width: 98%;
    height: 400px;
    display: block;
    margin-bottom: 7vh;
  }
  .flex-style {
    padding: 2%;
    width: 40%;
    height: 95vh;
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
    border-radius: 2px;
    font-weight: 600;
    border: none;
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
    margin-left: 4%;
    width: 40%;
  }
  .description-div {
    // background:black;
    margin-top: 2vh;
  }
  .rating {
    border: 1px solid black;
    padding: 2%;
    background: rgb(56, 142, 60);
    color: white;
    border-radius: 5px;
  }
  .flex {
    display: flex;
  }

  .price-item {
    padding: 3%;
    font-size: larger;
    font-weight: 700;
  }

  .offer-list {
    list-style-type: none;
    font-size: 1em;
    font-weight: 500;
    margin: auto;
    margin-bottom: 5%;
  }
  .offer-tag {
    font-size: 1em;
    font-weight: 600;
    margin: auto;
    margin-bottom: 5%;
  }
  .input-div {
    border-bottom: 2px solid green;
    margin-left: 4%;
  }

  @media screen and (max-width: 667px) {
    width: 100vw;
    height: 100vh;
    margin: auto;
    color: black;
    display: block;
    overflow: scroll;
    scroll: none;
    .product-image-style {
      width: 80vw;
      height: 400px;
      display: block;
      margin-left: 5vw;
      margin-bottom: 7vh;
    }
    .flex-style {
      padding: 2%;
      width: 90vw;
      height: 95vh;
      border: 1px solid wheat;
    }

    .buy-button,
    .wishlist-button {
      width: 30vw;
      height: 40px;
      color: black;
      background: #3392f3;
      font-size: 1em;
      margin: 2%;
      margin-left: 11vw;
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
