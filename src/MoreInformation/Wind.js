import React from "react";

export default function Wind(props) {
  return (
    <div className="Wind">
      <p className="description">{props.type}</p>
      <p className="number speed">
        <span id="speed-number">{props.value}</span>
        <span id="speed-unit"> {props.unit}</span>
      </p>
    </div>
  );
}
