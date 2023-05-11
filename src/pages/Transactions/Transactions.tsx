import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Transactions.css";
function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch(
          "http://127.1.1.0:9000/api/v1/transactions"
        );
        const data = await response.json();
        setTransactions(data.data.data.transactions);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTransactions();
  }, []);

  return (
    <div className="container">
      <h2>Transactions 💸</h2>
      <div className="transactions-container">
        {transactions.map((transaction: any) => (
          <div className="transaction-card" key={transaction._id}>
            <h3>Transaction ID: {transaction._id}</h3>
            <p>Buyer: {transaction.buyer.name}</p>
            <p>Seller: {transaction.seller.name}</p>
            <p>Status: {transaction.status}</p>
            <p>Amount: ${transaction.amount}</p>
            <p>Payment Method: {transaction.paymentMethod}</p>
            <p>Payment ID: {transaction.paymentId}</p>
            <p>Delivery Date: {transaction.deliveryDate}</p>
            <p>Created At: {transaction.createdAt}</p>
            <p>Updated At: {transaction.updatedAt}</p>
            <div>
              <Link to={`/transactions/${transaction._id}`} className="button">
                View Details
              </Link>
              <Link
                to={`/transactions/${transaction._id}/edit`}
                className="button"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;
