import React from "react";
import "./WeatherCard.css";

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  render() {
    return (
      <div className="card">
        <h2>
          {this.props.data.city}, {this.props.data.country}
        </h2>
        <small>{this._dateFormat(this.props.data.day)}</small>
        <h3>{this.props.data.description}</h3>
        <span>
          Viento {this.props.data.wind}km/h <span className="dot">•</span> Humedad {this.props.data.humidity}%
        </span>
        <h1>{this.props.data.temp}°</h1>
        <div className="icon">
          <img src={this.props.data.icon} alt="icon-weather" />
        </div>
        {this.state.showDetails && (
          <div className="details">
            <ul>
              <li>
                <span>
                  <strong>Temperatura mínima:</strong> {this.props.data.tempMin}
                  °
                </span>
              </li>
              <li>
                <strong>Temperatura máxima:</strong> {this.props.data.tempMax}°
              </li>
              <li>
                <strong>Sensación térmica:</strong> {this.props.data.feelsLike}°
              </li>
              <li>
                <strong>Nubosidad:</strong> {this.props.data.clouds}%
              </li>
              <li>
                <strong>Visibilidad:</strong> {this.props.data.visibility}km
              </li>
              <li>
                <strong>Presión:</strong> {this.props.data.pressure}mbar
              </li>
            </ul>
          </div>
        )}
        <hr />
        <a className="showDetails" onClick={this.toggleDetails}>
          {this.state.showDetails ? "COLAPSAR" : "EXPANDIR"}
        </a>
      </div>
    );
  }

  toggleDetails(event) {
    event.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  _dateFormat(d) {
    var days = [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo"
    ];
    var date = new Date(d);
    var dayName = days[date.getDay()];
    return (
      dayName +
      " " +
      date.toLocaleDateString() +
      " • " +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  }
}
