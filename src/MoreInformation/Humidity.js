import React from "react";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <p className="description">{props.type}</p>
      <p className="number">
        <span id="humidity-number">{props.value} %</span>
      </p>
    </div>
  );
}
