import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import ReactLoaderSpinner from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./MainContent.css";

export default function MainContent(props) {
  const [dataReady, setdataReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000), // New Date() creates an object
      /* icon: response.data.icon, */
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
    });
    setdataReady(true);
  }

  if (dataReady) {
    // When API call is ready with weather information, return the following
    return (
      <div className="row main-content">
        <div className="col-12 col-md-7 left-side">
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
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <div className="col-12 col-md-5 right-side border-l">
          <Forecast />
        </div>
      </div>
    );
  } else {
    // Else will make API call and update UI
    const apiKey = "a3f1de950d2940f6c2f8ca0198eb4ea2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <ReactLoaderSpinner
        type="ThreeDots"
        color="#3242B9"
        height={80}
        width={80}
      />
    );
  }
}
