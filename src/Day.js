import React from "react";

export default function Day({ values }) {
  let currentTime = new Date(values);

  let day = currentTime.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return <div>{days[day]}</div>;
}
