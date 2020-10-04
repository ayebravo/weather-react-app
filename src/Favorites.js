import React from "react";
import "./Favorites.css";

export default function Favorites(props) {
  return (
    <div className="Favorites row top-bar">
      <div className="col-12 col-md-12">
        <div className="fav-cities">
          <a
            className="city"
            href="#/"
            id="favorite-1"
            onClick={(e) => props.showFavoriteCity(e, 1)}
          >
            {props.favoriteCity1}
          </a>
          <a
            className="city"
            href="#/"
            id="favorite-2"
            onClick={(e) => props.showFavoriteCity(e, 2)}
          >
            {props.favoriteCity2}
          </a>
          <a
            className="city"
            href="#/"
            id="favorite-3"
            onClick={(e) => props.showFavoriteCity(e, 3)}
          >
            {props.favoriteCity3}
          </a>
        </div>
      </div>
    </div>
  );
}
