import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";

function ShowPage() {
  const API = import.meta.env.VITE_API_URL;
  const [oneFood, setOneFood] = useState("");
  const [modalShowing, setModalShowing] = useState(false);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchOneFood();
  }, []);

  async function fetchOneFood() {
    try {
      let result = await axios.get(`${API}/foods/${index}`);
      console.log(result.data);
      setOneFood(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleBackButton() {
    navigate(`/foods`);
  }

  function handleEditButton() {
    navigate(`/foods/${index}/edit`);
  }

  async function handleDeleteButton() {
    try {
      await axios.delete(`${API}/foods/${index}`);
      navigate(`/foods`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="card mb-3 m-5">
        {modalShowing ? (
          <Modal
            handleDeleteButton={handleDeleteButton}
            setModalShowing={setModalShowing}
          />
        ) : (
          <></>
        )}
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={oneFood.image}
              className="img-fluid rounded-start"
              alt={oneFood.name}
              style={{ height: "500px", width: "500px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title fw-bold fs-2 mt-5 text-decoration-underline"
                style={{ color: "green" }}
              >
                {oneFood.name}
              </h5>
              <p className="card-text fs-5 mt-4 px-3">{oneFood.description}</p>
              <p className="card-text fs-4 px-3">{oneFood.calories} Calories</p>
              <p className="card-text fs-4 px-3">
                Vegetarian -{" "}
                {oneFood.is_veg ? <span>Yes</span> : <span>No</span>}
              </p>
              <p className="card-text fs-4 px-3">
                Spicy - {oneFood.is_spicy ? <span>Yes</span> : <span>No</span>}
              </p>
              <p className="card-text fs-4 px-3">$ {oneFood.price}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                margin: "15px",
              }}
            >
              <div>
                <button
                  type="button"
                  className="btn btn-success text-dark"
                  onClick={handleBackButton}
                >
                  BACK
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-success text-dark"
                  onClick={handleEditButton}
                >
                  EDIT
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-success text-dark"
                  onClick={() => setModalShowing(true)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowPage;
