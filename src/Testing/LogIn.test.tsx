import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import Login from "../Components/LogIn/Login";
import store from "../Redux/Store";
import { BrowserRouter, Router } from "react-router-dom";

describe("Authentication component", () => {
  const mockhandleLogIn = jest.fn();
  const setValue = jest.fn();

  beforeEach(() => {
    
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login
            handleLogIn={mockhandleLogIn}
            setUserCredential={setValue}
            toggle="log in"
          />
        </BrowserRouter>
      </Provider>
    );
  });

  test("renders sign up form by default", () => {
    const countvalue = screen.getByTestId("authentication");
    expect(countvalue).toBeInTheDocument();
  });

  test("calls onChange function with input value", () => {
    const input = screen.getByTestId("email");
    fireEvent.change(input, { target: { value: "Naman@gmail.com" } });
    const inputpass = screen.getByTestId("password");
    fireEvent.change(inputpass, { target: { value: "123456" } });
    const button = screen.getByTestId("loginbutton");
    fireEvent.click(button);
    expect(window.location.pathname).toBe("/");
  });
  
  test("renders sign up form by default", () => {
    const toggletext = screen.getByTitle("toggle").textContent;
    expect(toggletext).toBe("log in");
  });

});
