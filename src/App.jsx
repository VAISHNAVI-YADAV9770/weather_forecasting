import "./App.css";
import SearchBar from "./components/weather/SearchBar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>🌤 Weather Forecast</h1>
        <p>Search any city to get the latest weather updates.</p>

        <SearchBar />
      </div>
    </div>
  );
}

export default App;