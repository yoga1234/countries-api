import "./App.css";
import { Navbar, SearchAndFilter, CountryContainer } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchAndFilter />
      <CountryContainer />
    </div>
  );
}

export default App;
