import styled from "styled-components";

export const CateStyle = styled.div`
width:100vw;
  .spinner-tag {
    item-align: center;
    margin-left: 50%;
    margin-top: 5%;
  }
  .hide-spinner {
    display: none;
  }
  .product-div{
  text-align: justify right;
  width:90vw;
  margin: 5px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, 400px);
  height: auto;
  list-style: none;
 } 

  .filter-option {
	display:flex;
  }
  .filter-div{
	width:25%;
	margin-left:1vw;
	margin-top:3px;
	padding :2vh;
	box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	height:80vh;
	gap:3vh;
  }
  .rating-box{
	display:flex;
	gap:10%;
  }
  .input-rating{
	border-bottom:1px solid #7E78C0;
	width:50%;
	text-align:center;
	font-weight:600;
  }
 .slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  margin-top:10px;
  margin-bottom:10px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #04AA6D;
  cursor: pointer;
}
.cate-name{
	font-size:larger;
	font-weight:500;
	margin:2px;
	&:active{
		text-decoration:underline;
	}
	&:hover{
		text-decoration:underline;
	}
}
.last-cate{
	margin-bottom:2vh;
}
`;