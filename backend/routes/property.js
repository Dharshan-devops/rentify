const express = require('express')
const router = express.Router()
const Authorization = require('../middlewares/verifyAuth')

// addProperty Endpoint
const addProperty = require('../controllers/addProperty')
router.post("/addProperty",Authorization,addProperty)


//getAllProperties Endpoint 
const getAllProperties=require('../controllers/getAllProperties')
router.get("/getAllProperties?",getAllProperties)


//updateProperty Endpoint 
const updateProperty = require('../controllers/updateProperty')
router.put("/updateProperty",Authorization,updateProperty)


//deleteProperty Endpoint 
const deleteProperty=require('../controllers/deleteProperty')
router.delete("/deleteProperty",Authorization,deleteProperty)

//filter
const filterProperties=require('../controllers/filterProperty')
router.post("/filterProperty",filterProperties)


module.exports=router