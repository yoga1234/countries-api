import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  // SingleCountry,
} from "./components/index";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
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
  // useEffect(() => {
  //   if (darkMode === true) {
  //     document.body.classList.remove("light-mode");
  //   } else {
  //     document.body.classList.add("light-mode");
  //   }
  // }, []);

  return (
    <div className="App">
      <Navbar toggle={themeToggle} darkMode={darkMode} />
      <SearchAndFilter />
      <CountryContainer />
      {/* <SingleCountry /> */}
    </div>
  );
};

export default App;
