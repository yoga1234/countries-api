import React from "react";

import "./Country.css";

const Country = ({ country, getActiveCountry, toggleContent }) => {
  const filterData = () => {
    const nativeCheck =
      Object.hasOwn(country.name, "nativeName") === true
        ? Object.values(country.name.nativeName)[0].official
        : "-";
    const capitalCheck =
      Object.hasOwn(country, "capital") === true
        ? Object.values(country.capital[0])
        : "-";
    const currenciesCheck =
      Object.hasOwn(country, "currencies") === true
        ? Object.keys(country.currencies)[0]
        : "-";
    const languagesCheck =
      Object.hasOwn(country, "languages") === true
        ? Object.keys(country.languages)[0]
        : "-";
    const bordersCheck =
      Object.hasOwn(country, "borders") === true
        ? Object.values(country.borders)
        : ["-"];
    const domainCheck =
      Object.hasOwn(country, "tld") === true ? country.tld[0] : "-";
    const subRegionCheck =
      Object.hasOwn(country, "subregion") === true ? country.subregion : "-";
    return {
      flags: country.flags.svg,
      name: country.name.common,
      nativeName: nativeCheck,
      population: country.population,
      region: country.region,
      subRegion: subRegionCheck,
      capital: capitalCheck,
      topLevelDomain: domainCheck,
      currencies: currenciesCheck,
      languages: languagesCheck,
      borders: bordersCheck,
    };
  };
  return (
    <div
      onClick={() => {
        getActiveCountry(filterData());
        toggleContent("country");
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
