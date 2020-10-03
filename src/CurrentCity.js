import React from "react";

import "./CurrentCity.css";

export default function CurrentCity(props) {
  let iconName = "far fa-star";
  if (props.isFavorite) {
    iconName = "fas fa-star";
  } else {
    iconName = "far fa-star";
  }

  return (
    <div className="CurrentCity">
      <div className="row current-city">
        <div className="col-4 col-md-4">
          <h2 id="city">{props.name}</h2>
        </div>
        <div className="col-2 col-md-1 favorite" id="favorite">
          <i
            className={iconName}
            id="star-favorite"
            onClick={props.handleStarClick}
          ></i>
        </div>
      </div>
    </div>
  );
}
