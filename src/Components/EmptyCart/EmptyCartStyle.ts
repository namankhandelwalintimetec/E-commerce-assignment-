import styled from "styled-components";

export const EmptyCartTag = styled.div`
 item-align:center;
 text-align:center;
 margin:auto;
 width:60vw;
 margin-top:5vh;

 button{
   display:block;
   margin-left:25vw;
   margin-top:10vh;
   width:10vw;
   height:8vh;
 }
 @media screen and (max-width: 667px) {
  margin-left:10vh;
   button{
   display:block;
   margin-left:20vw;
   margin-top:10vh;
   width:20vw;
   height:8vh;
  }
 }
`