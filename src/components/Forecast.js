import React from "react";
import _ from "underscore";
import WeatherDay from "./WeatherDay";

const Forecast = ({ forecast }) => {
  const forecastGrouppedByDay = _.groupBy(forecast.list, weather => {
    const firstPart = weather.dt_txt.split(" ")[0];
    return weather.dt_txt.slice(0, firstPart.length);
  });

  const weatherList = _.mapObject(forecastGrouppedByDay, (day, key) => (
    <WeatherDay key={key} day={day} />
  ));
  return (
    <div>
      <h3>
        Weather and forecast in {forecast.city.name}, {forecast.city.country}
      </h3>
      <div>{_.toArray(weatherList)}</div>
    </div>
  );
};

export default Forecast;
