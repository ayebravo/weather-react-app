import React from "react";
import Temperature from "./Temperature";
import CurrentCity from "./CurrentCity";
import DateTime from "./DateTime";
import Description from "./Description";

import MoreInformation from "./MoreInformation";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <CurrentCity name="Paris" />
      <DateTime
        date="Monday"
        month="September"
        day="14"
        hours="10"
        minutes="04"
      />
      <Description weather="overcast clouds" />
      <Temperature data={props.data.temperature} />

      <MoreInformation />
    </div>
  );
}
