import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  return (
    <div className="DateTime">
      <div className="row date-time">
        <div className="col-sm-8">
          <p id="date-time">
            {props.date}, {props.month} {props.day} - {props.hours}:
            {props.minutes}
          </p>
        </div>
      </div>
    </div>
  );
}
