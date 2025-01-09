const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const port = 8080

const {Schema} = mongoose;

const NewProductSchema = new Schema({
    title : {type : String , require : true},
    description : {type : String , require : true},
    price : {type : Number , require : true}
})

const Prodcuts = mongoose.model('Products' , NewProductSchema)

app.get('/products', async(req,res)=>{
    try {
        const prod = await Prodcuts.find({})
        res.send(prod)
    } catch (error) {
        res.status(500).send({message : error.message})
    }
})

app.delete('/products/:id' , async (req,res)=>{

  const {id} = req.params;
  const deleted = await Prodcuts.findByIdAndDelete(id)

  try {
    res.send(deleted)
  } catch (error) {
    res.status(500).send({message: error.message})
  }
})



mongoose.connect('mongodb+srv://niad:Aroundeworld000!@cluster0.la2f2.mongodb.net/firstData?retryWrites=true&w=majority&appName=Cluster0').then(()=>{app.listen(port , ()=>{
    console.log(`http://localhost:${port} | connected!`);
})})