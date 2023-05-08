import React from "react";
import Day from "./Day";

export default function ForecastDay({ value }) {
  return (
    <div className="row pb-5">
      {value.map(function (dataResponses, index) {
        if (index > 0 && index < 6) {
          return (
            <div key={index} className="row">
              <div className="col-5">
                <Day values={dataResponses.time * 1000} />
                <span className="fs-6">October 17</span>
                <br />
                <br />
              </div>
              <div className="col-3">
                {Math.round(dataResponses.temperature.day)}°
              </div>
              <div className="col-3">
                <img
                  src={dataResponses.condition.icon_url}
                  alt={dataResponses.condition.description}
                />
              </div>{" "}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
