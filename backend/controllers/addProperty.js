const Property = require("../Models/propertyModel");

const addProperty = async (req, res) => {
  const {
    title,
    description,
    place,
    area,
    bedrooms,
    bathrooms,
    nearbyHospitals,
    nearbyColleges,
    imageUrl,
  } = req.body;
  const { sellerId } = req.params;
  try {
    const property = new Property({
      title,
      description,
      place,
      area,
      bedrooms,
      bathrooms,
      nearbyHospitals: nearbyHospitals.split(","),
      nearbyColleges: nearbyColleges.split(","),
      imageUrl,
      seller: sellerId,
    });
    await property.save();
    res.status(201).json({ message: "Property posted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = addProperty;
