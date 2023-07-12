import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../features/cart/cartSlice";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cart = useSelector(getCart)
  const NoOfItems = cart.length
  return (
    <div className="py-5 sticky top-0 bg-white w-full px-10 shadow-md">

      {/* Mobile */}
      <div className="container flex items-center ">
        <div className="flex-grow text-center text-3xl font-bold">Elevate</div>
        <div className="flex-none"><Link to="/cart">Cart({NoOfItems})</Link><button onClick={() => setIsOpen((prevState) => !prevState)}>Menu</button></div>
        {isOpen && (<div className="relative  right-12">
          <div className="absolute flex flex-col  bg-red-200 my-6 rounded-md">
            <Link to="/shop" onClick={() => setIsOpen((prevState) => !prevState)}><p className="text-right">Shop</p></Link>
            <Link to="/pendingOrder" onClick={() => setIsOpen((prevState) => !prevState)}><p className="text-right">Orders</p></Link></div></div>)}
      </div>



      {/* Desktop */}
      <div className="hidden container lg:block">
        <Link to="/cart">Cart({NoOfItems})</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/pendingOrder">Orders</Link>
      </div>
    </div>
  );
};

export default Navbar;
