import React from "react";

export default function Dates({ value }) {
  let currentTime = new Date(value);

  function days() {
    let day = currentTime.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function hour() {
    let Hours = currentTime.getHours();
    if (Hours < 10) {
      return "0" + Hours;
    } else {
      return Hours;
    }
  }

  function min() {
    let Min = currentTime.getMinutes();
    if (Min < 10) {
      return "0" + Min;
    } else {
      return Min;
    }
  }

  return (
    <div className="h1 date">
      <span> {days()} </span>
      {hour()} : {min()}
    </div>
  );
}
