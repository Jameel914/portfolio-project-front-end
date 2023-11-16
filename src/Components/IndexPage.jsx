import React, { useEffect, useState } from "react";
import axios from "axios";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchIndex();
  }, []);

  async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/foods`);
      console.log(result.data);
      setFood(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
      {food.map((item, index) => {
        return (
          <div className="col " key={index}>
            <div className="card h-100 p-2">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ objectFit: "cover", height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className="card-footer bg-transparent border-success px-1">
                  ${item.price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IndexPage;
