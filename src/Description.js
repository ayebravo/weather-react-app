import React from "react";
import "./Description.css";

export default function Description(props) {
  return (
    <div className="Description">
      <p className="description" id="overall-description">
        {props.weather}
      </p>
    </div>
  );
}
