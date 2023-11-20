import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [food, setFood] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetchIndex();
  }, []);

  async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/foods`);

      setFood(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function Loadmore() {
    setVisible(visible + 3);
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
      {food
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .slice(0, visible)
        .map((item) => {
          return (
            <div className="col " key={item.id}>
              <div className="card h-100 p-2">
                <Link
                  to={`/foods/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{
                      objectFit: "cover",
                      height: "250px",
                    }}
                  />
                  <div className="card-body" style={{ color: "green" }}>
                    <h5 className="card-title">{item.name}</h5>
                    <div className="card-footer bg-transparent border-success px-1">
                      ${item.price}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      {visible < food.length && (
        <div className="d-flex justify-content-center mt-5">
          <button
            type="button"
            className="btn btn-success text-dark"
            onClick={Loadmore}
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
}

export default IndexPage;
