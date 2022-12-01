import React from 'react';
import '../Assets/Weather.css';
import Image from 'react-bootstrap/Image';
import logoweather from '../Assets/img/logoweather.png';

var cityname = [
  'Marrakesh',
  'Manila',
  'Mexico City',
  'Montreal',
  'Moscow',
  'Mumbai',
  'Nairobi',
  'New Delhi',
  'New York',
  'Nicosia',
  'Oslo',
  'Ottawa',
  'Paris',
  'Prague',
  'Reykjavik',
  'Riga',
  'Rio de Janeiro',
  'Rome',
  'Saint Petersburg',
  'San Francisco',
  'Santiago',
  'São Paulo',
  'Seoul',
  'Shanghai',
  'Singapore',
  'Sofia',
  'Stockholm',
  'Sydney',
  'Tallinn',
  'Tehran',
  'Tokyo',
  'Toronto',
  'Venice',
  'Vienna',
  'Vilnius',
  'Warsaw',
  'Washington',
  'Wellington',
  'Zagreb'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export class Weather extends React.Component {
  state = {
    name: '',
    temp: '',
    feelslike: '',
    weather: '',
    humidity: '',
    winds: ''
  }
  componentDidMount() {
    var city = cityname[getRandomInt(38)];
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=f1268c9e42e601b65d3f6194407d2f69')
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
          winds: result.wind.speed
        })
      })
  }

  render() {
    return (
      <div className='widget'>
        <div className='container'>
          <div className='top'>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div className='location'>
                  <p class="small">Weather</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div className='location'>
                  <p class="small">{this.state.name}</p>
                </div>
              </div>
              <div class="col-sm-3 logoweather">
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
                <div class="col-sm-4">
                  <p class="small"> {Math.round(this.state.feelslike - 273)}°C </p>
                  <p class="small">Feels like</p>
                </div>
                <div class="col-sm-4">
                  <p class="small"> {this.state.humidity}% </p>
                  <p class="small"> Humidity</p>
                </div>
                <div class="col-sm-4">
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
