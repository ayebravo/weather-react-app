import React from "react";
import sun from "./media/sun.png";
import sunCloudy from "./media/sunCloudy.png";
import raincloud from "./media/rainCloud.png";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="rows-group" id="forecast">
        <div className="row max-min">
          <div className="col-2 col-md-3"></div>
          <div className="col-6 col-md-6 both-temp">
            <p className="max-temp">Max</p>
            <p className="min-temp">Min</p>
          </div>
          <div className="col-2 col-md-3"></div>
        </div>
        <div className="row day-1">
          <div className="col-sm-4">
            <h5>Saturday</h5>
            <p className="date-1">6/27</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">84°</p>
            <p className="min-temp number">62°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={sun} alt="sun" />
          </div>
        </div>
        <div className="row day-2">
          <div className="col-sm-4">
            <h5>Sunday</h5>
            <p className="date-2">6/28</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">85°</p>
            <p className="min-temp number">66°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={sunCloudy} alt="cloudy" />
          </div>
        </div>
        <div className="row day-3">
          <div className="col-sm-4">
            <h5>Monday</h5>
            <p className="date-2">6/29</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">89°</p>
            <p className="min-temp number">69°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={raincloud} alt="rainy" />
          </div>
        </div>
        <div className="row day-4">
          <div className="col-sm-4">
            <h5>Tuesday</h5>
            <p className="date-4">6/30</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">87°</p>
            <p className="min-temp number">69°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={raincloud} alt="rainy" />
          </div>
        </div>
        <div className="row day-5">
          <div className="col-sm-4">
            <h5>Wednesday</h5>
            <p className="date-5">6/30</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">85°</p>
            <p className="min-temp number">64°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={sunCloudy} alt="cloudy" />
          </div>
        </div>
        <div className="row day-6">
          <div className="col-sm-4">
            <h5>Thursday</h5>
            <p className="date-6">7/01</p>
          </div>
          <div className="col-sm-4 both-temp">
            <p className="max-temp">85°</p>
            <p className="min-temp number">64°</p>
          </div>
          <div className="col-sm-4 image">
            <img src={sunCloudy} alt="cloudy" />
          </div>
        </div>
      </div>
    </div>
  );
}
