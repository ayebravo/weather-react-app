import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./Forecast.css";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false); // Tracks if API has been loaded
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  function getForecastWeather() {
    let apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl)
      .then(handleForecastResponse)
      .catch(err => console.log(err));
  }

  // The useEffect above is not calling getForecastWeather as expected once I search for a new city.
  useEffect(() => {
    getForecastWeather();

    return () => {
    // cancel your api calls here so that there won't be any data leaks
    }
  }, []);

  // TODO: Fix forecast - Why?
  // 1) It disappears visually when selecting "current city"
  // 2) It seems to be making too many requests to the API
  if (loaded && props.data.city === forecast.city.name) {
    return (
      <div className="Forecast">
        <div className="rows-group" id="forecast">
          <div className="row max-min">
            <div className="col-2 col-md-3"></div>
            <div className="col-6 col-md-6 both-temp">
              <p className="max-temp">Max</p>
              <p className="min-temp">Min</p>
            </div>
            <div className="col-2 col-md-3"></div>
          </div>
          <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[3]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[4]} unit={props.unit} />
          <WeatherForecastPreview data={forecast.list[5]} unit={props.unit} />
        </div>
      </div>
    );
  } 
  else {
    // getForecastWeather();
    // let apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    // let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;

    // axios.get(forecastApiUrl)
    //   .then(handleForecastResponse)
    //   .catch(err => console.log(err));

    return null;
  }
}
