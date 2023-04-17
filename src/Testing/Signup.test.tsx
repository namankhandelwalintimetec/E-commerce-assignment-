import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import SingUp from "../Components/SingUp/SingUp";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Authentication component", () => {
  let useDispatchMock: any;
  beforeEach(() => {
    useDispatchMock = useDispatch as jest.Mock;
    useDispatchMock.mockClear();
  });
  const mockProps = {
    toggle: "Login",
    error: "",
    handelAuthentication: jest.fn(),
    setUserCredential: jest.fn(),
  };

  test("renders sign up form by default", () => {
    render(<SingUp {...mockProps} />);
    const countvalue = screen.getByTestId("Sign Up");
    expect(countvalue).toBeInTheDocument();
  });
});
