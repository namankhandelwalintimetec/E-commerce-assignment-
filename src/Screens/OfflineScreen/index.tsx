import { Detector } from "react-detect-offline";
import { NoInternet } from "./Style";

const OfflinePage = (props: any) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? (
            props.children
          ) : (
            <NoInternet data-testid="disconnect">
              <span
                className="material-symbols-outlined"
                data-testid="disconnect"
              >
                cloud_off
              </span>
              <p data-testid="Disconnect">No Internet Connection</p>
            </NoInternet>
          )
        }
      />
    </>
  );
};

export default OfflinePage;
