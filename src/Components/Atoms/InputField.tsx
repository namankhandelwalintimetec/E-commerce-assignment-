import styled from "styled-components";

interface propsType {
  type: string;
  placeHolder: string;
  name: string;
//   value: string;
  value: {
    email: string;
    passward: string;
  };
  onChange: (
    value: React.SetStateAction<{
	  name:string;
      email: string;
      passward: string;
    }>
  ) => void;
}

const InputField = ({
  type,
  placeHolder,
  name,
  value,
  onChange,
}: propsType) => {
  return (
    <>
      <Input
        type={type}
        name={name}
        placeholder={placeHolder}
        required
        onChange={(event) => {
          onChange((prev) => ({
            ...prev,
            [name]: event.target.value,
          }));
        }}
      />
    </>
  );
};

const Input = styled.input`
  width: 60%;
  height: 25px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 10px auto;
  margin-left:25%;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export default InputField;
