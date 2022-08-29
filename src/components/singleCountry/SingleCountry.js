import React from "react";
import BackButton from "../backButton/BackButton";
// import Navbar from "../navbar/Navbar";
import LeftSide from "../singlePage/leftSide/LeftSide";
import RightSide from "../singlePage/rightSide/RightSide";

import "./SingleCountry.css";

const SingleCountry = ({ darkMode }) => {
  return (
    <div className="single-country-container">
      {/* <Navbar /> */}
      <BackButton darkMode={darkMode} />
      <div className="content-container">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default SingleCountry;
