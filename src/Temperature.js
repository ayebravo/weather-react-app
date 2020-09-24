import React from "react";
import "./Temperature.css";
import clouds from "./media/clouds.png";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row temperature">
        <div className="col-sm-4 current-temperature">
          <h1 id="temp-number">{props.data}°</h1>
        </div>
        <div className="col-sm-4 weather-now">
          <img src={clouds} /* {props.data} */ alt={props.altText} />
          {/* id="weather-image" */}
          {/* style={{ visibility: "hidden" }} */}
        </div>
      </div>
    </div>
  );
}
