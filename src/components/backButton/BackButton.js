import React from "react";

import { backwardDark, backwardWhite } from "../../assets";
import "./BackButton.css";

const BackButton = ({ darkMode }) => {
  return (
    <div className="single-back-btn">
      <img
        className="backward-icon"
        src={darkMode === true ? backwardWhite : backwardDark}
        alt=""
      />
      {/* <img className="backward-icon" src={backwardWhite} alt="" /> */}
      <button>Back</button>
    </div>
  );
};

export default BackButton;
