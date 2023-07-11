import { useDispatch, useSelector } from "react-redux";
import { getItemCount } from "../cart/cartSlice";

const OrderItem = ({ cartItemDetails }) => {
  const { category, description, image, price, rating, title, id } =
    cartItemDetails;

  return <div className="flex flex-col">{title}</div>;
};

export default OrderItem;
