import { CheckOutPageStyle } from "./checkOutStyle";
import { useSelector, useDispatch } from "react-redux";
import { collection, doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../Config/Config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StateTypeCheckOut } from "./InterfaceCheckOut";
import Notification from "../../Components/Notification";
import { fetchCartDataValue, removeCart } from "../../Services/ServicesLayer";

const CheckOut = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [addresh, setAddresh] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [amountValue, setAmount] = useState(0);
  const [cvv, setCvv] = useState("");
  const userCart = useSelector((state: StateTypeCheckOut) => state.userCart);
  const amount = useSelector((state: StateTypeCheckOut) => state.Discount);
  const [popUpCheckOutPage, setPopUpCheckOutPage] = useState({
    title: "success",
    message: "Added in WishList",
    type: "success",
    class: "hide",
  });
  const setPopUpBoxProperty = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUpCheckOutPage({
      title: title,
      message: message,
      type: type,
      class: classValue,
    });
  };
  const showPopUp = (
    title: string,
    message: string,
    type: string,
    classValue: string
  ) => {
    setPopUpBoxProperty(title, message, type, classValue);
    setTimeout(() => {
      setPopUpBoxProperty("success", "Added in WishList", "success", "hide");
    }, 1000);
  };

  const fetchCartDatarelode = async () => {
    userCart.map((item) => {
      setAmount(amountValue + Number(item.price));
    });
  };
  window.addEventListener("load", () => {
    fetchCartDatarelode();
  });

  useEffect(() => {
    if (localStorage.getItem("email") === null) {
      navigate("/");
    }
    fetchCartDatarelode();
    return () => {
      setAmount(0);
    };
  }, []);

  const bookOrder = async () => {
    const pincodeRegExpression = /^\d{6}$/;
    const phoneNumberRegExpression = /^\d{3}\d{3}\d{4}$/;
    const cardReguExpression = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const cvvRegularExpression = /^[0-9]{3,4}$/;
    if (
      firstName === "" ||
      addresh === "" ||
      pincodeRegExpression.test(postalCode) ||
      postalCode === "" ||
      cardReguExpression.test(cardNumber)
    ) {
      showPopUp("warning", "Invalid Data", "warning", "show");
    } else {
      try {
        const usersub = doc(db, "Cart", `${localStorage.getItem("email")}`);
        const postco = collection(usersub, "orderDetail");
        const newDoc = doc(postco);
        await setDoc(newDoc, {
          Name: firstName,
          addresh: addresh,
          Amount: amountValue - amount,
          item: userCart.length,
          email: localStorage.getItem("email"),
          id: Math.floor(Math.random() * 10),
          pincode: postalCode,
          itemArray: [...userCart],
        });
        showPopUp("success", "order Placed", "success", "show");
        navigate("/order/placed");
        removeCart(userCart);
      } catch (error) {
        navigate("/order/fail");
      }
    }
  };

  return (
    <CheckOutPageStyle data-testid="checkout">
      <Notification
        title={popUpCheckOutPage.title}
        message={popUpCheckOutPage.message}
        type={popUpCheckOutPage.type}
        classValue={popUpCheckOutPage.class}
      />
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
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
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
                    onChange={(e) => {
                      setAddresh(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Jaipur"
                    required
                  />

                  <div className="row">
                    <div className="middle-part">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="*Rajasthan"
                        required
                      />
                    </div>
                    <div className="middle-part">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="number"
                        id="zip"
                        name="zip"
                        placeholder="*303022"
                        onChange={(e: any) => {
                          setPostalCode(e.target.value);
                        }}
                        required
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
                    required
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="number"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="number"
                    id="expmonth"
                    name="expmonth"
                    placeholder="*Jan-Dec"
                    required
                  />

                  <div className="row">
                    <div className="middle-part">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="number"
                        id="expyear"
                        name="expyear"
                        placeholder="*2025"
                        required
                      />
                    </div>
                    <div className="middle-part">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="number"
                        id="cvv"
                        name="cvv"
                        placeholder="*000"
                        required
                        onChange={(e) => {
                          setCvv(e.target.value);
                        }}
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
              <b>{amountValue - amount}</b>
            </span>
          </p>
        </div>
      </div>
    </CheckOutPageStyle>
  );
};

export default CheckOut;
