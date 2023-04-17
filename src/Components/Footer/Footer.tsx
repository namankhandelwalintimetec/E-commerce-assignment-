import { Footerstyle } from "./FooterStyled";
import returnicon from "../../Assets/Image/30days.png";
import guarantee from "../../Assets/Image/gaurantee.jpg";

const Footerpage = () => {

  const scrollToTop=()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Footerstyle data-testid="footer">
      <div className="footer">
        <div className="footer-to-top">
          <p
            className="center-text"
            onClick={scrollToTop}
          >
            Back To Top
          </p>
        </div>
        <div className="footer-div">
          <div className="botton-footer">
            <div>
              <h6 className="sub-head">Get To Know Us</h6>
              <ul>
                <li>About</li>
                <li>carrer</li>
                <li>Applications</li>
              </ul>
            </div>
            <div>
              <h6 className="sub-head">contact With US</h6>
              <ul>
                <li>Facebook</li>
                <li>Instgram</li>
                <li>Linkdin</li>
              </ul>
            </div>
            <div>
              <h6 className="sub-head">Make Money with Us</h6>
              <ul>
                <li>Sell on Shopsy</li>
                <li>Sell under Shopsy Accelerator</li>
                <li>Protect and Build Your Brand</li>
                <li>Affiliate Fulfilment by shopsy</li>
                <li>Your Products Pay on Merchants</li>
              </ul>
            </div>
            <div>
              <div className="display-img">
                <img className="footer-image" src={guarantee} alt="tag" />
                <p>100% ORIGINAL guarantee for all products at shosy</p>
              </div>
              <div className="display-img">
                <img
                  className="footer-image"
                  src={returnicon}
                  alt="14 Days return valid and get write product also......."
                />
                <p>14 Days return valid and get write product also.......</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footerstyle>
  );
};
export default Footerpage;
