import React from 'react';
import '../Assets/Weather.css';
import Image from 'react-bootstrap/Image';
import logoweather from '../Assets/img/logoweather.png';

export class Weather extends React.Component {
  state = {
    name: '',
    temp: '',
    feelslike: '',
    weather: '',
    humidity: '',
    winds: '',
    requete: true
  }
  componentDidUpdate() {
    if (this.state.requete == true) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+this.props.name+'&appid=f1268c9e42e601b65d3f6194407d2f69')
      .then((reponse) => {
        return reponse.json()
      })
      .then((result) => {
        this.setState({
          name: result.name,
          temp: result.main.temp,
          feelslike: result.main.feels_like,
          weather: result.weather[0].main,
          humidity: result.main.humidity,
          winds: result.wind.speed,
          requete: false
        })
      })
    }
  }

  render() {
    return (
      <div className='widget'>
        <div className='container'>
          <div className='top'>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-3">
                <div className='location'>
                  <p class="small">Weather</p>
                </div>
              </div>
              <div class="col-6">
                <div className='location'>
                  <p class="small">{this.state.name}</p>
                </div>
              </div>
              <div class="col-2 logoweather">
              <Image src={logoweather} fluid rounded />
              </div>
            </div>
          </div>

          <div className='temp'>
            <h1 class='large data'>{Math.round(this.state.temp - 273)} °C</h1>
          </div>
          <div className='bottom'>
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <p class="small"> {Math.round(this.state.feelslike - 273)}°C </p>
                  <p class="small">Feels like</p>
                </div>
                <div class="col-4">
                  <p class="small"> {this.state.humidity}% </p>
                  <p class="small"> Humidity</p>
                </div>
                <div class="col-4">
                  <p class="small">  {this.state.winds}km/h </p>
                  <p class="small"> Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
