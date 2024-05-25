import React, { useState } from "react";
import "../../styles/main.css";
import Header from "./components/header";
import Tabs from "./components/tabs";
import Sell from "./components/sell";
import Buy from "./components/buy";

function Main() {
  const [tab, setTab] = useState(true);
  return (
    <>
      <Header />
      <Tabs tab={tab} setTab={setTab} />
      <div className="container">{tab ? <Buy /> : <Sell />}</div>
    </>
  );
}

export default Main;
