import React, { useState } from "react";
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
          <WeatherForecastPreview data={forecast.list[0]} />
          <WeatherForecastPreview data={forecast.list[1]} />
          <WeatherForecastPreview data={forecast.list[2]} />
          <WeatherForecastPreview data={forecast.list[3]} />
          <WeatherForecastPreview data={forecast.list[4]} />
          <WeatherForecastPreview data={forecast.list[5]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "a3f1de950d2940f6c2f8ca0198eb4ea2";
    let forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&appid=${apiKey}&units=metric`;

    axios.get(forecastApiUrl).then(handleForecastResponse);

    return null;
  }
}
