import { useState } from "react";
import InputField from "../Atoms/InputField";
import { authenticationPropType } from "./LoginInterface";

const Login = ({
  toggle,
  errorMessage,
  handleLogIn,
  setUserCredential,
}: authenticationPropType) => {
  const [logInDetail, setLogInDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  const logInInputFields = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: logInDetail,
      onchange: setLogInDetail,
    },
    {
      type: "password",
      name: "password",
      placeholder: "password",
      value: logInDetail,
      onchange: setLogInDetail,
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
          <label className="label" aria-hidden="true" data-testid={toggle}>
            {toggle}
          </label>

          {logInInputFields.map((item) => (
            <InputField
              type={item.type}
              placeHolder={item.placeholder}
              name={item.name}
              value={item.value}
              onChange={item.onchange}
            ></InputField>
          ))}
          <p>{errorMessage}</p>
          <button
            className="button"
            onClick={() => {
              setUserCredential(
                logInDetail.name,
                logInDetail.email,
                logInDetail.password
              );
              handleLogIn();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
