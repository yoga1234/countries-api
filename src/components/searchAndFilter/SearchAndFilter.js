import React from "react";

import "./SearchAndFilter.css";
import { searchOutline, searchOutlineWhite } from "../../assets";

const SearchAndFilter = ({ darkMode }) => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <form>
          <img
            src={darkMode === true ? searchOutlineWhite : searchOutline}
            alt=""
          />
          {/* <img src={searchOutlineWhite} alt="" /> */}
          <input type="text" placeholder="Search for a country..." />
        </form>
      </div>
      <div className="filter-bar">
        <div className="select-wrapper">
          <select name="regionfilter" defaultValue="Filter by Region">
            <option value="Filter by Region" hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Africa">America</option>
            <option value="Africa">Asia</option>
            <option value="Africa">Europe</option>
            <option value="Africa">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
