const Property = require('../Models/propertyModel');
const filterProperties = async (req, res) => {
    try {
        const filters = req.body.filters;
        let matchedProperties = [];
        const allProperties = await Property.find();
        allProperties.forEach(property => {
            if (matchesFilters(property, filters)) {
                matchedProperties.push(property);
            }
        });
        res.json({ properties: matchedProperties });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const matchesFilters = (property, filters) => {
    for (const filter of filters) {
        if (propertyMatchesFilter(property, filter)) {
            return true;
        }
    }
    return false;
};

const propertyMatchesFilter = (property, filter) => {
    const { attribute, value } = filter;

    if (property[attribute] === value) {
        return true;
    }

    if (Array.isArray(property[attribute]) && property[attribute].includes(value)) {
        return true;
    }

    return false;
};

module.exports=filterProperties