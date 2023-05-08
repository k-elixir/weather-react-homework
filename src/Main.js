import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import CityInfo from "./CityInfo";

export default function Main() {
  const [cityName, setCityName] = useState("Budapest");
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });

  function information(response) {
    setWeatherInfo({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      tempMin: Math.round(response.data.main.temp_min),
      tempMax: Math.round(response.data.main.temp_max),

      timeAndDate: response.data.dt * 1000,
      items: [
        `Humidity: ${response.data.main.humidity} %`,
        `Wind: ${response.data.wind.speeds} km/h`,
      ],
    });
  }
  function handleSearch() {
    setWeatherInfo({ ready: false });
  }

  function cityInput(event) {
    setCityName(event.target.value);
  }
  // function success(position) {
  //   let latitude = position.coords.latitude;
  //   let longitude = position.coords.longitude;
  //   let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=498e6acfefe155c57e6d3fce38304477&units=metric`;
  //   axios.get(url).then(information);
  // }
  // function getCurrentLoc() {
  //   navigator.geolocation.getCurrentPosition(success);
  // }

  if (weatherInfo.ready) {
    return (
      <div>
        <NavBar
          handleSearch={handleSearch}
          cityInput={cityInput}
          // getCurrentLoc={getCurrentLoc}
        />
        <CityInfo info={weatherInfo} />
      </div>
    );
  } else {
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6adfa90690be8ea18dcf2c3f778852ad&units=metric`;
    axios.get(Url).then(information);
    return "Loading...";
  }
}
