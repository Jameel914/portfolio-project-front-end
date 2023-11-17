import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  const API = import.meta.env.VITE_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [price, setPrice] = useState(0);
  const [is_veg, setIs_Veg] = useState(false);
  const [is_spicy, setIs_Spicy] = useState(false);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchEditFood();
  }, []);

  async function fetchEditFood() {
    try {
      let result = await axios.get(`${API}/foods/${index}`);
      console.log(result.data);
      setName(result.data.name);
      setImage(result.data.image);
      setCalories(result.data.calories);
      setPrice(result.data.price);
      setIs_Veg(result.data.is_veg);
      setIs_Spicy(result.data.is_spicy);
      setDescription(result.data.description);
    } catch (error) {
      console.log(error);
    }
  }
  return <div>EditPage</div>;
}

export default EditPage;
