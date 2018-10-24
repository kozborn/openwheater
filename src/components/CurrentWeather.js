import React from "react";

const CurrentWeather = ({ currentWeather }) => (
  <div className="openweather__city-data">
    <h3>
      {currentWeather.name}, {currentWeather.sys.country}
    </h3>
    <div>
      {currentWeather.weather.map(weather => (
        <div key={weather.id}>{weather.description}</div>
      ))}
    </div>
    <div>Pressure: {currentWeather.main.pressure} hpa</div>
    <div>
      Temp: {parseInt(currentWeather.main.temp)}
      °C
    </div>
    <div>Humidity: {currentWeather.main.humidity} %</div>
    <div className="openwather__city-data__coords">
      [{currentWeather.coord.lat}, {currentWeather.coord.lon}]
    </div>
  </div>
);

export default CurrentWeather;
