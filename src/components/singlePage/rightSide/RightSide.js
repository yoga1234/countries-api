import React from "react";

import "./RightSide.css";

const RightSide = ({ countryData }) => {
  return countryData !== undefined ? (
    <div className="rightside-container">
      <h2>{countryData.name}</h2>
      <div className="description-container">
        <p>
          Native Name: <span>{countryData.nativeName}</span>
        </p>
        <p>
          Population: <span>{countryData.population}</span>
        </p>
        <p>
          Region: <span>{countryData.region}</span>
        </p>
        <p>
          Sub Region: <span>{countryData.subRegion}</span>
        </p>
        <p>
          Capital: <span>{countryData.capital}</span>
        </p>
        <p>
          Top Level Domain: <span>{countryData.topLevelDomain}</span>
        </p>
        <p>
          Currencies: <span>{countryData.currencies}</span>
        </p>
        <p>
          Languages: <span>{countryData.languages}</span>
        </p>
      </div>

      <div className="border-container">
        <p>
          Border Countries:
          <span className="border-separator">
            <span>France</span>
            <span>Gernamu</span>
            <span>Netherlands</span>
          </span>
        </p>
      </div>
    </div>
  ) : (
    <div className="rightside-container">
      <h2>Loading...</h2>
      <div className="description-container">
        <p>
          Native Name: <span>Loading...</span>
        </p>
        <p>
          Population: <span>Loading...</span>
        </p>
        <p>
          Region: <span>Loading...</span>
        </p>
        <p>
          Sub Region: <span>Loading...</span>
        </p>
        <p>
          Capital: <span>Loading...</span>
        </p>
        <p>
          Top Level Domain: <span>Loading...</span>
        </p>
        <p>
          Currencies: <span>Loading...</span>
        </p>
        <p>
          Languages: <span>Loading...</span>
        </p>
      </div>

      <div className="border-container">
        <p>
          Border Countries:
          <span className="border-separator">
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
            <span>Loading...</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightSide;
