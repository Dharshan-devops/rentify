const User = require("../Models/userModel");
const Property = require("../Models/propertyModel");

const contactSeller = async (req, res) => {
  const { id } = req.params;
  try {
    // Find the user by seller ID
    const seller = await User.findById(id);
    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }
    // Send the user details as the response
    res.status(200).json({
      data: {
        name: seller.firstName + " " + seller.lastName,
        email: seller.email,
        phoneNumber: seller.phoneNumber,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = contactSeller;
