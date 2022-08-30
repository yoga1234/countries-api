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
  const getActiveCountry = (data) => {
    setActiveCountry(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar toggle={themeToggle} darkMode={darkMode} />
      <div className="main-content">
        <SearchAndFilter darkMode={darkMode} />
        <CountryContainer
          getActiveCountry={getActiveCountry}
          countryData={countryData}
        />
      </div>
      <div className="single-content">
        <SingleCountry activeCountry={activeCountry} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
