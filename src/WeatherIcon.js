import React from "react";
import cloudy from "./media/cloudy.png";
import sun from "./media/sun.png";
import sunCloudy from "./media/sunCloudy.png";
import weatherShowersScattered from "./media/weatherShowersScattered.png";
import storm from "./media/storm.png";
import coldWeather from "./media/coldWeather.png";
import foggy from "./media/foggy.png";

export default function WeatherIcon(props) {
  // Object that acts like a "Dictionary" for easy looking up values
  const codeMapping = {
    "01d": sun,
    "01n": sun,
    "04d": cloudy,
    "04n": cloudy,
    "02d": sunCloudy,
    "02n": sunCloudy,
    "03d": sunCloudy,
    "03n": sunCloudy,
    "09d": weatherShowersScattered,
    "09n": weatherShowersScattered,
    "10d": weatherShowersScattered,
    "10n": weatherShowersScattered,
    "11d": storm,
    "11n": storm,
    "13d": coldWeather,
    "13n": coldWeather,
    "50d": foggy,
    "50n": foggy,
  };

  return (
    <div className="WeatherIcon">
      <img src={codeMapping[props.icon]} alt={props.altText}></img>
    </div>
  );
}
