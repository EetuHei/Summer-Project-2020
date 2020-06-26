import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`;
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
  }, []);

  return (
    <>
      {capital && weather.current ? (
        <>
          <h1>Weather in {capital} </h1>
          <p>
            <b>temperature: </b> {weather.current.temperature} Celsius
          </p>
          <img src={weather.current.weather_icons[0]} alt="weather icon" />
          <p>
            <b>wind: </b> {(weather.current.wind_speed / 3.6).toFixed(2)} m/s
            and direction {weather.current.wind_dir}
          </p>{" "}
        </>
      ) : (
        <>
          <p>Fetching weather data...</p>
        </>
      )}
    </>
  );
};

export default Weather;
