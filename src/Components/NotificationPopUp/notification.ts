import styled from "styled-components";

export const NotificationStyled = styled.div`
  .notification {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1rem;
    width: 50%;
    height: 30%;
    max-width: 600px;
    border-radius: 0.25rem;
    background-color: #f8f9fa;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .notification h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .hide{
    display:none;
  }
  .show{
    display:visiable;
  }

  .notification p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .notification.success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
    font-weight: 700;
  }

  .notification.warning {
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #856404;
  }

  .notification.error {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }

  .notification .close {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .notification .close:hover {
    color: #000;
    opacity: 0.75;
    text-decoration: none;
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
`;
