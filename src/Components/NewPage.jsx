import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewPage() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [price, setPrice] = useState(0);
  const [is_veg, setIs_Veg] = useState(false);
  const [is_spicy, setIs_Spicy] = useState(false);
  const [description, setDescription] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${API}/foods`, {
        name: name,
        image: image,
        calories: calories,
        price: price,
        is_veg: is_veg,
        is_spicy: is_spicy,
        description: description,
      });

      navigate(`/foods`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="m-5 w-75 px-5" style={{ border: "1px solid green" }}>
        <h2
          className="mt-5 text-decoration-underline"
          style={{ color: "green" }}
        >
          {" "}
          Create New Item
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label className="mt-4 fs-5 fw-bold ">Name</label>
            <input
              style={{ width: "80%" }}
              className="form-control form-control-lg px-5"
              type="text"
              placeholder="Name of the item"
              aria-label=".form-control-lg example"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mt-3 fs-5 fw-bold">Image</label>
            <input
              style={{ width: "80%" }}
              className="form-control form-control-lg px-5"
              type="text"
              placeholder="Image link"
              aria-label=".form-control-lg example"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mt-3 fs-5 fw-bold">Calories</label>
            <input
              style={{ width: "80%" }}
              className="form-control form-control-lg px-5"
              type="number"
              aria-label=".form-control-lg example"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mt-3 fs-5 fw-bold">Price</label>
            <input
              style={{ width: "80%" }}
              className="form-control form-control-lg px-5"
              type="number"
              aria-label=".form-control-lg example"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mt-3 fs-5 fw-bold">Description</label>
            <input
              style={{ width: "80%" }}
              className="form-control form-control-lg px-5"
              type="text"
              placeholder="Write the description here"
              aria-label=".form-control-lg example"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mt-3 fs-5 fw-bold" style={{ padding: "15px" }}>
              Vegetarian
            </label>
            <input
              type="checkbox"
              aria-label=".form-control-lg example"
              checked={is_veg}
              onChange={(e) => setIs_Veg(e.target.checked)}
            />
          </div>
          <div>
            <label className=" fs-5 fw-bold" style={{ padding: "15px" }}>
              Spicy
            </label>
            <input
              type="checkbox"
              aria-label=".form-control-lg example"
              checked={is_spicy}
              onChange={(e) => setIs_Spicy(e.target.checked)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success text-dark mt-3 mb-5"
            >
              ADD NEW ITEM
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewPage;
