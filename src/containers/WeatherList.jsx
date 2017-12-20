import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Chart from "../components/Chart.js";
import GoogleMap from "../components/GoogleMap.jsx";

const propTypes = {};

const defaultProps = {};

const renderCity = data => {
  if (!data) return "";

  const temp_list = data.list.map(weather => weather.main.temp - 273.15);
  const humid_list = data.list.map(weather => weather.main.humidity);
  const pressure_list = data.list.map(weather => weather.main.pressure);

  const { lat, lon } = data.city.coord;

  return (
    <tr key={data.city.name}>
      <td>
        <GoogleMap lat={lat} lon={lon} />
      </td>
      <td>
        <Chart data={temp_list} units="°C" color="orange" />
      </td>
      <td>
        <Chart data={pressure_list} units="hPa" color="green" />
      </td>
      <td>
        <Chart data={humid_list} units="%" color="black" />
      </td>
    </tr>
  );
};

class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-md-10">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (°C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(cityData => renderCity(cityData))}
          </tbody>
        </table>
      </div>
    );
  }
}

WeatherList.propTypes = propTypes;
WeatherList.defaultProps = defaultProps;

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
