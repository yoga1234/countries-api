import React from "react";

import { backwardDark, backwardWhite } from "../../assets";
import "./BackButton.css";

const BackButton = () => {
  return (
    <div className="single-back-btn">
      <button>
        <img src={backwardWhite} alt="" /> Back
      </button>
    </div>
  );
};

export default BackButton;
