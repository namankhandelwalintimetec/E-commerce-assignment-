import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";
import { SpinnerProps } from "../Interfaces";

const Override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

const Spinner = ({ time }: SpinnerProps) => {
  return (
    <>
      <ClipLoader
        color="#ffffff"
        loading={time}
        cssOverride={Override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Spinner;
