import React from "react";

import "./Country.css";

const Country = ({ country, getActiveCountry }) => {
  return (
    <div
      onClick={() => {
        getActiveCountry({
          flags: country.flags.svg,
          name: country.name.common,
          nativeName: Object.values(country.name.nativeName)[0].official,
          population: country.population,
          region: country.region,
          subRegion: country.subregion,
          capital: country.capital[0],
          topLevelDomain: country.tld[0],
          currencies: Object.keys(country.currencies)[0],
          languages: Object.keys(country.languages)[0],
          borders: country.borders,
        });
      }}
      className="country-container"
    >
      <div className="top-side">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="bottom-side">
        <h2>{country.name.common}</h2>
        <p>
          Population:{" "}
          <span>
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
