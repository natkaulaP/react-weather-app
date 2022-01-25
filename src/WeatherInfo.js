import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
 
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-info col-9">
        <h2 className="city">{props.data.city}</h2>
        <FormattedDate date={props.data.date} />
        <div className="clearfix">
          <WeatherIcon code={props.data.icon} size={52} />
          <div className="float-left">
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="description text-capitalize">
          {props.data.description}
        </div>
        <div className="pressure">Pressure: {props.data.pressure}mb</div>
        <div className="humidity">Humidity: {props.data.humidity}%</div>
        <div className="wind">Wind speed: {props.data.wind}km/h</div>
      </div>
    </div>
  );
}
