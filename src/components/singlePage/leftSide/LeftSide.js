import React from "react";

import { dummyCountryImage } from "../../../assets";
import "./LeftSide.css";

const LeftSide = ({ countryImage }) => {
  return (
    <div className="leftside-container">
      {countryImage === undefined ? (
        <img src={dummyCountryImage} alt="" />
      ) : (
        <img src={countryImage} alt="" />
      )}
    </div>
  );
};

export default LeftSide;
