import React from 'react';
import '../Assets/Airquality.css';

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

export class AirQuality extends React.Component {
    state = {
        name: '',
        co: '',
        aqi: '',
        no: '',
    }

    componentDidMount() {
        var city = cityname[getRandomInt(38)];
        fetch('https://api.api-ninjas.com/v1/airquality?city=' + city, {
            method: "GET",
            headers: {
                "X-Api-Key": "4/Ur96Pow47ygCpZMc8mIQ==sdwlyeOKeiZtixCm"
            }
        })
            .then((reponse) => {
                return reponse.json()
            })
            .then((result) => {
                this.setState({
                    name: city,
                    aqui: result.overall_aqi,
                    co: result.CO.concentration,
                    no: result.NO2.concentration
                })
            })
    }

    render() {
        return (
            <div className='Airquality'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="subtitle">Air quality</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="subtitle">{this.state.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h1>{this.state.aqui}</h1>
                    </div>
                    <div className='description'>
                        <p class="lead">Air quality index</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.co}</h1>
                    </div>
                    <div className='description'>
                        <p class="lead">Concentration of carbon monoxide</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.no}</h1>
                    </div>
                    <div className='description'>
                        <p class="lead">Concentration of nitrogen dioxide</p>
                    </div>
                </div>
            </div>
        );
    }

}