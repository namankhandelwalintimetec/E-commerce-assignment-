import ClipLoader from "react-spinners/ClipLoader";
import { Override } from "../Constant";
import { SpinnerProps } from "../Constant";

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
