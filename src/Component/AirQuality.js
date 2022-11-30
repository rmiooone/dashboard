import React from 'react';
import '../Assets/Celebrity.css';

export class AirQuality extends React.Component {
    state = {
        name: 'Paris',
        co: '',
        aqi:'',
        no: '',
    }

    componentDidMount() {
        var city = 'Paris'
        fetch('https://api.api-ninjas.com/v1/airquality?city=' + this.state.name, {
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
                    aqui: result.overall_aqi,
                    co: result.CO.concentration,
                    no: result.NO2.concentration
                })
                console.log(result);
            })
    }

    render() {
        return (
            <div className='Celebrity'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div className='location'>
                    <p class="lead">Paris</p>
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