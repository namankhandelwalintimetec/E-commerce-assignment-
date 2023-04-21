import styled from "styled-components";

export const EmptyWishListTag = styled.div`
  item-align: center;
  text-align: center;
  margin: auto;
  width: 50vw;
  margin-top: 10vh;

  button {
    display: block;
    margin-left: 25vw;
    margin-top: 10vh;
    width: 10vw;
    height: 8vh;
  }
  @media screen and (max-width: 667px) {
    margin-left:-5vw;
    margin-left:10vh;
    button{
    display:block;
    margin-left:20vw;
    margin-top:10vh;
    width:20vw;
    height:8vh;
    }
  }
`;
