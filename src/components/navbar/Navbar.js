import React from "react";

import "./Navbar.css";
import { moonOutlineWhite } from "../../assets";

const Navbar = ({ toggle }) => {
  return (
    <div className="navbar-container">
      <h1>Where in the world?</h1>
      <div
        onClick={() => {
          toggle();
        }}
        className="dark-toggle"
      >
        <img src={moonOutlineWhite} alt="" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
