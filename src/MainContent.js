import React, { useState } from "react";
import axios from "axios";
import Favorites from "./Favorites";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import ReactLoaderSpinner from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./MainContent.css";

export default function MainContent(props) {
  const [dataReady, setdataReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  const [favoriteCity1, setFavoriteCity1] = useState("Favorite city 1");
  const [favoriteCity2, setFavoriteCity2] = useState("Favorite city 2");
  const [favoriteCity3, setFavoriteCity3] = useState("Favorite city 3");
  const [isFavorite, setIsFavorite] = useState(false);

  function handleResponse(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000), // New Date() creates an object
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      wind: Math.round(response.data.wind.speed),
    });
    setdataReady(true);
  }

  function search() {
    const apiKey = "a3f1de950d2940f6c2f8ca0198eb4ea2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Search for a city - search() takes care of making API call
    // API callback updates the state
    search();
  }

  function handleCityUpdate(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
    let currentLatitude = position.coords.latitude;
    let currentLongitude = position.coords.longitude;

    let apiKey = `a3f1de950d2940f6c2f8ca0198eb4ea2`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;

    let urlKey = `${apiUrl}&appid=${apiKey}`;
    axios.get(urlKey).then(handleResponse);
  }

  function handleCurrentLocationClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function handleStarClick(event) {
    event.preventDefault();
    setIsFavorite(true);
    setFavoriteCity1(city);
  }

  if (dataReady) {
    // When API call is ready with weather information, return the following
    return (
      <div className="MainContent">
        <Favorites
          favoriteCity1={favoriteCity1}
          favoriteCity2={favoriteCity2}
          favoriteCity3={favoriteCity3}
        />
        <br />
        <div className="row main-content">
          <div className="col-12 col-md-7 left-side">
            <div className="Form">
              <form id="search-form" autoComplete="off" onSubmit={handleSubmit}>
                <div className="row search-area">
                  <div className="col-8 col-md-8">
                    <input
                      type="search"
                      className="form-control"
                      id="search-city"
                      placeholder="Enter a city"
                      autoFocus
                      onChange={handleCityUpdate}
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
                      onClick={handleCurrentLocationClick}
                    >
                      Current Location
                    </button>
                  </div>
                  <div className="col-sm-6"></div>
                </div>
              </form>
              <WeatherInfo
                data={weatherData}
                unit={unit}
                setUnit={setUnit}
                handleStarClick={handleStarClick}
                isFavorite={isFavorite}
              />
            </div>
          </div>
          <div className="col-12 col-md-5 right-side border-l">
            <Forecast data={weatherData} unit={unit} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
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
