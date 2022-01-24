import React , {useState}from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props){
const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
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
          <form clasName="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="City name"
              autocomplete="off"
              autoFocus="on"
              className="search-input"
              onChange={handleCityChange}
            />
            <button className="submit-button">Search</button>
          </form>

          <div className="weather-info" class="col-9">
            <h2 className="city">Krakow</h2>
            <h3 className="date-and-time">Monday 14:00</h3>
            <div className="clearfix weather-temperature">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt="weather-icon"
                className="float-left w-icon"
              />
              <div className="float-left">
                <h1 className="temp">0</h1> 
                <span className="units celsius">
                  °C
                </span>
              </div>
            </div>
            <div className="col-3"></div>
          </div>

          <div className="description"></div>
          <div className="pressure">Pressure: 1000mb</div>
          <div className="humidity">Humidity: 60%</div>
          <div className="wind">Wind speed: 6.5km/h</div>

          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}