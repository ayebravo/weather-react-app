import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherForecastPreview">
        <div className="row day">
          <div className="col-3 col-sm-4">
            <h5>{hours()}</h5>
          </div>
          <div className="col-3 col-sm-4 both-temp">
            <p className="max-temp">{Math.round(props.data.main.temp_max)}°</p>
            <p className="min-temp number">
              {Math.round(props.data.main.temp_min)}°
            </p>
          </div>
          <div className="col-3 col-sm-4 image">
            <WeatherIcon icon={props.data.weather[0].icon} />
          </div>
        </div>
      </div>
    );
  } else {
    let tempMaxFahrenheit = Math.round((props.data.main.temp_max * 9) / 5 + 32);
    let tempMinFahrenheit = Math.round((props.data.main.temp_min * 9) / 5 + 32);

    return (
      <div className="WeatherForecastPreview">
        <div className="row day">
          <div className="col-3 col-sm-4">
            <h5>{hours()}</h5>
          </div>
          <div className="col-3 col-sm-4 both-temp">
            <p className="max-temp">{tempMaxFahrenheit}°</p>
            <p className="min-temp number">{tempMinFahrenheit}°</p>
          </div>
          <div className="col-3 col-sm-4 image">
            <WeatherIcon icon={props.data.weather[0].icon} />
          </div>
        </div>
      </div>
    );
  }
}
