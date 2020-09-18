import React from "react";

export default function Wind(props) {
  return (
    <div className="Wind">
      <p className="description">{props.type}</p>
      <p className="number">
        <span id="speed-number">{props.value} km/h</span>
      </p>
    </div>
  );
}
