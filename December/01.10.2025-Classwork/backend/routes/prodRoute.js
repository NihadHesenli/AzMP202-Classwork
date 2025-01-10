const express = require('express')

const {
    getTheData,getTheDataById,deleteTheData,editTheData,addNewData
} = require('../controllers/prodContr')

const router = express.Router()

router.get("/products", getTheData)
router.get("/products/:id", getTheDataById)
router.delete("/products/:id" , deleteTheData)
router.post("/products" , editTheData)
router.put("/products/:id", addNewData)

module.exports = router;