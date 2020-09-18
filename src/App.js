import React from "react";
import Favorites from "./Favorites";
import SearchEngine from "./SearchEngine";
import CurrentCity from "./CurrentCity";
import DateTime from "./DateTime";
import Description from "./Description";
import Temperature from "./Temperature";
import MoreInformation from "./MoreInformation";

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
        </div>
      </div>
    </div>
  );
}

export default App;
