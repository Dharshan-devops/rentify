const User = require('../Models/userModel')
const Property = require('../Models/propertyModel');
const contactSeller=async(req,res)=>{
    const {id} = req.body
    try{
    const property = await Property.findById(id);
    if (!property) {
        return res.status(404).json({ message: 'Property not found' });
    }
    // Extract the seller ID from the property
    const sellerId = property.seller;

    // Find the user by seller ID
    const seller = await User.findById(sellerId);
    if (!seller) {
        return res.status(404).json({ message: 'Seller not found' });
    }

    // Send the user details as the response
    res.status(200).json(seller);
    
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
}}

module.exports= contactSeller