const Property = require("../Models/propertyModel");

const updateProperty = async (req, res) => {
  const data = req.body;
  try {
    const property = await Property.findById(data._id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    } else {
      console.log(property);
      // Update the property with the new data
      Object.assign(property, data);
      await property.save();

      res.json({ message: "Property updated successfully" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = updateProperty;
