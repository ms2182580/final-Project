import { useState } from "react";
import Header from "./Header";
import RootLayout from "./RootLayout";

import { useNavigate } from "react-router";

export default function AddNewPro() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function convertToDoubleQuotes(obj) {
    const updatedObject = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        let value = obj[key];

        if (typeof value === "string" && value.includes("'")) {
          value = value.replace(/'/g, '"');
        }

        updatedObject[key] = value;
      }
    }
    return updatedObject;
  }

  function addProduct(e) {
    e.preventDefault();
    const endPoint = `https://fakestoreapi.com/products`;
    const updateData = {
      title: title?.toString(),
      price: parseFloat(price),
      description: description?.toString(),
      category: category?.toString(),
      image: "https://reactnative.dev/img/tiny_logo.png",
    };
    const updatedData = convertToDoubleQuotes(updateData);

    fetch(endPoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        console.log(
          "Response================================================",
          res
        );
        if (!res.ok) {
          throw new Error("Failed to update product");
        }
        return res.json();
      })
      .then((data) => {
        navigate("/Products");
        console.log("Response=======", data);
      })
      .catch((error) => {
        console.error("Error======", error);
      });
  }

  return (
    <>
      <Header />
      <div className="Edit-Products">
        <RootLayout />
        <div className="Edit-item">
          <h2>Add Product</h2>
          <form className="form-item">
            <div className="form-group">
              <label htmlFor="labelName" className="label-text">
                Title:
              </label>
              <input
                type="text"
                id="labelName"
                name="TitleName"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="productPrice" className="label-text">
                Price:
              </label>
              <input
                value={price}
                type="number"
                id="productPrice"
                name="productPrice"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription" className="label-text">
                Description:
              </label>
              <textarea
                value={description}
                id="productDescription"
                name="productDescription"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categoryName" className="label-text">
                Category:
              </label>
              <input
                value={category}
                type="text"
                id="categoryName"
                name="categoryName"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="submit-button">
              <button type="submit" onClick={addProduct}>
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
