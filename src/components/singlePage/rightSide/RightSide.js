import React from "react";

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="rightside-container">
      <h2>Peru</h2>
      <div className="description-container">
        <p>
          Native Name: <span>Peru</span>
        </p>
        <p>
          Population: <span>11.391.911</span>
        </p>
        <p>
          Region: <span>Europe</span>
        </p>
        <p>
          Sub Region: <span>Western Europe</span>
        </p>
        <p>
          Capital: <span>Brussels</span>
        </p>
        <p>
          Top Level Domain: <span>.be</span>
        </p>
        <p>
          Currencies: <span>Euro</span>
        </p>
        <p>
          Languages: <span>Dutch, French, German</span>
        </p>
      </div>
      <div className="border-container">
        <p>
          Border Countries: <span>France</span>
          <span>Gernamu</span>
          <span>Netherlands</span>
        </p>
      </div>
    </div>
  );
};

export default RightSide;
