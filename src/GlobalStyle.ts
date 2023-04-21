import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  .main-div{
    margin: 0;
    color: #000;
    padding: 0;
    display: flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    font-family:'Jost', sans-serif;
    background:white;  
  }
  .center-empty
  {
    text-align:center;
    margin:auto;
  }
  .main{
    margin-top:-15vh;
    width: 30vw;
    height: 75vh;
    overflow: scroll;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    background:linear-gradient(to bottom, #222ce9, #7e76c0, #a8a8c8); 
  }
  .checkout-div1{
	background:black;
	color:white;
	border:none;
	padding:2vh;
	text-align:center;
	width:20vw;
	font-size:1.5vw;
	margin-top:2vh;
}

  .main::-webkit-scrollbar{
    display: none;
  }

  .toggle {
    scale: 1;
    animation: mymove 5s;
  }

  .togglenot {
    display: none;
  }

  @keyframes mymove {
    50% {
      scale: .8;
    }
  }

  .circular{
    margin:3vw;
    margin-left:23vh;
    width:30%;
    height:10%;
    background-color:#6558D2;;
    border-radius: 100rem 100rem 0 0;
    text-align:center;
    padding:10px;
  }

  input::placeholder {
    font-size: 1vw;
  }
  .toggle-text {
    font-size: 1vw;
    font-weight: 700;
    color: white;
  }

  .signup {
    width: 100%;
    height: 300px;
  }

  .label {
    color: #fff;
    font-size: 2vw;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .9s;
  }

  .button {
    width: 20%;
    height: 40px;
    margin-left:12vw;
    justify-content: center;
    color: #fff;
    background: #6558D2;
    font-size: 1vw;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .9s;
    cursor: pointer;
  }

  .button:hover {
    background: #6d44b8;
  }

  .login {
    height: 460px;
    background: #eee;
    border-radius: 60%/20%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
  }

  .login label{
    color: #573b8a;
    transform: scale(.4);
  }

  .product-card{
    text-align: justify right;
    margin: 38px;
    display: grid;
    gap: 35px;
    grid-template-columns: repeat(auto-fill, 400px);
    height: auto;
    list-style: none;
  } 

  .product-card1{
    text-align: justify right;
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    height: auto;
    list-style: none;
  }

  @media screen and (max-width: 667px) {
    overflow:hidden;
    .signup {
     width: 70vw;
     height: 300px;
    }

    .size-cousoroul{
     width:100vw;
    }

    .main{
      margin-top:-25vh;
      width: 70vw;
      height: 60vh;
      overflow: scroll;
      border-radius: 10px;
      box-shadow: 5px 20px 50px #000;
      margin-left:-12vw;
    }

    .label {
      color: #fff;
      font-size: 5vw;
      justify-content: center;
      display: flex;
      margin: 30px;
      font-weight: bold;
      cursor: pointer;
      transition: .9s;
    }

    .button {
      width: 20vw;
      height: 40px;
      margin-left:25vw;
      justify-content: center;
      color: #fff;
      background: #6558D2;
      font-size: 3vw;
      font-weight: bold;
      margin-top: 20px;
      outline: none;
      border: none;
      border-radius: 5px;
      transition: .9s;
      cursor: pointer;
   }

  .circular{
    margin-left:12vh;
    width:30vw;
    height:10%;
    background-color:#6558D2;;
    border-radius: 100rem 100rem 0 0;
    text-align:center;
    padding:10px;
  }

  .toggle-text {
    font-size: 4vw;
    font-weight: 700;
    color: white;
  }

  input::placeholder {
    font-size: 4vw;
  }

  .product-card1{
    text-align: justify right;
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    height: auto;
    list-style: none;
    margin-top:-14vh;
  }
   @media screen and (max-width: 800px) {
    overflow:hidden;
   }
}
`;
