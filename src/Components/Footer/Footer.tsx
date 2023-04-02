import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { RiAdvertisementFill } from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
// import { Footerstyle } from "./FooterStyled";
import { Footerstyle } from "./FooterStyled";

function Footerpage() {
  return (
    <Footerstyle>
      <div>
        <div className="footer">
          <div>
            <ul className="ulp">
              <h6 className="footer__title">ABOUT</h6>
              <li>
                <p className="content">Contact Us</p>
              </li>
              <li>
                <p className="content">About Us</p>
              </li>
              <li>
                <p className="content">Carrers</p>
              </li>
              <li>
                <p className="content">Flipkart Stories</p>
              </li>
              <li>
                <p className="content">Press</p>
              </li>
              <li>
                <p className="content">Flipkart WholeSale</p>
              </li>
              <li>
                <p className="content">coporate information</p>
              </li>
            </ul>
          </div>

          <div>
            <ul className="ulp">
              <h6 className="footer__title">HELP</h6>
              <li>
                <p className="content">Payment</p>
              </li>
              <li>
                <p className="content">Shipping</p>
              </li>
              <li>
                <p className="content">Cancellation & Return </p>
              </li>
              <li>
                <p className="content">FAQ</p>
              </li>
              <li>
                <p className="content">Report infringement</p>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <ul className="ulp">
              <h6 className="footer__title">POLICY</h6>
              <li>
                <p className="content">Return Policy</p>
              </li>
              <li>
                <p className="content">Term Of Use</p>
              </li>
              <li>
                <p className="content">Security </p>
              </li>
              <li>
                <p className="content">Privacy</p>
              </li>
              <li>
                <p className="content">Sitemap </p>
              </li>
              <li>
                <p className="content">ERP Compliance</p>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <ul className="ulp">
              <h6 className="footer__title">SOCIAL</h6>
              <li>
                <a href="https://www.facebook.com/flipkart/" className="ala">
                  Facebook
                </a>
              </li>
              <li>
                <a href="youtube.com/c/flipkart" className="ala">
                  Twitter
                </a>
              </li>
              <li>
                <a href="youtube.com/c/flipkart" className="ala">
                  Youtuve
                </a>
              </li>
            </ul>
          </div>

          <div className="vl"></div>

          <div className="footer__data">
            <ul className="ulp class12">
              <div className="class11">
                <h6 className="footer__title">Mail Us:</h6>
                <li>
                  <div className="">
                    <div className="boxcontent">
                      Flipkart Internet Private Limited, Buildings Alyssa,
                      Begoina & Clove Emabassy Tech Village, outer ring road
                      Bengularu karnataka
                    </div>
                  </div>
                </li>
              </div>
              <div className="class11">
                <h6 className="footer__title">Mail Us:</h6>
                <li>
                  <div className="">
                    <div className="boxcontent">
                      Flipkart Internet Private Limited, Buildings Alyssa,
                      Begoina & Clove Emabassy Tech Village, outer ring road
                      Bengularu karnataka
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer">
          <div className="lastcontent">
            <p>
              <RiShoppingBagFill /> Become a seller
            </p>
          </div>
          <div className="lastcontent">
            <p>
              <RiAdvertisementFill /> advertisement
            </p>
          </div>
          <div className="lastcontent">
            <p>
              <BiHelpCircle /> Help
            </p>
          </div>
          <div className="lastcontent">© 2007-2022 Flipkart.com</div>
          <div className="lastcontent">
            {/* <img src={companyLogo} alt="BigCo Inc. logo" /> */}
          </div>
        </div>
      </div>
    </Footerstyle>
  );
}
export default Footerpage;
