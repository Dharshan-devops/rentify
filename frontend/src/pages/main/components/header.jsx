import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const logOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <header>
      <div>
        <div class="logo">Rentify</div>
        <div class="log-out" onClick={() => logOut()}>
          Log Out
        </div>
      </div>
    </header>
  );
}

export default Header;
