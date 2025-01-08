const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;

let data = [
  {
    id: 1,
    description: "Soft drinks coffees teas beers and ales",
    name: "Beverages",
  },
  {
    id: 2,
    description: "Sweet and savory sauces relishes spreads and seasonings",
    name: "Condiments",
  },
  {
    id: 3,
    description: "Desserts candies and sweet breads",
    name: "Confections",
  },
  {
    id: 4,
    description: "Cheeses",
    name: "Dairy Products",
  },
  {
    id: 5,
    description: "Breads crackers pasta and cereal",
    name: "Grains/Cereals",
  },
  {
    id: 6,
    description: "Prepared meats",
    name: "Meat/Poultry",
  },
  {
    id: 7,
    description: "Dried fruit and bean curd",
    name: "Produce",
  },
  {
    id: 8,
    description: "Seaweed and fish",
    name: "Seafood",
  },
];

const counter = 10;

app.get("/api/products", (req, res) => {
  if (data.length > 0) {
    res.status(200).send({
      products: data,
    });
  } else {
    res.status(204).send({
      products: [],
    });
  }
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const filteredProd = data.find((p) => p.id === +id);
  if (filteredProd !== undefined) {
    res.status(202).send(filteredProd);
  } else {
    res.status(404).send();
  }
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const idx = data.findIndex((p) => p.id === +id);
  const deleted = data.splice(idx, 1);
  res.status(202).send({
    deletedProd: deleted,
  });
});

app.post("/api/products", (req, res) => {
  const { description, name } = req.body;
  const newData = {
    id: counter++,
    description,
    name,
  };
  data.push(newData);
  res.status(202).send({
    newData,
  });
});
app.listen(port, () => {
  console.log(`Link : https://localhost:/${port}`);
});
