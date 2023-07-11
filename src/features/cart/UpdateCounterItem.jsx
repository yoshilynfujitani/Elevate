import { useDispatch } from "react-redux";
import { decreaseItemCount, increaseItemCount } from "./cartSlice";

const UpdateCounterItem = ({ itemID, currentCount }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decreaseItemCount(itemID))}>-</button>
      {currentCount}
      <button onClick={() => dispatch(increaseItemCount(itemID))}>+</button>
    </div>
  );
};

export default UpdateCounterItem;
