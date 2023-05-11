import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Products() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `http://127.1.1.1:9000/api/v1/products/${id}`
        );
        const data = await response.json();
        console.log(data);
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Products Page 📦</h2>
      <div className="products-container">
        <div className="product-card" key={product._id}>
          <h3>{product.name}</h3>
          <img src={product.imageUrl} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Installments: {product.numberOfInstallments}</p>
          <div>
            <Link to={`/products`} className="button">
              Products
            </Link>
            <Link to={`/products/${product._id}/edit`} className="button">
              Edit
            </Link>
            <Link to={`/request-installment/${product._id}`} className="button">
              Request Installment
            </Link>
          </div>
        </div>
        <h1>Buy Now What Are You Waiting for 🚀😉</h1>
      </div>
    </div>
  );
}

export default Products;
