import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [prod, setProd] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const BASE_URL = "http://localhost:8080/api";

  const getProducts = async () => {
    try {
      const res = await axios(`${BASE_URL}/products`);
      setProd(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/products/${pId}`);
      setProd([...prod.filter((p) => p.id !== pId)]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      description,
    };

    try {
      const res = await axios.post(`${BASE_URL}/products`, payload);

      setProd([...prod, res.data.newData]);
      console.log(res.data.newData);

      setName("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <form onSubmit={() => handleAddCategory()}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
        />
        <br />
        <br />
        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          id="desc"
          value={description}
          onChange={(e) => setDescription(e.target.value.trim())}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>

      <ul>
        {prod.length > 0 &&
          prod.map((p) => {
            return (
              <li key={p.id}>
                {p.name} - {p.description}
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
