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
      <input
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

export default InputField;
