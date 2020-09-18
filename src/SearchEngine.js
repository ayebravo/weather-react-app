import React from "react";
import "./SearchEngine.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" autoComplete="off">
        <div className="row search-area">
          <div className="col-8 col-md-8">
            <input
              type="search"
              className="form-control"
              id="search-city"
              placeholder="City"
              autoFocus
            />
          </div>
          <div className="col-4 col-md-4">
            <button
              type="submit"
              className="btn btn-outline-success"
              style={{ fontWeight: "bold" }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="row current-location">
          <div className="col-sm-6 button">
            <button
              type="button"
              className="btn btn-outline-success"
              style={{ fontWeight: "bold" }}
              id="button-element"
            >
              Current Location
            </button>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </form>
    </div>
  );
}
