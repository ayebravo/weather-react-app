import React from "react";
import FeelsLike from "./MoreInformation/FeelsLike";
import Humidity from "./MoreInformation/Humidity";
import Wind from "./MoreInformation/Wind";

import "./MoreInformation.css";

export default function MoreInformation(props) {
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
                <Wind type="Wind" value={props.wind} />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
