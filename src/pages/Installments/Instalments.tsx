import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Installment {
  _id: string;
  user: User;
  productId: string;
  amount: number;
  dueDate: string;
  isPaid: boolean;
  createdAt: string;
  productName: string;
}

function Installments() {
  const [installments, setInstallments] = useState<Installment[]>([]);
  useEffect(() => {
    async function fetchInstallments() {
      try {
        const response = await fetch("http://127.1.1.0:9000/api/v1/installments");
        const data = await response.json();
        
        setInstallments(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchInstallments();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Installments</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Is Paid</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {installments.map((installment) => (
            <tr key={installment._id}>
              <td>{installment.user.name}</td>
              <td>{installment.user.email}</td>
              <td>{installment.user.phone}</td>
              <td><Link to={`/products/${installment.productId}`}>{installment.productName}</Link></td>
              <td>{(installment.amount).toFixed(3)}</td>
              <td>{new Date(installment.dueDate).toLocaleDateString()}</td>
              <td>{installment.isPaid ? 'Yes' : 'No'}</td>
              <td>{new Date(installment.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Installments;