import axios from "axios";
import React from "react";
import _ from "underscore";

import OpenWeatherResults from "./OpenWeatherResults";
import "./Openweather.css";

const APPID = "35159fd172ab97691e89f9ba6b422f95";

const getCurrentWeather = cityName => {
  return axios.get("http://api.openweathermap.org/data/2.5/weather", {
    params: { q: cityName, APPID, units: "metric" }
  });
};

const getForecast = cityName => {
  return axios.get("http://api.openweathermap.org/data/2.5/forecast", {
    params: {
      q: cityName,
      APPID,
      units: "metric"
    }
  });
};

class Openweather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      fetchingError: null,
      searchValue: "",
      currentWeather: {},
      forecast: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    this.setState({
      fetchingError: null,
      searchValue: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.charCode === 13) this.search();
  }

  search() {
    this.setState({
      fetching: true,
      fetchingError: null
    });
    axios
      .all([
        getCurrentWeather(this.state.searchValue),
        getForecast(this.state.searchValue)
      ])
      .then(
        axios.spread((current, forecast) => {
          this.setState({
            currentWeather: current.data,
            forecast: forecast.data
          });
        })
      )
      .catch(err => {
        this.setState({ fetchingError: err.response.data.message });
        console.warn(err.response);
      })
      .then(() => {
        this.setState({ fetching: false });
      });
  }

  render() {
    return (
      <div className="openweather">
        <div className="openweather__search">
          <input
            required={"required"}
            type="text"
            value={this.state.searchValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
          <label> Search city: </label>
          <button
            className="search-btn"
            disabled={_.isEmpty(this.state.searchValue)}
            onClick={this.search}
          />
          <div className="bar" />
        </div>
        <div className="openweather__loading-bar">
          {this.state.fetching && <span> Loading... </span>}
        </div>
        <div className="openweather__error-message">
          {this.state.fetchingError && <span>{this.state.fetchingError}</span>}
        </div>
        {!_.isEmpty(this.state.currentWeather) &&
          !_.isEmpty(this.state.forecast) && (
            <OpenWeatherResults
              forecast={this.state.forecast}
              currentWeather={this.state.currentWeather}
            />
          )}
      </div>
    );
  }
}

export default Openweather;
