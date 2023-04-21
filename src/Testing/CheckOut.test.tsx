import { render, screen, waitFor, fireEvent,act } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../Redux/Store";
import { Provider } from "react-redux";
import CheckOut from "../Screens/CheckOutPage";

describe("CartScreen", () => {
  const bookOrder = jest.fn();
  bookOrder.mockReturnValueOnce(true);
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <CheckOut />
        </Router>
      </Provider>
    );
  });

  test("renders the CheckOut Page component", async () => {
    const checkOut = screen.getByTestId("checkout");
    await waitFor(() => {
      expect(checkOut).toBeInTheDocument();
    });
  });
  test("check Function is call or not ", () => {
    const orderPlace = screen.getByTestId("navigate");
    expect(orderPlace).toBeInTheDocument();
    fireEvent.click(orderPlace);
    expect(bookOrder.mock.calls.length).toBe(0);
  });

   test("Check Input field fill or not", () => {
     const firstName = screen.getByPlaceholderText("First name");
     fireEvent.change(firstName, { target: { value: "Naman khandelwal"} });
     const phone = screen.getByPlaceholderText("Phone");
     fireEvent.change(phone, { target: { value: 1234567899 } });
     const email = screen.getByPlaceholderText("john@example.com");
     fireEvent.change(email, { target: { value: "john@example.com" } });
     const addresh = screen.getByPlaceholderText("Drop addresh..");
     fireEvent.change(addresh, { target: { value: "jaipur" } });

     const city = screen.getByPlaceholderText("Jaipur");
     fireEvent.change(city, { target: { value: "jaipur" } });

     const state = screen.getByPlaceholderText("*Rajasthan");
     fireEvent.change(state, { target: { value: "jaipur" } });

     const pinCode = screen.getByPlaceholderText("PinCode");
     fireEvent.change(pinCode, { target: { value: 321201 } });

     const cardHolder = screen.getByPlaceholderText("Card Holder");
     fireEvent.change(cardHolder, { target: { value: "Naman khandelwal" } });

     const cardNumber = screen.getByPlaceholderText("Card Number");
     fireEvent.change(cardNumber, { target: { value: 1111222233334444 } });

     const month = screen.getByPlaceholderText("*Jan-Dec");
     fireEvent.change(month, { target: { value: 9 } });

     const year = screen.getByPlaceholderText("*2025");
     fireEvent.change(year, { target: { value: 2025 } });

     const cvv = screen.getByPlaceholderText("*000");
     fireEvent.change(cvv, { target: { value: 111 } });

     const submit = screen.getByTestId("navigate");
     fireEvent.click(submit);
     expect(window.location.href).toBe("http://localhost/");
  });

  test("Notification show or not", () => {
    const cvv = screen.getByPlaceholderText("*000");
    fireEvent.change(cvv, { target: { value: 11 } });
    const notify=screen.getByTestId("notify");
    expect(notify).toBeInTheDocument();


  });
});