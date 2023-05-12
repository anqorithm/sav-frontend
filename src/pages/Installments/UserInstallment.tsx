import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
}

interface RouteParams {
    phone: string;
}

function UserInstallments() {
    const [installments, setInstallments] = useState<Installment[]>([]);
    const { phone } = useParams<RouteParams>();

    useEffect(() => {
        async function fetchInstallments() {
            try {
                const response = await fetch(`http://127.1.1.0:9000/api/v1/installments/user/${phone}`);
                const data = await response.json();
                console.log(data);

                setInstallments(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchInstallments();
    }, [phone]);

    const handlePayment = async (installmentId: string) => {
        try {
            const response = await fetch(`http://127.1.1.0:9000/api/v1/installments/${installmentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isPaid: true })
            });

            const data = await response.json();

            if (response.status == 200) {
                setInstallments((prevInstallments) =>
                    prevInstallments.map((installment) => {
                        if (installment._id === installmentId) {
                            return { ...installment, isPaid: true };
                        }
                        return installment;
                    })
                );
            } else {
                console.error('Error updating payment status:', data.message);
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">User Installments</h1>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Product ID</th>
                        <th>Amount</th>
                        <th>Due Date</th>
                        <th>Is Paid</th>
                        <th>Created At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {installments.map((installment) => (
                        <tr key={installment._id}>
                            <td>{installment.productId}</td>
                            <td>{(installment.amount).toFixed(3)}</td>
                            <td>{new Date(installment.dueDate).toLocaleDateString()}</td>
                            <td>{installment.isPaid ? 'Yes' : 'No'}</td>
                            <td>{new Date(installment.createdAt).toLocaleDateString()}</td>
                            <td>
                                {!installment.isPaid && (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handlePayment(installment._id)}
                                    >
                                        Pay
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserInstallments;