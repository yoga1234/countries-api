import React from "react";

import "./Country.css";

const Country = ({ country }) => {
  return (
    <div className="country-container">
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
