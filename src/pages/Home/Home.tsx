import "./Home.css";

const Pages = () => {
  return (
    <>
      <div className="header">
        <a href="" className="logo">
          SAV
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div className="body center">
        <div className="btn-group">
          <a href="/createProduct">
            {" "}
            <button className="button">Create Products</button>
          </a>
          <a href="/createTransaction">
            {" "}
            <button className="button">Create Transaction</button>
          </a>
          <a href="/installments">
            {" "}
            <button className="button">Installment</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pages;
