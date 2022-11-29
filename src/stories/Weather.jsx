import React from 'react';
import './Weather.css';

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
    fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=f1268c9e42e601b65d3f6194407d2f69')
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
          <div className='location'>
           <h2>{this.state.name}</h2>
          </div>
          <div className='temp'>
            <h1>{Math.round(this.state.temp-273)} °C</h1>
          </div>
          <div className='description'>
            <h2>{this.state.weather}</h2>
          </div>
          <div className='bottom'>
            <div className='feels'>
              <p>{Math.round(this.state.feelslike-273)} °C</p>
            </div>
            <div className='humidity'>
              <p>{this.state.humidity} %</p>
            </div>
            <div className='wind'>
              <p>{this.state.winds} km/h</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
