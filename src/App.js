import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank">
            Kenya Johnson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KenJohn28/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
