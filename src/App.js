import { useState, useEffect } from "react";
import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  SingleCountry,
} from "./components/index";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [countryData, setCountryData] = useState(undefined);
  const [activeCountry, setActiveCountry] = useState(undefined);
  const [mainContainer, setMainContainer] = useState(true);
  const [activeRegion, setActiveRegion] = useState("none");
  const themeToggle = () => {
    if (darkMode === true) {
      document.body.classList.toggle("light-mode");
      setDarkMode(!darkMode);
    }
    if (darkMode === false) {
      document.body.classList.toggle("light-mode");
      setDarkMode(!darkMode);
    }
  };

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data);
      });
  };
  const getRegionData = () => {};
  const getActiveCountry = (data) => {
    setActiveCountry(data);
  };
  const toggleContent = (source) => {
    source === "country" ? setMainContainer(false) : setMainContainer(true);
  };
  const changeActiveRegion = (e) => {
    // console.log(e.target.options.selectedIndex);
    console.log(e.target[e.target.options.selectedIndex].text);
    // setActiveRegion(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar toggle={themeToggle} darkMode={darkMode} />
      <div className="main-content">
        <SearchAndFilter
          changeActiveRegion={changeActiveRegion}
          darkMode={darkMode}
        />
        <CountryContainer
          activeState={mainContainer}
          toggleContent={toggleContent}
          getActiveCountry={getActiveCountry}
          countryData={countryData}
        />
      </div>
      <div
        className="single-content"
        style={
          mainContainer === false ? { display: "block" } : { display: "block" }
        }
      >
        <SingleCountry
          toggleContent={toggleContent}
          activeCountry={activeCountry}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
};

export default App;
