import { useSelector } from "react-redux";
import { getOrder } from "./orderSlice";
import OrderItem from "./OrderItem";

const PendingOrder = () => {
  const orders = useSelector(getOrder);
  console.log(orders);
  if (!orders.length) return null;
  return (
    <div>
      {orders.map((order) => (
        <OrderItem cartItemDetails={order} key={order.id} />
      ))}
    </div>
  );
};

export default PendingOrder;
