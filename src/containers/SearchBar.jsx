import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

const propTypes = {};

const defaultProps = {};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const term = event.target.searchbar.value;

    let city = "",
      country = null;
    if (term.indexOf(",") !== -1)
      [city, country] = term.split(",").map(x => x.trim());
    else city = term;
    console.log(city, country);
    if (country) this.props.fetchWeather(city, country);
    else this.props.fetchWeather(city);

    this.setState({ term: "" });
  }

  render() {
    return (
      <div className="col-md-10">
        <form onSubmit={this.onSubmit} className="input-group">
          <input
            className="form-control"
            type="text"
            name="searchbar"
            placeholder="Search City e.g. Burlingame or Seoul, KR"
            onChange={this.onInputChange}
            value={this.state.term}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchWeather,
    },
    dispatch,
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
