import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";
import Home from "../../Pages/Home";

const Cart = () => {
  const cart = useSelector(getCart);
  if (!cart.length) return null;
  return (
    <div>
      {cart.map((cartItem) => (
        <CartItem cartItemDetails={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
};

export default Cart;
