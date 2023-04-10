import { Input } from "./InputFieldStyled";

interface propsType {
  type: string;
  placeHolder: string;
  name: string;
  value: {
    email: string;
    password: string;
  };
  onChange: (
    value: React.SetStateAction<{
      name: string;
      email: string;
      password: string;
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
        data-testid={name}
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

export default InputField;
