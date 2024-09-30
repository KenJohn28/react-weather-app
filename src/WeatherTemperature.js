import React from "react";

export default function WeatherTemperature(props) {


    let farenheit = (props.farenheit * 9) / 5 + 32;

    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
        °F
        </span>
      </div>
    );
  }