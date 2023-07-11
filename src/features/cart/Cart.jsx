import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";
import Home from "../../Pages/Home";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(getCart);
  if (!cart.length) return null;
  return (
    <div>
      {cart.map((cartItem) => (
        <CartItem cartItemDetails={cartItem} key={cartItem.id} />
      ))}
      <Link to="/order">Place Order</Link>
    </div>
  );
};

export default Cart;
