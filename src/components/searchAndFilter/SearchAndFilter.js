import React from "react";

import "./SearchAndFilter.css";
import { searchOutline, searchOutlineWhite } from "../../assets";

const SearchAndFilter = ({ darkMode, changeActiveRegion }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <form>
          <img
            src={darkMode === true ? searchOutlineWhite : searchOutline}
            alt=""
          />
          <input type="text" placeholder="Search for a country..." />
        </form>
      </div>
      <div className="filter-bar">
        <div className="select-wrapper">
          <select
            onChange={changeActiveRegion}
            name="regionfilter"
            defaultValue="Filter by Region"
          >
            <option value="Filter by Region" hidden>
              Filter by Region
            </option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
