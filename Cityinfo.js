import React, { useState } from "react";
import Dates from "./Dates";
import Forecast from "./Forecast";

export default function CityInfo({ info }) {
  const [degrees, setDegrees] = useState({
    unit: "c",
    temp: info.temperature,
    min: info.tempMin,
    max: info.tempMax,
  });

  function toFahrenheit() {
    setDegrees({
      unit: "f",
      temp: Math.round((info.temperature * 9) / 5 + 32),
      min: Math.round((info.tempMin * 9) / 5 + 32),
      max: Math.round((info.tempMax * 9) / 5 + 32),
    });
  }
  function toCelsius() {
    setDegrees({
      unit: "c",
      temp: info.temperature,
      min: info.tempMin,
      max: info.tempMax,
    });
  }
  return (
    <div className="row main">
      <div className="col-6">
        <h1 className="text-capitalize">{info.name}</h1>
        <div className="row">
          <div className="col">
            <section className="current-degree">
              {degrees.temp}°
              <span>
                {" "}
                <button
                  className={
                    degrees.unit === "c"
                      ? "units fs-2"
                      : "units fs-3 text-secondary"
                  }
                  onClick={toCelsius}
                >
                  C
                </button>
                |
                <button
                  className={
                    degrees.unit === "f"
                      ? "units fs-2"
                      : "units fs-3 text-secondary"
                  }
                  onClick={toFahrenheit}
                >
                  F
                </button>
              </span>
            </section>
          </div>
          <div className="col-4">
            <div className="text-center">
              <Dates value={info.timeAndDate} />
              <div className="fs-2">
                {" "}
                {degrees.min} ° / {degrees.max} °
              </div>
            </div>
            <br />
            <ul>
              {info.items.map(function (item, index) {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <section className="fs-1">
          <img src={info.icon} alt={info.description}></img> {info.description}
        </section>
      </div>
      <div className="col-2"></div>
      <div className="col-4 fs-1 forecast lh-1">
        <Forecast cityName={info.name} />
      </div>
    </div>
  );
}
