import styled from "styled-components";

export const WishlistNav = styled.div`
border:1px solid white;
padding:5px;
height:10px;
color:white;
height:10px;

.back-navigation{
	height:100px;
	background:${({ theme }) => theme.colors.Nav};
    display:flex;
  }

   .back-image
  {
	margin:auto;
	margin-right:1vw;
	margin-left:10vw;
	color:white;
	scale:1.5;
	 &:hover {
        scale:2.5;
     }
  }

  .back-image:hover{
	scale:1.2;
  }
  .back{
	margin-top:5vh;
	font-size:2em;
	font-weight:500;
	font-family: Georgia, 'Times New Roman', Times, serif;
  }
`