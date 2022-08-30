import React from "react";
import Country from "../country/Country";

import "./CountryContainer.css";

const CountryContainer = ({ countryData }) => {
  return (
    <div className="countries-container">
      <div className="country-card-container">
        {countryData === undefined ? (
          <p>Loading...</p>
        ) : (
          countryData.map((country) => (
            <Country
              key={country.name.common + country.population}
              country={country}
            />
          ))
        )}
        {/* {countryData.map((country) => (
          <Country country={country} />
        ))} */}
        {/* <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country /> */}
      </div>
    </div>
  );
};

export default CountryContainer;
