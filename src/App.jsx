import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import Shop from "./features/Shop/Shop";
import OrderView from "./features/Order/OrderView";
import PendingOrder from "./features/Order/PendingOrder";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/order" element={<OrderView />} />
          <Route path="/pendingOrder" element={<PendingOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
