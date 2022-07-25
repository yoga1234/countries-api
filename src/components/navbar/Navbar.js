import React from "react";

import "./Navbar.css";
import { moonOutline } from "../../assets";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1>Where in the world?</h1>
      <div className="dark-toggle">
        <img src={moonOutline} alt="" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
