const express = require("express");
const router = express.Router();
const Authorization = require("../middlewares/verifyAuth");
const Property = require("../Models/propertyModel");

// addProperty Endpoint
const addProperty = require("../controllers/addProperty");
router.post("/addProperty/:sellerId", Authorization, addProperty);

//getAllProperties Endpoint
const getAllProperties = require("../controllers/getAllProperties");
router.get("/getAllProperties?", getAllProperties);

//updateProperty Endpoint
const updateProperty = require("../controllers/updateProperty");
router.put("/updateProperty", Authorization, updateProperty);

//deleteProperty Endpoint
const deleteProperty = require("../controllers/deleteProperty");
router.delete("/deleteProperty", Authorization, deleteProperty);

//filter
const filterProperties = require("../controllers/filterProperty");
router.post("/filterProperty", filterProperties);

//contactSeller
const contactSeller = require("../controllers/contactSeller");
router.post("/contactSeller", contactSeller);

//seller properties
router.get("/sellerProperties/:sellerId", async (req, res) => {
  try {
    const { sellerId } = req.params;

    // Find properties by seller ID
    const properties = await Property.find({ seller: sellerId });

    // Check if any properties are found
    // if (properties.length === 0) {
    //   return res
    //     .status(404)
    //     .json({ message: "No properties found for this seller" });
    // }

    // Send the properties as the response
    res.status(200).json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
