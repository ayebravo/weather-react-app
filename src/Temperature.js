import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Temperature.css";

export default function Temperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="Temperature">
        <div className="row temperature">
          <div className="col-sm-4 current-temperature">
            <h1 id="temp-number">{props.celsius}°</h1>
          </div>
          <div className="col-sm-4 weather-now">
            <WeatherIcon icon={props.image} />
          </div>
          <div className="col-sm-4 current-temperature">
            <div className="TemperatureUnit">
              <div className="col degree-type">
                <div className="col-C">
                  <a href="#/" id="change-to-celsius" className="active">
                    C°
                  </a>
                </div>
                <div className="col-F">
                  <a
                    href="#/"
                    id="change-to-Fahrenheit"
                    onClick={showFahrenheit}
                  >
                    F°
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);

    return (
      <div className="Temperature">
        <div className="row temperature">
          <div className="col-sm-4 current-temperature">
            <h1 id="temp-number">{fahrenheit}°</h1>
          </div>
          <div className="col-sm-4 weather-now">
            <WeatherIcon icon={props.image} />
          </div>
          <div className="col-sm-4 current-temperature">
            <div className="TemperatureUnit">
              <div className="col degree-type">
                <div className="col-C">
                  <a href="#/" id="change-to-celsius" onClick={showCelsius}>
                    C°
                  </a>
                </div>
                <div className="col-F">
                  <a href="#/" id="change-to-Celsius" className="active">
                    F°
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
