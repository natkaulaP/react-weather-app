import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
 
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
      <div className="weather-info col">
        <h2 className="city">{props.data.city}</h2>
        <FormattedDate date={props.data.date} />
        <div className="weather-column">
          

          
          <div className="float">
          <WeatherIcon code={props.data.icon} size={52} />
          
            <WeatherTemp celsius={props.data.temperature} />
          
      </div>
      <div className="col">
        <div className="description text-capitalize">
          {props.data.description}
        </div>
        <div className="pressure">Pressure: {props.data.pressure}mb</div>
        <div className="humidity">Humidity: {props.data.humidity}%</div>
        <div className="wind">Wind speed: {props.data.wind}km/h</div>
      </div>
    </div>
    </div>
    </div>
    </div>
        
  );
}
