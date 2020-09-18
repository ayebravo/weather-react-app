import React from "react";
import "./Favorites.css";

export default function Favorites() {
  return (
    <div className="Favorites row top-bar">
      <div className="col-11 col-md-12">
        <div className="fav-cities">
          <a className="city" href="#/" id="favorite-1">
            Favorite city 1
          </a>
          <a className="city" href="#/" id="favorite-2">
            Favorite city 2
          </a>
          <a className="city" href="#/" id="favorite-3">
            Favorite city 3
          </a>
        </div>
      </div>
    </div>
  );
}
