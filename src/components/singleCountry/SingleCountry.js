import React from "react";
import BackButton from "../backButton/BackButton";
import Navbar from "../navbar/Navbar";
import LeftSide from "../singlePage/leftSide/LeftSide";
import RightSide from "../singlePage/rightSide/RightSide";

import "./SingleCountry.css";

const SingleCountry = () => {
  return (
    <div>
      <Navbar />
      <BackButton />
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default SingleCountry;
