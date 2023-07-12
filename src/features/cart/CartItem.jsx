import { useDispatch, useSelector } from "react-redux";
import { getItemCount, removeFromCart } from "./cartSlice";
import UpdateCounterItem from "./UpdateCounterItem";

const CartItem = ({ cartItemDetails }) => {
  const { category, description, image, price, rating, title, id } =
    cartItemDetails;
  const dispatch = useDispatch();
  const count = useSelector(getItemCount(id));
  const itemTotalPrice = price * count
  return (
    <div className="flex flex-col">
      {title}

      <UpdateCounterItem itemID={id} currentCount={count} />
      <p>{itemTotalPrice}</p>
      <button onClick={() => dispatch(removeFromCart(id))}>Delete</button>
    </div>
  );
};

export default CartItem;
