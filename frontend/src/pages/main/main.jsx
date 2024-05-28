import React, { useEffect, useState, useRef } from "react";
import "../../styles/main.css";
import Header from "./components/header";
import Tabs from "./components/tabs";
import Sell from "./components/sell";
import Buy from "./components/buy";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Main() {
  const navigate = useNavigate();
  const userId = useRef();

  const retriveToken = (token) => {
    const decoded = jwtDecode(token);
    userId.current = decoded.user_id;
  };

  useEffect(() => {
    const check = async () => {
      if (!Cookies.get("token")) {
        navigate("/login");
      } else {
        retriveToken(Cookies.get("token"));
      }
    };
    check();
  }, []);

  const [tab, setTab] = useState(true);
  return (
    <>
      <Header />
      <Tabs tab={tab} setTab={setTab} />
      <div className="container">
        {tab ? (
          <Buy userId={userId.current} />
        ) : (
          <Sell userId={userId.current} />
        )}
      </div>
    </>
  );
}

export default Main;
