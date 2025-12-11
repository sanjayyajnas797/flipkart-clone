import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from '../slice/createslice2';
import "./cart.css";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.usercart.items);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  return (
    <div className="cart-container">
      <h2>My Cart ({items.length})</h2>

      {items.length === 0 ? (
        <h3>Your cart is empty!</h3>
      ) : (
        items.map((item) => (
          <div className="cart-card" key={item.id}>
            <img src={item.img} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p className="price">₹{item.price}</p>

              <div className="qty-section">
                <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {items.length > 0 && (
        <div className="total-box">
          <h2>Total: ₹{totalPrice}</h2>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
