import styled from "styled-components";

export const NavStyle = styled.nav`
  position:sticky;
  top:0px;
  display: flex;
  align-items: center;
  height: 15vh;
  box-shadow: rgba(50, 50, 93, 0.23) 0px 30px 30px -20px;
  width: 100vw;

  .dropdown {
    display: none;
  }
  .navbaractive{
    background:black;
    color:white;
  }

  .logo {
    font-size: 2em;
    margin: 1%;
    margin-left: 2%;
    color: black;
    font-weight: 700;
    text-decoration: none;
  }

  .list-bar {
    display: flex;
    color: black;
    gap: 3vw;
    margin-top: auto;
  }
  .list-inside {
    color: black;
    list-style-type: none;
    font-weight: 600;
  }
  li {
    list-style-type: none;
    font-weight: 600;
  }

  .serch-icon {
    margin: auto;
    margin-left: -2vw;
  }

  .search {
    margin-left: 20vw;
    background: #f5f5f6;
    border: 1px solid rgb(245, 245, 246);
    padding: 8px;
    width: 22vw;
    height: 5vh;
  }

  .profile-list {
    display: flex;
    margin: auto;
    margin-right: 2vw;
    gap: 2vw;
    color: black;
  }

  .profile-inside {
    color: black;
    list-style-type: none;
  }
  .color {
    color: black;
    scale: 1.1;
  }

  .hide{
    display: none;
  }
  .profile-inside:hover + .hide {
    display: block;
    padding:2vh;
    color: black;
    position:absolute;
    top:8vh;
    right:5vh;
    text-transform: capitalize;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  }
  .show {
    display: visiable;
    scale: 1.3;
    margin-top: -1vh;
  }
  .card-count {
    color: black;
  }

  @media screen and (max-width: 667px) {
    width: 90vw;
    .logo {
      font-size: 4vw;
      margin: 1%;
      margin-left: 2%;
      color: black;
      font-weight: 700;
      text-decoration: none;
    }
    .list-bar {
      display: none;
    }
    .search {
      margin-left: 10vw;
      background: #f5f5f6;
      border: 1px solid rgb(245, 245, 246);
      padding: 8px;
      width: 35vw;
      height: 5vh;
    }
    .profile-list {
      display: none;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      top: 7vh;
      background-color: black;
      color: white;
      width: 70vw;
      left: -65vw;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      margin-left: -10vw;
    }

    .dropdown-content li {
      color: black;
      padding: 2vw 2vw;
      text-decoration: none;
      display: block;
      background-color: white;
      text-align: left;
      margin-left: -5vw;
    }
    .text {
      margin-left: -20vw;
      margin-top: 2vh;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown {
      display: block;
    }
  }
`;
