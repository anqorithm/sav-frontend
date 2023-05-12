import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

interface RouteParams {
  productId: string;
}

interface Product {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

function RequestInstallment() {
  const { productId } = useParams<RouteParams>();
  const [product, setProduct] = useState<Product | null>(null);
  const [numberOfMonths, setNumberOfMonths] = useState<number>(4);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://127.1.1.0:9000/api/v1/products/${productId}`
        );
        const data = await response.json();
        console.log(data);

        setProduct(data.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const installmentData = {
      numberOfMonths,
      user: { name, email, phone },
      productId,
      price: product?.price,
    };

    try {
      const response = await fetch(
        "http://127.1.1.0:9000/api/v1/installments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(installmentData),
        }
      );

      const data = await response.json();
      toast.success("Installment has been created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if (data.success) {
        console.log("Installment request submitted successfully");
        // Reset the form if needed or navigate to another page
      } else {
        console.error("Error submitting installment request:", data.message);
      }
    } catch (error) {
      console.error("Error submitting installment request:", error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1>Request Installment 💸😉</h1>
      <Row>
        <Col md={6}>
          {product && (
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Form.Group controlId="productPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={product.price}
                    readOnly
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="numberOfMonths">
              <Form.Label>Number of Months</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={numberOfMonths}
                onChange={(event) =>
                  setNumberOfMonths(parseInt(event.target.value))
                }
                required
              />
            </Form.Group>
            <button className="button">Submit</button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default RequestInstallment;
