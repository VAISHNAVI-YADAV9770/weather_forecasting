import "./App.css";
import SearchBar from "./components/weather/SearchBar";
import WeatherCard from "./components/weather/WeatherCard";

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>🌤 Weather Forecast</h1>

        <p>Search any city to get the latest weather updates.</p>

        <SearchBar />

        <WeatherCard />
      </div>
    </div>
  );
}

export default App;