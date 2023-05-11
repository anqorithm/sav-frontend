import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function TransactionDetails() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState<any>(null);

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const response = await fetch(
          `http://127.1.1.0:9000/api/v1/transactions/${id}`
        );
        const data = await response.json();
        console.log(data);
        setTransaction(data.data.data.transaction);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTransaction();
  }, [id]);

  if (!transaction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Transaction Details 💸</h2>
      <div className="transaction-card">
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
      </div>
      <Link to="/transactions" className="button">
        Back to Transactions
      </Link>
    </div>
  );
}

export default TransactionDetails;
