import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product";
import Installments from "./pages/Installments/Instalments";
import Transactions from "./pages/Transactions/Transactions";
import Transaction from "./pages/Transactions/Transaction";
import ManageTransaction from "./pages/Transactions/ManageTransaction";
import UserInstallments from "./pages/Installments/UserInstallment";
import RequestInstallment from "./pages/Installments/RequestInstallment";
import CreateProduct from "./pages/Products/CreateProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/createProduct" element={<CreateProduct />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/installments" element={<Installments />} />
          <Route
            path="/user/installments/:phone"
            element={<UserInstallments />}
          />
          <Route
            path="/request-installment/:productId"
            element={<RequestInstallment />}
          />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<Transaction />} />
          <Route
            path="/transactions/:id/edit"
            element={<ManageTransaction />}
          />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
