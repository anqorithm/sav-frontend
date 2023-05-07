import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product";
import Installments from "./pages/Installments/Instalments";

import "./App.css";
import CreateProduct from "./pages/Products/CreateProduct";
import UserInstallments from "./pages/Installments/UserInstallment";
import RequestInstallment from "./pages/Installments/RequestInstallment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/installments" element={<Installments />} />
        <Route path="/user/installments/:phone" element={<UserInstallments />} />
        <Route path="/request-installment/:productId" element={<RequestInstallment />} />

      </Routes>
    </Router>
  );
}

export default App;
