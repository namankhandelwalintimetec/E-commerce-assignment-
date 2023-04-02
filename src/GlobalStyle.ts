import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`


.main-div{
  margin: 0;
  color: #000;
  padding: 0;
  display: flex;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  font-family:'Jost', sans-serif;
  background:linear-gradient(to bottom, #422ce9, #7e78c0, #a8a8c7);  
}

.main{
  width: 35%;
  height: 75vh;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
  margin-left:100px;
  
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
    scale: .5;
  }
}

.circular{
  margin:8%;
  margin-left:22vh;
  width:30%;
  height:10%;
  background-color:#6558D2;;
  border-radius: 100rem 100rem 0 0;
  text-align:center;
  padding:10px;
}

.toggle-text {
  font-size: 1rem;
  font-weight: 700;
  color: white;
}

.signup {
  width: 100%;
  height: 300px;
}

@media screen and (max-height: 480px) {
  .circular{
      margin: 8%;
      margin-left: 12vh;
      width: 10rem;
      height: 2rem;
      background-color: #6558D2;
      border-radius: 100rem 100rem 0 0;
      margin-bottom: 0px;
      text-align: center;
      padding: 20px;
    }

  .signup::-webkit-scrollbar {
    display: none;
  }
}

.label {
  color: #fff;
  font-size: 2.3em;
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
  margin-left:25%;
  justify-content: center;
  color: #fff;
  background: #573b8a;
  font-size: 1em;
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

.login label {
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
  display: grid;
   grid-template-columns: repeat(2, 1fr);
  gap: 10px;
 }
 .spinner-tag{
  item-align:center;
  margin-left:50%;
  margin-top: 5%
 }
 
`;
