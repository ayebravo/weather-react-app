import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row temperature">
        <div className="col-sm-4 current-temperature">
          <h1 id="temp-number">{props.data}°</h1>
        </div>
        <div className="col-sm-4 weather-now">
          <WeatherIcon icon={props.image} />
        </div>
      </div>
    </div>
  );
}
