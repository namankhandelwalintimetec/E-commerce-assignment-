import styled from "styled-components";

export const ProductStyle=styled.div`
width:100vw;
height:100vh;
margin:auto;
color:black;
display: flex;
overflow:hidden;
scroll:none;

.product-image-style
{
	width:95%;
	height:400px;
	display:block;
	margin-bottom:7vh;

}
.flex-style
{
	padding:2%;
	width:40%;
	height:95vh;
	border:1px solid wheat;
}
.buy-button,
.wishlist-button{
	width:45%;
	height:40px;
	color:black;
	font-size:1em;
	margin:2%;
	border-radius:2px;
}

.flex-button{
	display:flex;
}

.product-detail-div
{
	padding :1%;
	margin-left:4%;
	width:40%;
}
.description-div{
	// background:black;
	margin-top:2vh;
}
.rating{
	border:1px solid black;
	padding:2%;
	background:rgb(56,142,60);
	color:white;
	border-radius:5px;
}
.flex{
	display:flex;
}

.price-item{
	padding :3%;
	font-size:larger;
	font-weight:700;
}

.offer-list{
	list-style-type: none;
	font-size:1em;
	font-weight:500;
	margin:auto;
	margin-bottom:5%;
}
.offer-tag{
	font-size:1em;
	font-weight:600;
	margin:auto;
	margin-bottom:5%;
}
.input-div{
    border-bottom:2px solid green;
	margin-left:4%;
}
`