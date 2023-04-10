import styled from "styled-components";

export const WishCart = styled.div`
  .close {
    position: relative;
    top: 4px;
    color black;
    pointer:courser;
  }
  .back-image {
    margin: auto;
    margin-right: 1vw;
    margin-left: 10vw;
    color: black;
    scale: 1.5;
    &:hover {
      scale: 2.5;
    }
  }
  .cross{
	text-decoration: line-through;
	font-weight:800;
	opacity:.6;
  }
  .price{
	display: inline-block;
  }

  .back-image:hover {
    scale: 1.2;
  }
  .card-wishlist {
    margin: auto;
    margin-top: 10vh;
    width: 70%;
    height: 400px;
    background: white;
    color: black;
  }
  .wish-image {
    height: 70%;
  }
  .wish-price {
    display: flex;
    gap: 22px;
  }
  .wish-button {
    width: 100%;
    height: 7vh;
    margin-top: 2vh;
    color: white;
    font-weight: 700;
    background-color: #558eea;
  }
  .wish-border {
    border: 1px solid white;
    margin-left: 2px;
    margin-right: 2px;
  }
`;
