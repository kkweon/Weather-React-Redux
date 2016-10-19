import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from "../components/google_map";


class WeatherList extends Component {

    renderWeather = (cityData) => {
        const name = cityData.city.name;
        const temps = cityData.list.map(row => {return row.main.temp;}).map(temp => {return temp - 273.15});
        const pressure = cityData.list.map(row => {return row.main.pressure;});
        const humidity = cityData.list.map(row => {return row.main.humidity;});

        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap
                        lon={lon}
                        lat={lat} />
                </td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressure} color="green" units="hPa" /></td>
                <td><Chart data={humidity} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temparature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map((this.renderWeather))}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather }) {
    console.log("[mapStateToProps]: ", weather);
    return {
        weather,
    };
}

export default connect(mapStateToProps)(WeatherList);

