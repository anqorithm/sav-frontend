import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CreateTransaction.css";

import { useNavigate } from "react-router-dom";

function CreateTransaction() {
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerPhone, setSellerPhone] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !buyerName ||
      !buyerEmail ||
      !buyerPhone ||
      !sellerName ||
      !sellerEmail ||
      !sellerPhone ||
      !status ||
      !amount ||
      !paymentMethod ||
      !deliveryDate
    ) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const transactionData = {
      status,
      amount: parseFloat(amount),
      paymentMethod,
      deliveryDate,
      buyer: {
        name: buyerName,
        email: buyerEmail,
        phone: buyerPhone,
      },
      seller: {
        name: sellerName,
        email: sellerEmail,
        phone: sellerPhone,
      },
    };

    try {
      const response = await fetch(
        "http://127.1.1.0:9000/api/v1/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transactionData),
        }
      );
      const data = await response.json();
      toast.success("Transaction has been created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/transactions/" + data.data.data.transaction._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2>Create Transaction 💸</h2>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="buyerName">Buyer Name:</label>
              <input
                type="text"
                id="buyerName"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="Enter buyer's name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="buyerEmail">Buyer Email:</label>
              <input
                type="email"
                id="buyerEmail"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                placeholder="Enter buyer's email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="buyerPhone">Buyer Phone:</label>
              <input
                type="tel"
                id="buyerPhone"
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                placeholder="Enter buyer's phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellerName">Seller Name:</label>
              <input
                type="text"
                id="sellerName"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Enter seller's name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellerEmail">Seller Email:</label>
              <input
                type="email"
                id="sellerEmail"
                value={sellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
                placeholder="Enter seller's email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="sellerPhone">Seller Phone:</label>
              <input
                type="tel"
                id="sellerPhone"
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                placeholder="Enter seller's phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <input
                type="text"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Enter transaction status"
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter transaction amount"
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <input
                type="text"
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                placeholder="Enter payment method"
              />
            </div>
            <div className="form-group">
              <label htmlFor="deliveryDate">Delivery Date:</label>
              <input
                type="date"
                id="deliveryDate"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>
            <button type="submit" className="button">
              Create Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTransaction;
