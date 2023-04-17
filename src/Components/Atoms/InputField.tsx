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
        data-testid={name}
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

export default InputField;
