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
    margin-left: 10%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  .search {
    margin: auto;
    width: 30%;
    height: 70%;
    color: black;
    border-radius: 20px;
    padding: 10px;
    font-size: 1erm;
    pointer: cursor;
  }

  .serch-button {
    position: absolute;
    margin: 0px;
    margin-right: 25%;
    color: black;
  }
  .li{
    &:hover {
        font-size: 22px;
      }
  }

  .nav-links {
    color: #fff;
    display: flex;
    justify-content: flex-end;
    width: 50%;
    margin-right: 300px;
    
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

  @media (max-width: 1200px) {
    .logo {
      font-size: 30px;
    }
    .serch-button {
      position: fixed;
      margin-left: 0%;
    }

    .search {
      margin-left: 3%;
      width: 30%;
      height: 70%;
      color: black;
      border-radius: 20px;
      padding: 10px;
      font-size: 1erm;
      pointer: cursor;
    }
    .nav-links {
      display: none;
    }
    .nav-links-mobile {
      position: absolute;
      display: block;
      list-style: none;
      box-shadow: rgba(50, 50, 93, 0.23) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      left: 0;
      top: 10%;
      width: 100%;
      background-color: black;
    }
    ul li {
      padding: 32px;
      width: 100%;
      transition: all 0.5s ease-in-out;
      text-align: center;
      display: flex;
    }
    .mobile-menu-icon {
      position: absolute;
      right: -20%;
      display: block;
    }
  }
`;
