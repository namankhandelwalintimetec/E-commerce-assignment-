import styled from "styled-components";

export const Wish = styled.div`

  .back-navigation{
	height:100px;
	background:wheat;
    display:flex;
  }
  .back{
	margin-top:5vh;
	font-size:2em;
	font-weight:500;
	font-family: Georgia, 'Times New Roman', Times, serif;
  }
  .back-image
  {
	margin:auto;
	margin-right:1vw;
	margin-left:10vw;
	color:black;
	scale:1.5;
	 &:hover {
        scale:2.5;
     }
  }

  .back-image:hover{
	scale:1.2;
  }
  .card-wishlist{
	margin:auto;
	margin-top:10vh;
	width:10%;
	height:400px;
	background:wheat;
	color:black;
  }
  .wish-image{
	height:70%;
  }
  .wish-price
  {
	display:flex;
    gap:22px;
  }
  .wish-button{
	width:100%;
	height:7vh;
	margin-top:2vh;
	color:white;
	font-weight:700;
	background-color:blue;

  }
  .wish-border{
	border:1px solid white;
	margin-left:2px;
	margin-right:2px;
  }
`