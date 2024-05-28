const Property = require('../Models/propertyModel');

const deleteProperty=async(req,res)=>{
    const {id} = req.body
    try{
        const deletedProperty = await Property.findOneAndDelete({ _id: id });
        if (!deletedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json({ message: 'Property deleted successfully' });

    }catch(error){
        res.status(400).json({ error: error.message });
    }

}

module.exports= deleteProperty