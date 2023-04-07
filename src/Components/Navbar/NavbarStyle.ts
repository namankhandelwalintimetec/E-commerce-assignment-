import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  height: 13vh;
  box-shadow: rgba(50, 50, 93, 0.23) 0px 30px 30px -20px;

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

  .hide {
    display: none;
  }
  .show {
    display: visiable;
    scale: 1.3;
  }
`;
