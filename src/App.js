import "./App.css";
import {
  Navbar,
  SearchAndFilter,
  CountryContainer,
  SingleCountry,
} from "./components/index";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <SearchAndFilter />
      <CountryContainer /> */}
      <SingleCountry />
    </div>
  );
}

export default App;
