import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://127.1.1.1:9000/api/v1/products");
        const data = await response.json();
        console.log(data);

        setProducts(data.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="divider">
        <h2>Products Page 📦</h2>
        <Link to="/products/new" className="button">
          Create New Product 🚀👇
        </Link>
      </div>
      <div className="products-container">
        {products.map((product: any) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Installments: {product.numberOfInstallments}</p>
            <div>
              <Link to={`/products/${product._id}`} className="button">
                View Details
              </Link>
              <Link to={`/products/${product._id}/edit`} className="button">
                Edit
              </Link>
              <Link
                to={`/request-installment/${product._id}`}
                className="button"
              >
                Request Installment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
