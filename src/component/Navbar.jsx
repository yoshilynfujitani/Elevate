import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/cart">Cart</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Navbar;
