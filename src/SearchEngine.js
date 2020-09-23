import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function Form() {
  const [WeatherDataReady, setWeatherDataReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setWeatherDataReady(true);
  }

  if (WeatherDataReady) {
    return (
      <div className="Form">
        <form id="search-form" autoComplete="off">
          <div className="row search-area">
            <div className="col-8 col-md-8">
              <input
                type="search"
                className="form-control"
                id="search-city"
                placeholder="Enter a city"
                autoFocus
              />
            </div>
            <div className="col-4 col-md-4">
              <button
                type="submit"
                className="btn btn-outline-success w-100"
                style={{ fontWeight: "bold" }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="row current-location">
            <div className="col-sm-6 button">
              <button
                type="button"
                className="btn btn-outline-success"
                style={{ fontWeight: "bold" }}
                id="button-element"
              >
                Current Location
              </button>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </form>
      </div>
    );
  } else {
    // Else will make API call and update UI
    const apiKey = "a3f1de950d2940f6c2f8ca0198eb4ea2";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return `The app is loading...`;
  }
}
