import React from "react";
/* import TemperatureUnit from "./TemperatureUnit"; */

import "./CurrentCity.css";

export default function CurrentCity(props) {
  return (
    <div className="CurrentCity">
      <div className="row current-city">
        <div className="col-4 col-md-4">
          <h2 id="city">{props.name}</h2>
        </div>
        <div className="col-2 col-md-1 favorite" id="favorite">
          <i className="far fa-star" id="star-favorite"></i>
        </div>
        {/* <TemperatureUnit celsius={props.number} /> */}
      </div>
    </div>
  );
}
