import React from "react";
import FeelsLike from "./MoreInformation/FeelsLike";
import Humidity from "./MoreInformation/Humidity";
import Wind from "./MoreInformation/Wind";

import "./MoreInformation.css";

export default function MoreInformation() {
  return (
    <div className="MoreInformation">
      <div className="row more-information">
        <div className="col-11 col-md-7">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <FeelsLike type="Feels like" value={71} />
              </div>
              <br />
              <div className="row">
                <Humidity type="Humidity" value={92} />
              </div>
              <br />
              <div className="row">
                <Wind type="Wind" value={4} />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
