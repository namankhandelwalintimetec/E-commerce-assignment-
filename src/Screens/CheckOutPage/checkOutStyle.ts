import styled from "styled-components";
export const CheckOutPageStyle = styled.div`
  .div-main {
    display: flex;
    padding: 5vh;
  }
  .row {
    display: flex;
  }

  .col-mid {
    width: 40vh;
  }

  .middle-part {
    flex: 50%;
  }

  .middle-div {
    flex: 75%;
  }

  .col-mid,
  .middle-part,
  .middle-div {
    padding: 0 1vw;
  }

  .container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  label {
    margin-bottom: 10px;
    display: block;
  }

  .icon-container {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    margin: 10vw;
    background: black;
  }

  .btn {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  .price {
    width: 10px;
    margin-left: 6vw;
    color: grey;
  }
  .display-flex {
    display: flex;
  }
  @media (max-width: 800px) {
    .row {
      flex-direction: column-reverse;
    }
    .col-mid {
      margin-bottom: 20px;
    }
  }
`;
