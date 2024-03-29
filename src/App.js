import React from "react";

import MainContent from "./MainContent";

import "./Styles.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <MainContent defaultCity="Madison" />
      </div>
      <footer className="github-repository">
        <a
          href="https://github.com/ayebravo/weather-react-app"
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
