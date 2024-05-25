import React from "react";

export default function Tabs({ tab, setTab }) {
  return (
    <div className="tabs">
      <div
        className={`tab ${tab ? "active" : ""}`}
        onClick={() => setTab(true)}
      >
        Buy
      </div>
      <div
        className={`tab ${!tab ? "active" : ""}`}
        onClick={() => setTab(false)}
      >
        Sell
      </div>
    </div>
  );
}
