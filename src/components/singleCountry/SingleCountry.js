import React from "react";
import BackButton from "../backButton/BackButton";
import LeftSide from "../singlePage/leftSide/LeftSide";
import RightSide from "../singlePage/rightSide/RightSide";

import "./SingleCountry.css";

const SingleCountry = ({
  darkMode,
  activeCountry,
  toggleContent,
  activeState,
}) => {
  return (
    <div className="single-country-container">
      <BackButton toggleContent={toggleContent} darkMode={darkMode} />
      {activeCountry === undefined ? (
        <div className="content-container">
          <LeftSide countryImage={undefined} />
          <RightSide countryData={undefined} />
        </div>
      ) : (
        <div className="content-container">
          <LeftSide countryImage={activeCountry.flags} />
          <RightSide countryData={activeCountry} />
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
