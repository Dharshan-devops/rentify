import React, { useEffect, useState } from "react";

function Buy() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState();
  const [sellerData, setSellerData] = useState();

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/getAllProperties`
    );
    const data = await res.json();
    setData(data);
  };

  const displaySellerDetails = async (sellerId) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/contactSeller/${sellerId}`
    );
    if (res.ok) {
      let { data } = await res.json();
      setSellerData(data);
    }
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

                <div
                  className="cta-button"
                  onClick={() => displaySellerDetails(value.seller)}
                >
                  Contact seller
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {sellerData != undefined && (
        <div className="pop-container">
          <div className="pop-close" onClick={() => setSellerData(undefined)}>
            close
          </div>
          <div className="seller-info">
            <div>Name : {sellerData.name}</div>
            <div>Email : {sellerData.email}</div>
            <div>Phone : {sellerData.phoneNumber}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Buy;
