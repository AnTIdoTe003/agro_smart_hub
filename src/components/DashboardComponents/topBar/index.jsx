import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="top-bar">
      <Link to="/signup">
        <button className="loginSignup-button">Login/SignUp</button>
      </Link>
      <div className="border-div"></div>
    </div>
  );
}

export default Topbar;
