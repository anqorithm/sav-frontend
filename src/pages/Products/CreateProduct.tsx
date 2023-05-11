import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./productStyle.css";
function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [numberOfInstallments, setNumberOfInstallments] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!name || !description || !price || !imageUrl || !numberOfInstallments) {
      toast.error("Please note that all fields are required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    const productData = {
      name,
      description,
      price,
      imageUrl,
      numberOfInstallments,
    };
    try {
      const response = await fetch("http://127.1.1.0:9000/api/v1/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });
      const data = await response.json();
      console.log("Product created:", data);
      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setNumberOfInstallments("");
      toast.success("Product has been created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      alert("Product does not created!");
      console.log(error);
    }
  };

  return (
    <div className="cont">
      <ToastContainer />
      <h2 className="crp lb tl">Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label className="crp lb name">Name:</label>
          </div>
          <div className="col-75">
            <input
              className="crp inp name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="crp lb ds">Description:</label>
          </div>
          <div className="col-75">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the product.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="crp lb pr">Price: </label>
          </div>
          <div className="col-75">
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter the Price.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="crp lb imgURL">Image URL: </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter product's image URL.."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label className="crp lb num">Number of Installments: </label>
          </div>
          <div className="col-75">
            <input
              type="number"
              value={numberOfInstallments}
              onChange={(e) => setNumberOfInstallments(e.target.value)}
              placeholder="Enter the number of installmentsL.."
            />
          </div>
        </div>

        <br />
        <div className="cnt">
          <button className="btn" type="submit">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
