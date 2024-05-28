import React, { useState } from "react";
import Cookies from "js-cookie";

function Pop({ setPop, data, userId, reqType }) {
  const [inputData, setInputData] = useState(data);
  const onChange = (e) => {
    setInputData((initValue) => ({
      ...initValue,
      [e.target.name]: e.target.value,
    }));
  };
  const addProperty = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/${
        reqType == "POST" ? `addProperty/${userId}` : "updateProperty"
      }`,
      {
        method: reqType,
        headers: {
          "Content-Type": "application/json",
          token: Cookies.get("token"),
        },
        body: JSON.stringify(inputData),
      }
    );
    if (res.ok) {
      setPop(false);
    }
  };

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
            value={inputData.title}
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
            value={inputData.description}
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
            value={inputData.place}
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
            value={inputData.area}
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
            value={inputData.bedrooms}
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
            value={inputData.bathrooms}
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
            value={inputData.nearbyHospitals}
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
            value={inputData.nearbyColleges}
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
            value={inputData.imageUrl}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" onClick={addProperty} className="pop-save">
          submit
        </button>
      </form>
    </div>
  );
}

export default Pop;
