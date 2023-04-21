import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import Login from "../Components/LogIn/Login";
import store from "../Redux/Store";
import { BrowserRouter, Router } from "react-router-dom";
import SingUp from "../Components/SingUp/SingUp";

describe("Authentication component", () => {
  beforeEach(() => {
   const setUserCredential=jest.fn();
   const handelAuthentication=jest.fn();


    render(
      <Provider store={store}>
        <BrowserRouter>
          <SingUp
            setUserCredential={setUserCredential}
            handelAuthentication={handelAuthentication}
            toggle="log in"
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("renders sign up form by default", () => {
    const countvalue = screen.getByTestId("Sign Up");
    expect(countvalue).toBeInTheDocument();
  });

   test("calls onChange function with input value", () => {
     const name = screen.getByTestId("name");
     fireEvent.change(name, { target: { value: "Naman" } });
     const input = screen.getByTestId("email");
     fireEvent.change(input, { target: { value: "Naman@gmail.com" } });
     const inputpass = screen.getByTestId("password");
     fireEvent.change(inputpass, { target: { value: "123456" } });
     const button = screen.getByTestId("signUp");
     fireEvent.click(button);
     expect(window.location.pathname).toBe("/");
   });

   test("renders sign up form by default", () => {
     const toggletext = screen.getByTitle("toggle").textContent;
     expect(toggletext).toBe("Sign up");
   });
});
