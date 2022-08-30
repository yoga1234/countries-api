import React from "react";
import BackButton from "../backButton/BackButton";
// import Navbar from "../navbar/Navbar";
import LeftSide from "../singlePage/leftSide/LeftSide";
import RightSide from "../singlePage/rightSide/RightSide";

import "./SingleCountry.css";

const SingleCountry = ({ darkMode, activeCountry }) => {
  return (
    <div className="single-country-container">
      <BackButton darkMode={darkMode} />
      {activeCountry === undefined ? (
        <div className="content-container">
          <LeftSide countryImage={undefined} />
          <RightSide />
        </div>
      ) : (
        <div className="content-container">
          <LeftSide countryImage={activeCountry.flags} />
          <RightSide />
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
