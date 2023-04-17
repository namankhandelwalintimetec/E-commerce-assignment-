import styled from "styled-components";

export const WishCart = styled.div`
 width:20vw;
 height:65vh;
 padding:3vh;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .close {
    position: relative;
    top: -5vh;
    color black;
    pointer:courser;
    left:-2.3vh;
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
  .rating{
    border: 1px solid #FFFFFF;
    padding: 2%;
    background: FFFFFF;
    color: black;
    border-radius: 5px;
    font-weight:3vh;border:1px solid #DEE2E6;
  }
  .cross{
	text-decoration: line-through;
	font-weight:600;
	opacity:.9;
  color:#FFA75A;
  }
  .price{
	display: inline-block;
  }

  .back-image:hover {
    scale: 1.2;
  }
  .card-wishlist {
    margin: auto;
    margin-left:.1vw;
    margin-top: 2vh;
    width: 40vh;
    height: 40vh;
    color: black;
  }
  .comment-div{
    font-weight:500;
    padding:1vh;
    border:1px solid #DEE2E6;
    display:flex;
    height:7vh;
    width:25vh;
    margin-top:1vh;
  }
  .wish-image {
    margin-top:-9vh;
    height: 30vh;
    width:17vw;
  }
  .wish-price {
    display: flex;
    gap: 12px;
  }
  .wish-button {
    width: 17vw;
    height: 7vh;
    margin-top: 2vh;
    color: white;
    font-weight: 600;
    background-color: #558eea;
    boder:hide;
    text-align:center;
    padding:2vh;
  }
  .wish-border {
    border: 1px solid #DEE2E6;
    margin-left: -1vh;
    margin-right: 1vh;
  }
  @media screen and (max-width: 667px) {
  .card-wishlist {
    width: 70vh;
    height: 300px;
    background: white;
    color: black;
  }
  .wish-button {
    width: 62vw;
    height: 7vh;
    color: white;
    font-weight: 700;
    background-color: #558eea;
    border:none;
  }
  .wish-image {
    height: 80vw;
  }
}
`;
