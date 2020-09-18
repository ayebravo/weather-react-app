import React from "react";
import Favorites from "./Favorites";
import SearchEngine from "./SearchEngine";
import CurrentCity from "./CurrentCity";
import DateTime from "./DateTime";
import Description from "./Description";
import Temperature from "./Temperature";
import MoreInformation from "./MoreInformation";
import Forecast from "./Forecast";

import "./Styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Favorites />

        <br />
        <div className="row main-content">
          <div className="col-12 col-md-7 left-side">
            <SearchEngine />
            <CurrentCity name="Paris" />
            <DateTime
              date="Monday"
              month="September"
              day="14"
              hours="10"
              minutes="04"
            />
            <Description weather="overcast clouds" />
            <Temperature number={20} />
            <MoreInformation />
          </div>
          <div className="col-12 col-md-5 right-side border-l">
            <Forecast />
          </div>
        </div>
      </div>
      <div className="github-repository">
        <a
          href="https://github.com/ayebravo/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
        >
          Open-source code
        </a>
        <p> by Ayelen Bravo</p>
      </div>
    </div>
  );
}

export default App;
