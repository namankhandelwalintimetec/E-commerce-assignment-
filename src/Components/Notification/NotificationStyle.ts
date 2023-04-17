import styled from "styled-components";

export const NotificationStyled = styled.div`
  .notification {
    position: fixed;
    top: 10%;
    left: 85%;
    transform: translate(-50%, 0);
    padding: 1rem;
    width: 30%;
    height: 20%;
    max-width: 600px;
    border-radius: 0.25rem;
    background-color: #f8f9fa;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    overflow: scroll;
    z-index: 11;
    transition: all 0.3s ease-in-out;
    color: white;
  }
  .notification::-webkit-scrollbar {
    display: none;
  }

  .notification h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .hide {
    display: none;
  }
  .show {
    display: visiable;
  }

  .notification p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .notification.success {
    background-color: #3ded97;
    border-color: #c3e6cb;
    font-weight: 700;
    color: white;
  }

  .notification.warning {
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: black;
  }

  .notification.error {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: black;
  }

  .notification.success .close {
    color: #155724;
  }

  .notification.warning .close {
    color: #856404;
  }

  .notification.error .close {
    color: #721c24;
  }

  @media screen and (max-width: 667px) {
    .notification {
      position: fixed;
      top: 15vh;
      left: 40vh;
      transform: translate(-50%, 0);
      padding: 1rem;
      width: 50vw;
      height: 10vh;
      max-width: 600px;
      border-radius: 0.25rem;
      background-color: #f8f9fa;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      color: black;
      font-size: 3vw;
    }
    .notification h3 {
      font-size: 5vw;
      margin-top: 0;
      margin-bottom: 0.5rem;
      color: black;
    }
  }
`;
