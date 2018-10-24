import React from "react";
import Weather from "./Weather";
import "./WeatherDay.css";

const WeatherDay = ({ day }) => (
  <div className="weather-day">
    {day.map(weather => (
      <Weather key={weather.dt} weather={weather} />
    ))}
  </div>
);

export default WeatherDay;
