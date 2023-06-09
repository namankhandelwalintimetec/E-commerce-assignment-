import { OrderSummary } from "./Style";
import orderImage from "../../Assets/Image/order-placed.jpg";
import {
  fetchCartDataValue,
  fetchOrderSummary,
} from "../../Services/ServicesLayer";
import { orderSummary } from "./OrderSummaryInterface";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { categoryList } from "../../Components/Links";
import { useSelector } from "react-redux";
import { propType } from "../Home/InterfaceHome";

const OrderSummry = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [data, setData] = useState<orderSummary[]>([]);
  const fetchCartDatarelode = async () => {
    const cartData = await fetchCartDataValue();
    if (cartData !== undefined) {
      cartData.map((item) => {
        const data = item as propType;
        const value = Number(data.price) * Number(data.qua);
        setAmount(amount + value);
      });
    }
  };
  window.addEventListener("load", () => {
    setData([]);
    fetchCartDatarelode();
  });

  useEffect(() => {
    fetchOrderHistory();
    return () => {
      setData([]);
    };
  }, []);
  

  const fetchOrderHistory = async () => {
    const orderHistory = await fetchOrderSummary();
    if (orderHistory !== undefined) {
      console.log(fetchOrderSummary());
      orderHistory.map((item) => {
        const data = item as orderSummary;
        setData((arr) => [...arr, data]);
      });
    }
  };

  const navigateToProductPage = (category: string, id: string) => {
    navigate(`/product/${category}/${id}`);
  };
  return (
    <OrderSummary>
      <div title="order-page">
        <h1>Your Orders</h1>
      </div>
      {data.map((order) => (
        <>
          <div className="summary-div">
            <div className="top-div">
              <p>order</p>
              <p>Amount  {order.Amount}</p>
              <p>OrderId  {order.id}</p>
            </div>
            <h3 className="status">SuccessFul</h3>
            <div className="middle-part">
              <img src={orderImage} className="image-order"></img>
              <div></div>
              <div className="itemscroll">
                {order.itemArray.map((item) => (
                  <div key={item.id}>
                    <p>kkqwfma</p>
                    <button
                      onClick={() => {
                        navigateToProductPage(item.cate, item.id);
                      }}
                    >
                      Buy it again
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="border"></div>
            <div className="achive">Achive Order</div>
          </div>
        </>
      )
      )}
    </OrderSummary>
  );
};

export default OrderSummry;
