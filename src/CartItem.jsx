import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./store/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const lineTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img className="thumb" src={item.image} alt={item.name} />
      <div className="info">
        <h4>{item.name}</h4>
        <div className="muted">Unit: ${item.price}</div>
        <div className="muted">Total: ${lineTotal}</div>

        <div className="row">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span className="qty">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

          <button className="danger" onClick={() => dispatch(removeFromCart(item.id))}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
