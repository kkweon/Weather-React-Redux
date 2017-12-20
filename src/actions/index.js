// OpenWeatherMap: https://home.openweathermap.org/api_keys
// Endpoint: https://api.openweathermap.org/data/2.5/forecast?q={city name},{country code}&appid={API_KEY}
import axios from "axios";

const API_KEY = "60629af80899dcd1df8f0a1cd03f9506";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city, country = "us") {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
