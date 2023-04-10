import { useState } from "react";
import InputField from "../Atoms/InputField";
import { signUpPropsType } from "./InterfaceSignUp";

const SingUp = ({
  setUserCredential,
  error,
  handelAuthentication,
  toggle,
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

  return (
    <>
      <div className="signup" data-testid="Sign Up">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="chk" className="label" aria-hidden="true">
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
