import React from "react";
import _ from "underscore";
import "./Weather.css";

const Weather = ({ weather }) => {
  const icon = _.first(weather.weather).icon;
  const description = _.first(weather.weather).description;
  const date = new Date(weather.dt_txt);
  return (
    <div className="weather">
      <div>
        <div className="weather__date">{date.toLocaleString()}</div>
        <div className="weather__icon">
          <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        </div>
      </div>
      <div>
        <div className="param weather__temp">
          {weather.main.temp}
          &nbsp;°C
        </div>
        <div className="param weather__pressure">
          {weather.main.pressure}
          &nbsp;hpa
        </div>
        <div className="param weather__clouds">
          Clouds&nbsp;
          {weather.clouds.all}%
        </div>
        <div className="param weather__wind">
          {weather.wind.speed}
          &nbsp;m/s
        </div>
      </div>
      <div className="weather__desc">{description}</div>
    </div>
  );
};

export default Weather;
