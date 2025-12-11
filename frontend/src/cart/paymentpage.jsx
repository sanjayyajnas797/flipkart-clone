import { useNavigate } from "react-router-dom";
import '../cart/payment.css';

function Payment() {
  const navigate = useNavigate();

  const handlePay = () => {
    navigate("/success");
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>

      <div className="payment-box">
        <button onClick={handlePay}>Pay with UPI</button>
        <button onClick={handlePay}>Cash on Delivery</button>
        <button onClick={handlePay}>Credit/Debit Card</button>
      </div>
    </div>
  );
}

export default Payment;
