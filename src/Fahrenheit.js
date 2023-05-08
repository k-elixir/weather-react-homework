import React from "react";
export default function Fahrenheit() {
  function toFahrenheit() {
    function toCelsius() {
      setDegree();
    }
    return (
      <div className="row main">
        <div className="col-6">
          <h1 className="text-capitalize">{cityName}</h1>
          <div className="row">
            <div className="col">
              <section className="current-degree">
                {Math.round((response.data.main.temp * 9) / 5 + 32)}°
                <span>
                  {" "}
                  <button
                    className="units fs-3 text-secondary"
                    onClick={toCelsius}
                  >
                    C
                  </button>
                  |<button className="units fs-2">F</button>
                </span>
              </section>
              <section className="fs-1">
                <img src={icon} alt={description}></img> {description}
              </section>
            </div>
            <div className="col-4">
              <div className="text-center">
                <Dates value={timeAndDate} />
                <div className="fs-2">
                  {" "}
                  {Math.round((response.data.main.temp_min * 9) / 5 + 32)} ° /
                  {Math.round((response.data.main.temp_max * 9) / 5 + 32)} °
                </div>
              </div>
              <br />
              <ul>
                {items.map(function (item, index) {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
          <section className="row fs-3 mt-5">
            <div className="row">
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
            </div>
            <hr />
            <div className="row">
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
              <div className="col">19:00</div>
            </div>
          </section>
        </div>
        <div className="col-2"></div>
        <div className="col-4 fs-1 forecast lh-1">
          <Forecast coordinate={coordinate} />
        </div>
      </div>
    );
  }
}
