const prod = require('../modules/prodModules')

const getTheData = async (req,res)=>{
    try {
        const products = await prod.find({})
        res.send(products)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const getTheDataById = async(req,res)=>{
    const {id} = req.params;

    try {
        const product = await prod.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).jsom({message : error.message})
    }
}

const deleteTheData = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleted = await prod.findByIdAndDelete(id)
        res.status(201).json(deleted)
    } catch (error) {
        res.status(500).jsom({message : error.message})
    }
}

const addNewData = async(req,res)=>{
    const {title,description,price} = req.params
    if(!title || !description || !price ){
        return res.status(404).json({ message : "xanalari doldurda ala"})
    }
    try {
        const newProd = prod({...req.body})
        await newProd.save()
    } catch (error) {
        res.status(500).jsom({message : error.message})
    }
}

const editTheData = async(req,res)=>{
    const {id} = req.params;
    try {
        const uptadedProd = prod.findByIdAndUpdate(
            id,
            {
                ...req.body
            },
            {
                new:true,
            }
        )
        res.status(201).json({
            uptadedProd: uptadedProd
        })
    } catch (error) {
        res.status(500).jsom({message : error.message})
    }
}

module.exports = {
    getTheData,getTheDataById,deleteTheData,editTheData,addNewData
}