import { useState, useEffect } from "react";
import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  // SingleCountry,
} from "./components/index";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [countryData, setCountryData] = useState();
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
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar toggle={themeToggle} darkMode={darkMode} />
      <SearchAndFilter darkMode={darkMode} />
      {/* do not render when the data is unavailable */}
      {/* <CountryContainer countryData={countryData} /> */}
      {/* <SingleCountry darkMode={darkMode} /> */}
    </div>
  );
};

export default App;
