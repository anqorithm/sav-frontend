import { Link } from "react-router-dom";
import "./Home.css";

const Pages = () => {
  return (
    <>
      <div className="header">
        <Link to="/" className="logo">
          SAV
        </Link>
        <div className="links">
          <Link className="active" to="/">
            <button className="button">Home</button>
          </Link>
          <Link to="/contact">
            {" "}
            <button className="button">Contact</button>
          </Link>
          <Link to="/about">
            {" "}
            <button className="button">About</button>
          </Link>
        </div>
      </div>
      <div className="body center">
        <Link to="/createProduct">
          {" "}
          <button className="button">Create Products</button>
        </Link>
        <Link to="/createTransaction">
          {" "}
          <button className="button">Create Transaction</button>
        </Link>
        <Link to="/installments">
          {" "}
          <button className="button">Installment</button>
        </Link>
      </div>
    </>
  );
};

export default Pages;
