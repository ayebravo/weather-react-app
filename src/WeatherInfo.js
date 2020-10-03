import React from "react";
import Temperature from "./Temperature";
import CurrentCity from "./CurrentCity";
import DateTime from "./DateTime";
import Description from "./Description";

import MoreInformation from "./MoreInformation";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <CurrentCity
        name={props.data.city}
        handleStarClick={props.handleStarClick}
        isFavorite={props.isFavorite}
      />
      <DateTime formattedDate={props.data.date} />
      <Description weather={props.data.description} />
      <Temperature
        celsius={props.data.temperature}
        image={props.data.icon}
        altText={props.data.description}
        unit={props.unit}
        setUnit={props.setUnit}
      />
      <MoreInformation
        humidity={props.data.humidity}
        feelsLike={props.data.feelsLike}
        wind={props.data.wind}
        unit={props.unit}
        setUnit={props.setUnit}
      />
    </div>
  );
}
