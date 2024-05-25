import React from "react";

function Pop({ setPop, data }) {
  const onChange = (e) => {};
  return (
    <div className="pop-inner-container">
      <button onClick={() => setPop(false)} className="pop-close">
        close
      </button>
      <form className="pop-form">
        <div>
          <label htmlFor="title">Property Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="property name"
            value={data.title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="description"
            value={data.description}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            placeholder="place"
            value={data.place}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="area">Sq Feet:</label>
          <input
            type="number"
            id="area"
            name="area"
            placeholder="sq feet"
            value={data.area}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="bedrooms">No. of Bedrooms:</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            placeholder="no.of bedrooms"
            value={data.bedrooms}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bathrooms">No. of Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            placeholder="no.of bathrooms"
            value={data.bathrooms}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nearbyHospitals">Nearby Hospitals:</label>
          <input
            type="text"
            id="nearbyHospitals"
            name="nearbyHospitals"
            placeholder="nearby hospitals"
            value={data.nearbyHospitals}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nearbyColleges">Nearby Colleges:</label>
          <input
            type="text"
            id="nearbyColleges"
            name="nearbyColleges"
            placeholder="nearby colleges"
            value={data.nearbyColleges}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Property Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="property image url"
            value={data.imageUrl}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="pop-save">
          submit
        </button>
      </form>
    </div>
  );
}

export default Pop;
