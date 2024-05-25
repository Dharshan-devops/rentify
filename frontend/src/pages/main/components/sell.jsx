import React, { useState, useEffect } from "react";
import Pop from "./pop";

function Sell() {
  const [pop, setPop] = useState(false);

  const initialData = {
    title: "",
    description: "",
    place: "",
    area: 0,
    bedrooms: 0,
    bathrooms: 0,
    nearbyHospitals: "",
    nearbyColleges: "",
    imageUrl: "",
  };

  const [data, setData] = useState();

  const [propertiesData, setPropertiesData] = useState();

  const fetchData = async () => {
    console.log(process.env.REACT_APP_BACKEND_URL);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/properties/id`
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
      <div className="sell-heading">Properties to sell</div>
      <button
        className="sell-btn"
        onClick={() => {
          setPop(true);
          setData(initialData);
        }}
      >
        add property +
      </button>
      <div className="sell-cards">
        <div className="sell-card">
          <div className="sell-property">property name</div>
          <div className="sell-content">
            <div className="sell-edit">edit</div>
            <div className="sell-delete">delete</div>
          </div>
        </div>
      </div>
      {pop && (
        <>
          <div className="pop-container">
            <Pop setPop={setPop} data={data} />
          </div>
        </>
      )}
    </>
  );
}

export default Sell;
