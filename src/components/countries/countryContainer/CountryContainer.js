import React from "react";
import Country from "../country/Country";

import "./CountryContainer.css";

const CountryContainer = ({ countryData, getActiveCountry }) => {
  return (
    <div className="countries-container">
      <div className="country-card-container">
        {countryData === undefined ? (
          <p className="loading-text">Loading...</p>
        ) : (
          countryData.map((country) => (
            <Country
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
