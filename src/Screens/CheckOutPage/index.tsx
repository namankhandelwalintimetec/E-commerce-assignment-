import { CheckOutPageStyle } from "./checkOutStyle";
import { useSelector, useDispatch } from "react-redux";
import { collection, doc, setDoc } from "@firebase/firestore";
import { db } from "../../Config/Config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateTypeCheckOut } from "./InterfaceCheckOut";

const CheckOut = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState();
  const [addresh, setAddresh] = useState();
  const [postalCode, setPostalCode] = useState();
  const cardValue = useSelector((state: StateTypeCheckOut) => state.CardValue);

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      navigate("/");
    }
  }, []);

  const bookOrder = async () => {
    try {
      const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
      const postco = collection(usersub, "oredrdetail");
      const newDoc = doc(postco);
      await setDoc(newDoc, {
        Name: firstName,
        addresh: addresh,
        Amount: cardValue,
        email: localStorage.getItem("email"),
        id: Math.floor(Math.random() * 10),
        pincode: postalCode,
      });
      navigate("/order/placed");
    } catch (error) {
      navigate("/order/fail");
      console.log(error);
    }
  };

  return (
    <CheckOutPageStyle data-testid="checkout">
      <div className="div-main">
        <div className="middle-div">
          <div className="container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="row">
                <div className="middle-part">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e: any) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">Address</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Drop addresh.."
                    onChange={(e: any) => {
                      setAddresh(e.target.value);
                    }}
                  />
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Jaipur"
                  />

                  <div className="row">
                    <div className="middle-part">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Rajasthan"
                      />
                    </div>
                    <div className="middle-part">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="303022"
                        onChange={(e: any) => {
                          setPostalCode(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="middle-part">
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Rahul Bansal"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="Jan-Dec"
                  />

                  <div className="row">
                    <div className="middle-part">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2025"
                      />
                    </div>
                    <div className="middle-part">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="000"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" name="sameadr" /> Shipping address same
                as billing
              </label>
              <input
                type="submit"
                value="Continue to checkout"
                className="btn"
                onClick={bookOrder}
                data-testId="navigate"
              />
            </form>
          </div>
        </div>
        <div className="col-mid">
          <div className="display-flex">
            <h5>Cart</h5>
            <div className="price">
              <h5>Amount</h5>
            </div>
          </div>
          <p>
            Total
            <span className="price">
              <b>{cardValue}</b>
            </span>
          </p>
        </div>
      </div>
    </CheckOutPageStyle>
  );
};

export default CheckOut;
