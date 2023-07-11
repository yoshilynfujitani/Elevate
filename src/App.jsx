import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./features/cart/Cart";
import Home from "./Pages/Home";
import Navbar from "./component/Navbar";
import Shop from "./features/Shop/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
