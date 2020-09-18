import React from "react";
import Favorites from "./Favorites";
import SearchEngine from "./SearchEngine";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
