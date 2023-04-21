import { useState } from "react";
import InputField from "../Atoms/InputField";
import { signUpPropsType } from "./InterfaceSignUp";

const SingUp = ({
  setUserCredential,
  handelAuthentication,
  toggle
}: signUpPropsType) => {
  const [signUpDetail, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpInputField = [
    {
      type: "name",
      name: "name",
      placeholder: "name",
      value: signUpDetail,
      onchange: setSignUp,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: signUpDetail,
      onchange: setSignUp,
    },
    {
      type: "password",
      name: "password",
      placeholder: "password",
      value: signUpDetail,
      onchange: setSignUp,
    },
  ];

  const preventDefaultNature = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="signup" data-testid="Sign Up">
        <form onSubmit={preventDefaultNature}>
          <label
            htmlFor="chk"
            className="label"
            aria-hidden="true"
            title="toggle"
          >
            Sign up
          </label>
          {signUpInputField.map((item) => (
            <InputField
              type={item.type}
              placeHolder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={item.onchange}
            ></InputField>
          ))}

          <button
            className="button"
            type="submit"
            data-testid="signUp"
            onClick={() => {
              setUserCredential(
                signUpDetail.name,
                signUpDetail.email,
                signUpDetail.password
              );
              handelAuthentication();
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
