import React, { useEffect, useState } from "react";
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

    if (
      response.data.name === favoriteCity1 ||
      response.data.name === favoriteCity2 ||
      response.data.name === favoriteCity3
    ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  function search(cityName) {
    if (cityName === "" || cityName === undefined) {
      cityName = city;
    }

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl)
      .then(handleResponse)
      .catch(err => console.log(err));
  }


  useEffect(() => {
    search();
  
    return () => {
    // cancel your api calls here so that there won't be any data leaks
    }
  }, []);

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

    let apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;

    let urlKey = `${apiUrl}&appid=${apiKey}`;
    axios.get(urlKey).then(handleResponse);
  }

  function handleCurrentLocationClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function showFavoriteCity(event, favoriteNumber) {
    event.preventDefault();

    if (favoriteNumber === 1) {
      search(favoriteCity1);
    } else if (favoriteNumber === 2) {
      search(favoriteCity2);
    } else {
      search(favoriteCity3);
    }
  }

  function handleStarClick(event) {
    event.preventDefault();

    // Check if city(current city element) is one of the favorites
    if (
      weatherData.city === favoriteCity1 ||
      weatherData.city === favoriteCity2 ||
      weatherData.city === favoriteCity3
    ) {
      setIsFavorite(false);
      // Remove city from favorites when I click star
      if (weatherData.city === favoriteCity1) {
        setFavoriteCity1("Favorite city 1");
        setCookie("favorite1", "", 365);
      } else if (weatherData.city === favoriteCity2) {
        setFavoriteCity2("Favorite city 2");
        setCookie("favorite2", "", 365);
      } else if (weatherData.city === favoriteCity3) {
        setFavoriteCity3("Favorite city 3");
        setCookie("favorite3", "", 365);
      }
    } else {
      // Add city to favorite
      setIsFavorite(true);

      if (favoriteCity1 === "Favorite city 1") {
        setFavoriteCity1(weatherData.city);

        setCookie("favorite1", weatherData.city, 365);
      } else if (favoriteCity2 === "Favorite city 2") {
        setFavoriteCity2(weatherData.city);
        setCookie("favorite2", weatherData.city, 365);
      } else if (favoriteCity3 === "Favorite city 3") {
        setFavoriteCity3(weatherData.city);
        setCookie("favorite3", weatherData.city, 365);
      } else {
        setFavoriteCity1(weatherData.city);
        setCookie("favorite1", weatherData.city, 365);
      }
    }
  }

  // This happens only one time when the component loads - Checks if there is saved data in the cookies and restores favorite cities when user last used the app
  useEffect(() => {
    let firstFavCity = getCookie("favorite1");
    if (firstFavCity !== "") {
      setFavoriteCity1(firstFavCity);
      setCity(firstFavCity);
    }

    let secondFavCity = getCookie("favorite2");
    if (secondFavCity !== "") {
      setFavoriteCity2(secondFavCity);
    }

    let thirdFavCity = getCookie("favorite3");
    if (thirdFavCity !== "") {
      setFavoriteCity3(thirdFavCity);
    }
  }, []);

  // Cookies section - Generic functions copied from https://www.w3schools.com/js/js_cookies.asp

  //setCookies: It saves user's data in user's computer
  //cname: name of cookie (string)
  //cvalue: value you want to save
  //exdays: number of days the cookie is stored before it expires
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //getCookie: retrives data from user's browser
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  if (dataReady) {
    // When API call is ready with weather information, return the following
    return (
      <div className="MainContent">
        <Favorites
          favoriteCity1={favoriteCity1}
          favoriteCity2={favoriteCity2}
          favoriteCity3={favoriteCity3}
          showFavoriteCity={showFavoriteCity}
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
