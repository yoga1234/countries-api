import React from "react";

import { backwardDark, backwardWhite } from "../../assets";
import "./BackButton.css";

const BackButton = () => {
  return (
    <div>
      <button>
        {" "}
        <img src={backwardWhite} alt="" /> Back
      </button>
    </div>
  );
};

export default BackButton;
