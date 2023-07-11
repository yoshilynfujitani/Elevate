import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";

import OrderItem from "./OrderItem";
import { Link, useNavigate } from "react-router-dom";
import { confirmOrder } from "./orderSlice";

const OrderView = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  function handleOrder(e) {
    e.preventDefault();
    const cartItems = cart.map((cartItem) => cartItem);
    dispatch(confirmOrder(cartItems));
    dispatch(clearCart());
    navigate("/pendingOrder");
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <form onSubmit={handleOrder}>
        {cart.map((cartItem) => (
          <OrderItem cartItemDetails={cartItem} key={cartItem.id} />
        ))}

        {cart.length > 0 && <button type="submit">Confirm Order</button>}
      </form>
    </div>
  );
};

export default OrderView;
