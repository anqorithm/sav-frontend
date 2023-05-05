import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
      const response = await fetch("http://127.1.1.1:9000/api/v1/products", {
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
    <div>
      <ToastContainer />
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <br />
        <label>
          Number of Installments:
          <input
            type="number"
            value={numberOfInstallments}
            onChange={(e) => setNumberOfInstallments(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
