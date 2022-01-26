import React , {useState}from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8fc44c5f5ff712285df808b01c3aa136";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <form className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="City name"
              autoComplete="off"
              autoFocus="on"
              className="search-input"
              onChange={handleCityChange}
            />
            <button className="submit-button">Search</button>
          </form>
          <WeatherInfo data={weatherData} />
         
          <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}