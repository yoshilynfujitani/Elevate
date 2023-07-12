import { useDispatch } from "react-redux";
import { decreaseItemCount, increaseItemCount } from "./cartSlice";

const UpdateCounterItem = ({ itemID, currentCount }) => {
  const dispatch = useDispatch();

  const buttonStyle = `rounded-full w-6 h-6 bg-purple-300 text-white font-semibold`
  return (
    <div className="flex">
      <button onClick={() => dispatch(decreaseItemCount(itemID))} className={buttonStyle}>-</button>
      <p>{currentCount}</p>
      <button onClick={() => dispatch(increaseItemCount(itemID))} className={buttonStyle}>+</button>
    </div>
  );
};

export default UpdateCounterItem;
