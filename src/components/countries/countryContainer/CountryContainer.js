import React from "react";
import Country from "../country/Country";

import "./CountryContainer.css";

const CountryContainer = ({
  countryData,
  getActiveCountry,
  toggleContent,
  activeState,
}) => {
  return (
    <div
      className="countries-container"
      style={activeState === true ? { display: "block" } : { display: "none" }}
    >
      <div className="country-card-container">
        {countryData === undefined ? (
          <p className="loading-text">Loading...</p>
        ) : (
          countryData.map((country) => (
            <Country
              toggleContent={toggleContent}
              getActiveCountry={getActiveCountry}
              key={country.name.common + country.population}
              country={country}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CountryContainer;
