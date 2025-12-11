import { useLocation, useNavigate } from "react-router-dom";
import '../cart/buypage.css';

function BuyPage() {
  const { state } = useLocation();
  const product = state?.product;

  const navigate = useNavigate();

  if (!product) return <h2>No product selected</h2>;

  return (
    <div className="buy-container">
      <h2>Order Summary</h2>

      <div className="buy-card">
        <img src={product.img} className="buy-img" />

        <div className="buy-info">
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button 
            className="payment-btn" 
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyPage;
