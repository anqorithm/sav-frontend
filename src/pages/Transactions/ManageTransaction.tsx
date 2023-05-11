import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ManageTransaction.css";
import { ToastContainer, toast } from "react-toastify";
import TransactionDetails from "./Transaction";

function ManageTransactionPage() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState<any>(null);

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const response = await fetch(
          `http://127.1.1.0:9000/api/v1/transactions/${id}`
        );
        const data = await response.json();
        setTransaction(data.data.data.transaction);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTransaction();
  }, [id]);

  const handleReject = async () => {
    try {
      await fetch(`http://127.1.1.0:9000/api/v1/transactions/${id}/reject`, {
        method: "PUT",
      });
      toast.success("Transaction has been rejected successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTransaction({ ...transaction, status: "rejected" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccept = async () => {
    try {
      await fetch(`http://127.1.1.0:9000/api/v1/transactions/${id}/accept`, {
        method: "PUT",
      });
      toast.success("Transaction has been accepted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTransaction({ ...transaction, status: "accepted" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = async () => {
    try {
      await fetch(`http://127.1.1.0:9000/api/v1/transactions/${id}/cancel`, {
        method: "PUT",
      });
      toast.success("Transaction has been canceled successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTransaction({ ...transaction, status: "canceled" });
    } catch (error) {
      console.log(error);
    }
  };

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <h2>Manage Transaction 💸</h2>
      <div className="transaction-card">
        <h3>Transaction ID: {transaction._id}</h3>
        <p>Buyer: {transaction.buyer.name}</p>
        <p>Seller: {transaction.seller.name}</p>
        <p>
          Status:{" "}
          <span
            className={
              transaction.status == "accepted"
                ? "accepted"
                : transaction.status == "rejected"
                ? "rejected"
                : "canceled"
            }
          >
            {" "}
            {transaction.status}
          </span>{" "}
        </p>
        <p>Amount: ${transaction.amount}</p>
        <p>Payment Method: {transaction.paymentMethod}</p>
        <p>Payment ID: {transaction.paymentId}</p>
        <p>Delivery Date: {transaction.deliveryDate}</p>
        <p>Created At: {transaction.createdAt}</p>
        <p>Updated At: {transaction.updatedAt}</p>
        <div className="action-buttons">
          <button className="button" onClick={handleReject}>
            Reject
          </button>
          <button className="button" onClick={handleAccept}>
            Accept
          </button>
          <button className="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <Link to="/transactions" className="button">
        Back to Transactions
      </Link>
    </div>
  );
}

export default ManageTransactionPage;
