import axios from 'axios';

const API_KEY = "60629af80899dcd1df8f0a1cd03f9506";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WETHER = "FETCH_WETHER";
export function fetchWether(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WETHER,
        payload: request
    };
}
