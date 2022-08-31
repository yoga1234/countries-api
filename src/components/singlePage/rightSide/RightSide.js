import React from "react";

import "./RightSide.css";

const RightSide = ({ countryData }) => {
  return countryData === undefined ? (
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
          <span>Loading...</span>
        </p>
      </div>
    </div>
  ) : (
    <div className="rightside-container">
      <h2>{countryData.name}</h2>
      {/* <h2>{countryData.name}</h2> */}
      <div className="description-container">
        <p>
          Native Name: <span>Testing</span>
          {/* Native Name: <span>{countryData.nativeName}</span> */}
        </p>
        <p>
          Population: <span>Testing</span>
          {/* Population: <span>{countryData.population}</span> */}
        </p>
        <p>
          Region: <span>Testing</span>
          {/* Region: <span>{countryData.population}</span> */}
        </p>
        <p>
          Sub Region: <span>Testing</span>
          {/* Sub Region: <span>{countryData.subRegion}</span> */}
        </p>
        <p>
          Capital: <span>Testing</span>
          {/* Capital: <span>{countryData.capital}</span> */}
        </p>
        <p>
          Top Level Domain: <span>Testing</span>
          {/* Top Level Domain: <span>{countryData.topLevelDomain}</span> */}
        </p>
        <p>
          Currencies: <span>Testing</span>
          {/* Currencies: <span>{countryData.currencies}</span> */}
        </p>
        <p>
          Languages: <span>Testing</span>
          {/* Languages: <span>{countryData.languages}</span> */}
        </p>
      </div>

      <div className="border-container">
        <p>
          Border Countries:
          <span>France</span>
          <span>Gernamu</span>
          <span>Netherlands</span>
        </p>
      </div>
    </div>
  );
  // <div className="rightside-container">
  //   <h2>Peru</h2>
  //   <div className="description-container">
  //     <p>
  //       Native Name: <span>Peru</span>
  //     </p>
  //     <p>
  //       Population: <span>11.391.911</span>
  //     </p>
  //     <p>
  //       Region: <span>Europe</span>
  //     </p>
  //     <p>
  //       Sub Region: <span>Western Europe</span>
  //     </p>
  //     <p>
  //       Capital: <span>Brussels</span>
  //     </p>
  //     <p>
  //       Top Level Domain: <span>.be</span>
  //     </p>
  //     <p>
  //       Currencies: <span>Euro</span>
  //     </p>
  //     <p>
  //       Languages: <span>Dutch, French, German</span>
  //     </p>
  //   </div>

  //   <div className="border-container">
  //     <p>
  //       Border Countries:
  //       <span>France</span>
  //       <span>Gernamu</span>
  //       <span>Netherlands</span>
  //     </p>
  //   </div>
  // </div>
};

export default RightSide;
