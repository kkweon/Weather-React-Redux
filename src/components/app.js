import React, { Component } from "react";
import SearchBar from "../containers/SearchBar.jsx";
import WeatherList from "../containers/WeatherList";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ marginTop: "5%" }}>
          <div className="col-md-12">
            <h1>Weather Demo in React & Redux</h1>
          </div>
        </div>

        <div className="row">
          <SearchBar />
        </div>

        <div className="row" style={{ marginTop: "5%" }}>
          <WeatherList />
        </div>
      </div>
    );
  }
}
