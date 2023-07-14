import { useDispatch } from "react-redux";
import { decreaseItemCount, increaseItemCount } from "./cartSlice";

const UpdateCounterItem = ({ itemID, currentCount }) => {
  const dispatch = useDispatch();

  const buttonStyle = `rounded-full w-6 h-6 bg-slate-800 text-white font-semibold flex items-center justify-center`
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => dispatch(decreaseItemCount(itemID))} className={buttonStyle}>-</button>
      <p className="px-4 py-1 border border-b-1 rounded-md">{currentCount}</p>
      <button onClick={() => dispatch(increaseItemCount(itemID))} className={buttonStyle}>+</button>
    </div>
  );
};

export default UpdateCounterItem;
