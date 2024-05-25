const Property = require('../Models/propertyModel');

const addProperty = async (req, res) => {
    const { title, description, place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges } = req.body;
    try {
        const property = new Property({
          title,
          description,
          place,
          area,
          bedrooms,
          bathrooms,
          nearbyHospitals: nearbyHospitals.split(','),
          nearbyColleges: nearbyColleges.split(','),
        //   image: {
        //     data: req.file.buffer,
        //     type: req.file.mimetype
        //   },
          seller: req.user_id
        });
        await property.save();
        res.status(201).json({ message: 'Property posted successfully' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports = addProperty

