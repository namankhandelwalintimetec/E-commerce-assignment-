import styled from "styled-components";

export const Footerstyle = styled.footer`
  display: flex;
  width: 100vw;
  overflow:hidden;
  background-color: #375fa3;
  color: white;

  .footer {
    display: flex;
    background-color: #375fa3;
    color: white;
	width: 60%;
	font-size:2%;
  }
  .ulp
  {
	list-style-type: none;
	margin-left: 5%;
	font-size: small;
	padding-top: 20px;
  }

  .footer__title{
	color: lightgray;
	font-size: small;
	margin-bottom: 10%;
  }

  .content{
	margin: 2%;
	clear: both;
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
  }
  .ala {
	text-decoration: none;
	color: white;
	margin: 3%;
   }
   .v1{
	border-left: 1px solid gray;
	height: 200px;
	margin-top: 22px;
	margin-bottom: 20px;
	margin-left: 10%;
   }
   .boxcontent {
	white-space: pre-wrap;
   }
   .lastcontent {
	margin-left: 5%;
	font-size: medium;
	font-weight: 500;
   }

   .class12 {
	display: flex;
	flex-direction: row;
   }

	.class11 {
		width: 20vw;
	}
}
`;
