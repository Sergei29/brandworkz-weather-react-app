import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import WeatherApp from "./containers/WeatherApp";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById("root")
);
