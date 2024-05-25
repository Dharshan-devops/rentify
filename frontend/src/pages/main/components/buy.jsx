import React, { useEffect, useState } from "react";

function Buy() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState();

  const fetchData = async () => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/getAllProperties`
    );
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="search">
        <input
          placeholder="Search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      {data != undefined && (
        <div className="items">
          {data.map((value, index) => (
            <div className="item" key={index}>
              <div className="image-container">
                <img src={value.imageUrl} />
              </div>

              <div className="content-container">
                <div className="content-inner-container">
                  <div className="title">{value.title}</div>
                  <div className="content content-1">
                    <div>bedrooms : {value.bedrooms}</div>
                    <div>bathroom : {value.bathrooms}</div>
                  </div>
                  <div className="description">{value.description}</div>
                  <div className="content content-2">
                    <div>area : {value.area} sq</div>
                    <div>place : {value.place} sq</div>
                  </div>
                  <div className="content content-3">
                    <div>nearby hospitals : {value.nearbyHospitals}</div>
                    <div>nearby colleges : {value.nearbyColleges}</div>
                  </div>
                </div>

                <div className="cta-button">Contact seller</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Buy;
