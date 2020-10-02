import React from "react";
import FeelsLike from "./MoreInformation/FeelsLike";
import Humidity from "./MoreInformation/Humidity";
import Wind from "./MoreInformation/Wind";

import "./MoreInformation.css";

export default function MoreInformation(props) {
  if (props.unit === "celsius") {
    return (
      <div className="MoreInformation">
        <div className="row more-information">
          <div className="col-10 col-md-7">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <FeelsLike
                    type="Feels like"
                    value={props.feelsLike}
                    unit={props.unit}
                    setUnit={props.setUnit}
                  />
                </div>
                <br />
                <div className="row">
                  <Humidity type="Humidity" value={props.humidity} />
                </div>
                <br />
                <div className="row">
                  <Wind type="Wind" value={props.wind} unit="kmh" />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let feelsLikeFahrenheit = Math.round((props.feelsLike * 9) / 5 + 32);
    let mphWindSpeed = Math.round(props.wind / 1.609344);

    return (
      <div className="MoreInformation">
        <div className="row more-information">
          <div className="col-10 col-md-7">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <FeelsLike type="Feels like" value={feelsLikeFahrenheit} />{" "}
                  {/* Sending already converted value */}
                </div>
                <br />
                <div className="row">
                  <Humidity type="Humidity" value={props.humidity} />
                </div>
                <br />
                <div className="row">
                  <Wind type="Wind" value={mphWindSpeed} unit="mph" />
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
