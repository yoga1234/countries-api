import React from "react";

import "./Country.css";

const Country = () => {
  return (
    <div className="country-container">
      <div className="top-side">{/* <img src="" alt="" /> */}</div>
      <div className="bottom-side">
        <h2>Country</h2>
        <p>
          Population: <span>1.000.000</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Capital: <span>Berlin</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
