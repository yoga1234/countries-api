import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  SingleCountry,
} from "./components/index";

const App = () => {
  const themeToggle = () => {
    console.log(document.body.classList);
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
