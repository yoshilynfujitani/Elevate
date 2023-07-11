import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Link to="/cart">Cart</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/pendingOrder">Orders</Link>
      </div>
    </div>
  );
};

export default Navbar;
