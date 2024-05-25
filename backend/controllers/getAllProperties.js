const Property = require('../Models/propertyModel');

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
      } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports=getAllProperties