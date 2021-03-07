import axios from "axios";

const strApiKey = process.env.REACT_APP_RAPID_API_KEY;
const strApiHost = process.env.REACT_APP_RAPID_API_HOST;

export const axiosWeather = axios.create({
  baseURL: "https://weatherbit-v1-mashape.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": strApiKey,
    "x-rapidapi-host": strApiHost,
  },
});
