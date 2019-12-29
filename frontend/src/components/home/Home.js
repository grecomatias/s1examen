import React from "react";
import "./Home.css";
import WheaterCard from "../weatherCard/WeatherCard";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        day: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        temp: undefined,
        tempMin: undefined,
        tempMax: undefined,
        feelsLike: undefined,
        clouds: undefined,
        pressure: undefined,
        humidity: undefined,
        visibility: undefined,
        wind: undefined,
        icon: undefined
      },
      error: undefined
    };

    this.getWeather = this.getWeather.bind(this);
  }

  render() {
    return (
      <div>
        <a href="#" className="App-button" onClick={this.getWeather}>
          Actualizar
        </a>
        {this.state.error && <span className="App-error">Ha ocurrido un error.</span>}
        {this.state.weather.description && <WheaterCard data={this.state.weather} />}
      </div>
    );
  }

  getWeather(event) {
    fetch(`${process.env.REACT_APP_API_HOST}/api/weather`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            weather: {
              day: result.day,
              city: result.city,
              country: result.country,
              description: result.description,
              temp: result.temp,
              tempMin: result.tempMin,
              tempMax: result.tempMax,
              feelsLike: result.feelsLike,
              clouds: result.clouds,
              pressure: result.pressure,
              humidity: result.humidity,
              visibility: result.visibility,
              wind: result.wind,
              icon: result.icon
            },
            error: undefined
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
    event.preventDefault();
  }
}
