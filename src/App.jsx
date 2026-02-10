import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "./store/CartSlice";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";

export default function App() {
  const cartCount = useSelector(selectCartCount);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Landing</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// TODO: bạn sẽ viết CartPage ở dưới hoặc tách file riêng
function CartPage() {
  return <div>TODO Cart Page</div>;
}
