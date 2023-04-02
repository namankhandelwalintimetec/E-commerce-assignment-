import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  box-shadow: rgba(50, 50, 93, 0.23) 0px 30px 30px -20px;
  background-color: #7e78c0;
  
  .logo {
    font-size: 30px;
    margin: 1%;
    margin-left: 5%;
    margin-right:5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: #fff;
    gap: 2em;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .search {
    // margin: auto;
    margin-left:0px;
    width: 50%;
    height: 70%;
    color: black;
    border-radius: 20px;
    padding: 10px;
    font-size: 1erm;
    pointer: cursor;
  }

  .serch-button {
    margin: 0px;
    color: black;
  }

  .nav-linkss {
    color: #fff;
    display: flex;
    justify-content: flex-end;
    width: 70%;
    margin-right: 8%;
    
    li {
      color: white;
      list-style-type: none;
      font-size: 20px;
      padding: 10px 10px;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .mobile-menu-icon {
    display: none;
  }

  
  button {
    border: none;
    text-decoration: none;
    font-size: 20px;
    background: none;
  }

  @media (max-width: 1000px) {
    .logo {
      font-size: 30px;
      position: absolute;
      left:5%;
      
    }

    .search {
      position: absolute;
      margin-left: 0%;
      width: 20%;
      height: auto;
      color: black;
      border-radius: 20px;
      padding: 10px;
      font-size: 1erm;
      pointer: cursor;
      display: block;
      left:25%;
    }
    .nav-linkss{
      display: none;
    }
    .nav-links-mobile-bar{
      position: absolute;
      display: block;
      list-style: none;
      box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      left: 0;
      top: 10%;
      width: 100%;
      background-color: yellow;
    }
    ul li{
      padding: 32px;
      width: 100%;
      transition: all 0.5s ease-in-out;
      text-align: center;
      display: flex;
    }
    .mobile-menu-icon{
      position: absolute;
      right: -20%;
      display: block;
    }
  }
`;
