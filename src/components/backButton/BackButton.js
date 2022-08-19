import React from "react";

import { backwardDark, backwardWhite } from "../../assets";
import "./BackButton.css";

const BackButton = () => {
  return (
    <div className="single-back-btn">
      <img className="backward-icon" src={backwardWhite} alt="" />
      <button>Back</button>
    </div>
  );
};

export default BackButton;
