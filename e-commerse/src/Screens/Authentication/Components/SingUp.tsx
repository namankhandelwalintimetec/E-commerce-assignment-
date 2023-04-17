import { useState } from "react";
import InputField from "../../../Components/Atoms/InputField";

interface propsType {
  setUser: (name: string, email: string, passard: string) => void;
  error: string;
  handelAuthentication: () => void;
  toggle: string;
}

const SingUp = ({
  setUser,
  error,
  handelAuthentication,
  toggle,
}: propsType) => {
  const [signUpDetail, setSignUp] = useState({
    name: "",
    email: "",
    passward: "",
  });
  
  const signUp = [
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
      name: "passward",
      placeholder: "password",
      value: signUpDetail,
      onchange: setSignUp,
    },
  ];

  return (
    <>
      <div className="signup">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          {signUp.map((item) => (
            <InputField
              type={item.type}
              placeHolder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={item.onchange}
            ></InputField>
          ))}

          <button
            type="submit"
            onClick={() => {
              setUser(
                signUpDetail.name,
                signUpDetail.email,
                signUpDetail.passward
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
