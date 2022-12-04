import React from 'react';
import '../Assets/Airquality.css';

export class AirQuality extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            co: '',
            aqi: '',
            no: '',
            requete: true
        }
    }

    componentDidUpdate() {
        if (this.state.requete == true) {
            fetch('https://api.api-ninjas.com/v1/airquality?city=' + this.props.name, {
                method: "GET",
                headers: {
                    "X-Api-Key": "qauH53MEMstHbw96a8pUhQ==HuCMx80DeJxd4VPv"
                }
            })
                .then((reponse) => {
                    return reponse.json()
                })
                .then((result) => {
                    console.log(result)
                    this.setState({
                        name: this.props.name,
                        aqui: result[0].overall_aqi,
                        co: result[0].CO.concentration,
                        no: result[0].NO2.concentration,
                        requete: false
                    })
                })
        }
    }

    render() {
        return (
            <div className='Airquality'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div className='location'>
                                    <p class="subtitle">Air quality</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <div className='location'>
                                    <p class="subtitle">{this.state.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='container'>
                        <div className='value'>
                            <p>{this.state.aqui}</p>
                        </div>
                        <div className='description'>
                            <p class="lead">Air quality index</p>
                        </div>
                        <div className='value'>
                            <p>{this.state.co}</p>
                        </div>
                        <p>mg/m<sup>3</sup></p>
                        <div className='description'>
                            <p class="lead">Concentration of carbon monoxide</p>
                        </div>
                        <div className='value'>
                            <p>{this.state.no} </p>
                        </div>
                        <p>mg/m<sup>3</sup></p>
                        <div className='description'>
                            <p class="lead">Concentration of nitrogen dioxide</p>
                        </div>
                    </div>
            </div>
        );
    }

}