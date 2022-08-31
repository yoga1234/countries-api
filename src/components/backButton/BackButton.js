import React from "react";

import { backwardDark, backwardWhite } from "../../assets";
import "./BackButton.css";

const BackButton = ({ darkMode, toggleContent }) => {
  return (
    <div className="single-back-btn">
      <button
        onClick={() => {
          toggleContent("single");
        }}
      >
        <img
          className="backward-icon"
          src={darkMode === true ? backwardWhite : backwardDark}
          alt=""
        />
        Back
      </button>
    </div>
  );
};

export default BackButton;
