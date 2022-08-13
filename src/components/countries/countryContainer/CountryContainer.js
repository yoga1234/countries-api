import React from "react";
import Country from "../country/Country";

import "./CountryContainer.css";

const CountryContainer = () => {
  return (
    <div className="countries-container">
      <div className="country-card-container">
        <Country />
        <Country />
        <Country />
      </div>
    </div>
  );
};

export default CountryContainer;
