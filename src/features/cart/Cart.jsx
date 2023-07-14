import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import CartItem from "./CartItem";
import Home from "../../Pages/Home";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(getCart);
  if (!cart.length) return null;

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  return (
    <div className="container px-10 py-10 min-h-[600px] bg-slate-50 flex flex-col justify-between">
      {cart.map((cartItem) => (
        <CartItem cartItemDetails={cartItem} key={cartItem.id} />
      ))}
      <div className="">
        <p className="text-md font-semibold">Total Price: ${totalPrice} </p>
        <Link to="/order">Place Order</Link>
      </div>
    </div>
  );
};

export default Cart;
