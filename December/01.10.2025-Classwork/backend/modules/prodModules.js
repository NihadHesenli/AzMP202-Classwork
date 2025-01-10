const mongoose = require('mongoose')

const {Schema}= mongoose;

const prodSchema = new Schema({
    title : {type : String , require : true},
    description : {type : String , require : true},
    price : {type : Number , require : true}
})

const prod = mongoose.model('products' , prodSchema)

module.exports = prod;