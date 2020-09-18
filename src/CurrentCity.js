import React from "react";
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
        <div className="col degree-type">
          <div className="col-C">
            <a href="#/" id="change-to-celsius" className="active">
              C°
            </a>
          </div>
          <div className="col-F">
            <a href="#/" id="change-to-Fahrenheit">
              F°
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
