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
      <div className="center">
        <h1>Leading the e-commerce change 💸💶</h1>
        <div>
          <Link to="/products">
            {" "}
            <button className="button"> Products</button>
          </Link>
          <Link to="/transactions">
            {" "}
            <button className="button"> Transaction</button>
          </Link>
          <Link to="/installments">
            {" "}
            <button className="button">Installments</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pages;
