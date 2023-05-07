import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productStyle.css";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://127.1.1.0:9000/api/v1/products");
        const data = await response.json();
        setProducts(data.data.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products Page</h2>
      <div className="products-container">
        {products.map((product: any) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Installments: {product.numberOfInstallments}</p>
            <div>
              <Link to={`/products/${product._id}`}>View Details</Link>
              <Link to={`/products/${product._id}`}>Buy</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
