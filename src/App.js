import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noreferrer noopener">
            Kenya Johnson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KenJohn28/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://mojos-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
