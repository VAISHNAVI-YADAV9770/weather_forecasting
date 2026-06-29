function WeatherCard() {
  return (
    <div className="weather-card">
      <h2>Indore</h2>

      <h1>31°C</h1>

      <p>☀️ Clear Sky</p>

      <div className="weather-info">
        <div>
          <span>Humidity</span>
          <strong>65%</strong>
        </div>

        <div>
          <span>Wind</span>
          <strong>10 km/h</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;