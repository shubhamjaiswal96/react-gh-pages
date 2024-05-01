import Home from "./components/Home";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/new_product" element={<NewProduct />} />
          <Route path="/update_product/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
