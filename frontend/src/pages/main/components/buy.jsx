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
                <img />
              </div>

              <div className="content-container">
                <div className="content-inner-container">
                  <div className="title">title</div>
                  <div className="content content-1">
                    <div>bedroom</div>
                    <div>bathroom</div>
                  </div>
                  <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fuga, cum.
                  </div>
                  <div className="content content-2">
                    <div>200sf</div>
                    <div>bangalore</div>
                  </div>
                  <div className="content content-3">
                    <div>hospitals</div>
                    <div>colleges</div>
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
