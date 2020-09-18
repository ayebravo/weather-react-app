import React from "react";

export default function FeelsLike(props) {
  return (
    <div className="FeelsLike">
      <p className="description">{props.type}</p>
      <p className="number">
        <span id="feels-like-number">{props.value}°</span>
      </p>
    </div>
  );
}
