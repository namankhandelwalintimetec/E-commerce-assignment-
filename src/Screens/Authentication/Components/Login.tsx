import { useState } from "react";
import InputField from "../../../Components/Atoms/InputField";

interface propsType {
  toggle: string;
  setUser: (name: string, email: string, passard: string) => void;
  errorMessage: string;
  handleLogIn: () => void;
}

const Login = ({ toggle, errorMessage, handleLogIn, setUser }: propsType) => {
  const [logInDetail, setLogInDetail] = useState({
    name: "",
    email: "",
    passward: "",
  });

  const lohIn = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: logInDetail,
      onchange: setLogInDetail,
    },
    {
      type: "password",
      name: "passward",
      placeholder: "password",
      value: logInDetail,
      onchange: setLogInDetail,
    },
  ];
  return (
    <>
      <>
        <div className="signup">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="chk" className="label" aria-hidden="true">
              {toggle}
            </label>

            {lohIn.map((item) => (
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
                setUser(
                  logInDetail.name,
                  logInDetail.email,
                  logInDetail.passward
                );
                handleLogIn();
              }}
            >
              Login
            </button>
          </form>
        </div>
      </>
    </>
  );
};

export default Login;
