import styled from "styled-components";

export const OrderSummary = styled.div`
  margin: auto;
  text-align: center;
  item-align: center;
  .summary-div {
    width: 81vw;
    height: 55vh;
    border: 2px solid black;
    margin-left: 10vw;
    margin-top: 5vh;
  }
  .top-div {
    background: #f0f2f2;
    display: flex;
    margin-top: 0vh;
    gap: 30vw;
    height: 10vh;
    font-weight: 700;
    font-style: larger;
    padding: 1vw;
    border: 1px solid #d5d9d9;
    border-radius-top: 10vw;
    width: 80.6vw;
  }

  .image-order {
    width: 10vw;
    height: 20vh;
  }
  .status {
    font-size: 2vw;
    font-weight: 700;
    margin-left: -65vw;
    margin-top: 3vh;
  }
  .middle-part {
    display: flex;
    gap: 15vw;
    font-weight: 600;
    button {
      border: none;
      background: #00718d;
      padding: 1vh;
      color: white;
    }
  }
  .itemscroll {
	 overflow:scroll;
  }
  .border {
    position: relative;
    bottom: -5vh;
  }
  .achive {
    position: relative;
    bottom: -15%;
    left: -40%;
    color: #00718d;
    font-size: larger;
    font-weight: 600;
    paddign: 2vw;
  }
`;
