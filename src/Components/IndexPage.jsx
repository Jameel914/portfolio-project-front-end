import React, { useEffect, useState } from "react";

function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchIndex();
  }, []);

  async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/foods`);
      console.log(result);
      setFood(result);
    } catch (error) {
      console.log(error);
    }
  }
  return <div>IndexPage</div>;
}

export default IndexPage;
