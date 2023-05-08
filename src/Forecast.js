import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [data, setData] = useState(null);

  function handleForecast(response) {
    let dataResponse = response.data.daily;
    setReady(true);
    setData(<ForecastDay value={dataResponse} />);
  }

  if (ready) {
    return (
      <div>
        next week
        <hr />
        <br />
        {data}
      </div>
    );
  } else {
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.cityName}&key=oc477bd2561ta06ef43b2feb3e10e132&units=metric`;
    axios.get(url).then(handleForecast);
  }
}
