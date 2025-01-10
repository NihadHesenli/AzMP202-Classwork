const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const prodRouter = require('./routes/prodRoute')

dotenv.config()
app.use(cors())
app.use(express.json())

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 8080

app.use("/", prodRouter)

mongoose.connect(DB_URL).then(()=>{app.listen(PORT , ()=>{
    console.log(`http://localhost:${PORT}  connected!`);
})})