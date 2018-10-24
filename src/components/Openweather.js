import axios from "axios";
import React from "react";
import _ from "underscore";

import OpenWeatherResults from "./OpenWeatherResults";
import "./Openweather.css";

const APPID = "35159fd172ab97691e89f9ba6b422f95";

const current = {
  coord: {
    lon: 20.63,
    lat: 50.87
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04n"
    }
  ],
  base: "stations",
  main: {
    temp: 277.134,
    pressure: 989.38,
    humidity: 68,
    temp_min: 277.134,
    temp_max: 277.134,
    sea_level: 1022.73,
    grnd_level: 989.38
  },
  wind: {
    speed: 10.37,
    deg: 319.502
  },
  clouds: {
    all: 68
  },
  dt: 1540407609,
  sys: {
    message: 0.5194,
    country: "PL",
    sunrise: 1540358197,
    sunset: 1540394743
  },
  id: 769250,
  name: "Kielce",
  cod: 200
};

const data = {
  cod: "200",
  message: 0.002,
  cnt: 7,
  list: [
    {
      dt: 1540414800,
      main: {
        temp: 277.12,
        temp_min: 277.118,
        temp_max: 277.12,
        pressure: 991.14,
        sea_level: 1024.58,
        grnd_level: 991.14,
        humidity: 68,
        temp_kf: 0
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 80
      },
      wind: {
        speed: 9.27,
        deg: 317.001
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2018-10-24 21:00:00"
    },
    {
      dt: 1540425600,
      main: {
        temp: 277.42,
        temp_min: 277.42,
        temp_max: 277.424,
        pressure: 991.76,
        sea_level: 1025.41,
        grnd_level: 991.76,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n"
        }
      ],
      clouds: {
        all: 88
      },
      wind: {
        speed: 7.52,
        deg: 310
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2018-10-25 00:00:00"
    },
    {
      dt: 1540436400,
      main: {
        temp: 275.75,
        temp_min: 275.75,
        temp_max: 275.75,
        pressure: 991.29,
        sea_level: 1025.03,
        grnd_level: 991.29,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "02n"
        }
      ],
      clouds: {
        all: 8
      },
      wind: {
        speed: 5.93,
        deg: 289.004
      },
      rain: {},
      sys: {
        pod: "n"
      },
      dt_txt: "2018-10-25 03:00:00"
    },
    {
      dt: 1540447200,
      main: {
        temp: 275.87,
        temp_min: 275.868,
        temp_max: 275.87,
        pressure: 989.4,
        sea_level: 1022.91,
        grnd_level: 989.4,
        humidity: 91,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 76
      },
      wind: {
        speed: 5.26,
        deg: 258.503
      },
      rain: {
        "3h": 0.2925
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-10-25 06:00:00"
    },
    {
      dt: 1540458000,
      main: {
        temp: 277.745,
        temp_min: 277.745,
        temp_max: 277.745,
        pressure: 985.96,
        sea_level: 1019.1,
        grnd_level: 985.96,
        humidity: 98,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 7.12,
        deg: 237.01
      },
      rain: {
        "3h": 2.49
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-10-25 09:00:00"
    },
    {
      dt: 1540468800,
      main: {
        temp: 282.236,
        temp_min: 282.236,
        temp_max: 282.236,
        pressure: 983.9,
        sea_level: 1016.65,
        grnd_level: 983.9,
        humidity: 98,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 9.75,
        deg: 288.001
      },
      rain: {
        "3h": 1.355
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-10-25 12:00:00"
    },
    {
      dt: 1540479600,
      main: {
        temp: 282.372,
        temp_min: 282.372,
        temp_max: 282.372,
        pressure: 983.92,
        sea_level: 1016.65,
        grnd_level: 983.92,
        humidity: 97,
        temp_kf: 0
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: {
        all: 92
      },
      wind: {
        speed: 9.86,
        deg: 292.503
      },
      rain: {
        "3h": 0.495
      },
      sys: {
        pod: "d"
      },
      dt_txt: "2018-10-25 15:00:00"
    }
  ],
  city: {
    id: 769250,
    name: "Kielce",
    coord: {
      lat: 50.8718,
      lon: 20.6308
    },
    country: "PL",
    population: 208598
  }
};

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
      currentWeather: current,
      forecast: data
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
