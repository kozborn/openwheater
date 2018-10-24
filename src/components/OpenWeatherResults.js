import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./OpenWeatherResults.css";

const OpenWeatherResults = ({ currentWeather, forecast }) => {
  return (
    <div className="openweather__results">
      <div className="openweather__results__left">
        <CurrentWeather currentWeather={currentWeather} />
      </div>
      <div className="openweather__results__right">
        <Forecast forecast={forecast} />
      </div>
    </div>
  );
};

export default OpenWeatherResults;
