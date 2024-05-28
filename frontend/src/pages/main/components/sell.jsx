import React, { useState, useEffect } from "react";
import Pop from "./pop";

function Sell({ userId }) {
  const [pop, setPop] = useState(false);
  const [reqType, setReqType] = useState();
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
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/v1/sellerProperties/${userId}`
    );
    const data = await res.json();
    setPropertiesData(data);
  };

  useEffect(() => {
    fetchData();
  }, [pop]);

  return (
    <>
      <div className="sell-heading">Properties to sell</div>
      <button
        className="sell-btn"
        onClick={() => {
          setPop(true);
          setData(initialData);
          setReqType("POST");
        }}
      >
        add property +
      </button>
      <div className="sell-cards">
        {propertiesData != undefined &&
          propertiesData.map((item, index) => (
            <div className="sell-card" key={index}>
              <div className="sell-property">{item.title}</div>
              <div className="sell-content">
                <div
                  className="sell-edit"
                  onClick={() => {
                    setPop(true);
                    setData(item);
                    setReqType("PUT");
                  }}
                >
                  edit
                </div>
                <div className="sell-delete">delete</div>
              </div>
            </div>
          ))}
      </div>
      {pop && (
        <>
          <div className="pop-container">
            <Pop
              setPop={setPop}
              reqType={reqType}
              data={data}
              userId={userId}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Sell;
