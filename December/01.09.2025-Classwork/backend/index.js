const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8080;

const { Schema }  = mongoose;

const ProductSchema = new Schema({
    title : { type : String , require : true},
    description : { type : String , require : true},
    price : { type : Number , require : true}
})

const ProductModel = mongoose.model("Products", ProductSchema);



app.get('/products',  async (req, res) => {
  try {
    const products = await ProductModel.find({})
    res.send(products);
    
  } catch (error) {
    res.status(500).send({ message : error.message })
  }
});



app.delete('/products' , async)

mongoose.connect('mongodb+srv://niad:Aroundeworld000!@cluster0.la2f2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
    console.log('Connected!')});