import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.formattedDate.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];

  let month = months[props.formattedDate.getMonth()];

  let date = props.formattedDate.getDate();
  let hour = props.formattedDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = props.formattedDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="DateTime">
      <div className="row date-time">
        <div className="col-sm-8">
          <p id="date-time">
            {day}, {month} {date} - {hour}:{minutes}
          </p>
        </div>
      </div>
    </div>
  );
}
