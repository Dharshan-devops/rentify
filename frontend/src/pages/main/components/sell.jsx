import React, { useState } from "react";
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

  const [data, setData] = useState(undefined);

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
