import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  // SingleCountry,
} from "./components/index";

const App = () => {
  const themeToggle = () => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <div className="App">
      <Navbar toggle={themeToggle} />
      <SearchAndFilter />
      <CountryContainer />
      {/* <SingleCountry /> */}
    </div>
  );
};

export default App;
