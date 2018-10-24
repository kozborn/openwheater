import axios from "axios";
import React from "react";
import _ from "underscore";

import OpenWeatherResults from "./OpenWeatherResults";
import "./Openweather.css";

const APPID = "35159fd172ab97691e89f9ba6b422f95";

class Openweather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      searchValue: "",
      restults: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(e) {
    this.setState({ searchValue: e.target.value });
  }

  search() {
    const url = "http://api.openweathermap.org/data/2.5/forecast";
    //?q=Krak%C3%B3w&APPID=35159fd172ab97691e89f9ba6b422f95&cnt=7
    this.setState({ fetching: true });
    axios
      .get(url, {
        params: {
          q: this.state.searchValue,
          APPID,
          cnt: 7
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.warn(err);
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
          />
          <label>Search city:</label>
          <button
            className="search-btn"
            disabled={_.isEmpty(this.state.searchValue)}
            onClick={this.search}
          />
          <div className="bar" />
        </div>
        <div className="openweather__loading-bar">
          {this.state.fetching && <span>Loading...</span>}
        </div>
        <div className="openweather__results">
          <OpenWeatherResults restults={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Openweather;
