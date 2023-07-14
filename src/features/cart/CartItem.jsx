import { useDispatch, useSelector } from "react-redux";
import { getItemCount, removeFromCart } from "./cartSlice";
import UpdateCounterItem from "./UpdateCounterItem";
import { BsTrash3Fill } from "react-icons/bs";
const CartItem = ({ cartItemDetails }) => {
  const { category, description, image, price, rating, title, id } =
    cartItemDetails;
  const dispatch = useDispatch();
  const count = useSelector(getItemCount(id));
  const itemTotalPrice = price * count
  return (
    <div className="flex gap-4 ">
      <div className="w-20 h-20 justify-between">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-semibold">   {title}</h1>

        <UpdateCounterItem itemID={id} currentCount={count} />
        <p>${itemTotalPrice}</p>

      </div>
      <div className="">
        <button onClick={() => dispatch(removeFromCart(id))}><BsTrash3Fill className="text-red-400" /></button>
      </div>
    </div>
  );
};

export default CartItem;
