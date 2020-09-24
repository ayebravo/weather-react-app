import React from "react";
import Favorites from "./Favorites";
import SearchEngine from "./SearchEngine";

import Forecast from "./Forecast";

import "./Styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Favorites />

        <br />
        <div className="row main-content">
          <div className="col-12 col-md-7 left-side">
            <SearchEngine />
          </div>
          <div className="col-12 col-md-5 right-side border-l">
            <Forecast />
          </div>
        </div>
      </div>
      <footer className="github-repository">
        <a
          href="https://github.com/ayebravo/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Open-source code
        </a>
        <p>
          {" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/ayelen-bravo-20115441/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayelen Bravo
          </a>
        </p>
      </footer>
    </div>
  );
}
