import styled from "styled-components";

export const CateStyle = styled.div`
  width: 100vw;
  .spinner-tag {
    item-align: center;
    margin-left: 50%;
    margin-top: 5%;
  }
  .hide-spinner {
    display: none;
  }
  .product-div {
    text-align: justify right;
    width: 90vw;
    margin: 5px;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, 400px);
    height: auto;
    list-style: none;
  }

  .filter-option {
    // display: flex;
  }
  .filter{
    position: absolute;
    top:22vh;
    left:10vw;
    :hover{
      color:blue;
    }
  }

  .filter-div {
    width: 60vw;
    margin-left: 1vw;
    margin-top: 3px;
    padding: 2vh;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    height: 13vh;
    gap: 3vh;
    display flex;
    padding:2vw;
    margin-left:20vw;
    margin-bottom:3vh;
    margin-top:3vh;
  }
  .rating-box {
    display: flex;
    gap: 1vw;
    margin-left:10vh;
    width-max:40vw;
  }
  .rating-box-second
  {
    display: flex;
    gap: 1vw;
    margin-left:15vh;
    width:20vw;
  }
  .input-rating {
    border-bottom: 1px solid #7e78c0;
    width: 10vw;
    height:4vh;
    text-align: center;
    font-weight: 600;
    border:none;
    border-bottom:1px solid black;
  }
  .slidecontainer {
    width: 20vw;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider:hover {
    opacity: 1;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 90%;
    background: black;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
  .cate-name {
    font-size: larger;
    font-weight: 500;
    margin: 2px;
    &:active {
      text-decoration: underline;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .last-cate {
    margin-bottom: 2vh;
  }
  @media screen and (max-width: 667px) {
    width: 100vw;
    margin-left: 15vw;
    .filter-option {
      display: block;
    }
    .filter-div {
      width: 80vw;
      margin-left: -5vw;
      margin-top: 3vh;
      margin-bottom: 10vh;
      padding: 2vh;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      height: 30vh;
      gap: 5vh;
    }
  }
`;
