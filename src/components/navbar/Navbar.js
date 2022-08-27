import React from "react";

import "./Navbar.css";
import { moonOutlineWhite, moonOutline } from "../../assets";

const Navbar = ({ toggle, darkMode }) => {
  return (
    <div className="navbar-container">
      <h1>Where in the world?</h1>
      <div
        onClick={() => {
          toggle();
        }}
        className="dark-toggle"
      >
        <img src={darkMode === true ? moonOutlineWhite : moonOutline} alt="" />
        {/* <img src={moonOutline} alt="" /> */}
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
