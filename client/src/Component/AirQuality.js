import React from 'react';
import '../Assets/Airquality.css';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/img/airQuality.png';

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
                    this.setState({
                        name: this.props.name,
                        aqui: result.overall_aqi,
                        co: result.CO.concentration,
                        no: result.NO2.concentration,
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
                            <div class="col">
                                <div className='location'>
                                    <p class="subtitle">Air quality</p>
                                </div>
                            </div>
                            <div class="col">
                                <div className='location'>
                                    <p class="subtitle">{this.state.name}</p>
                                </div>
                            </div>
                                <div class="col-3 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className="row">
                        <div className="col-6">
                            <div className='value'>
                                <p>{Math.round(this.state.aqui)}</p>
                            </div>
                            <div className='description'>
                                <p className="small">Air quality index</p>
                            </div>
                            </div>
                            <div className="col-6">
                                <div className='value'>
                                    <p>{Math.round(this.state.co)}</p>
                                </div>
                                <p className='description'>mg/m<sup>3</sup></p>
                                <div className='description'>
                                    <p className="small">Concentration of carbon monoxide</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='value'>
                                    <p>{Math.round(this.state.no)} </p>
                                </div>
                                <p className='description'>mg/m<sup>3</sup></p>
                                <div className='description'>
                                    <p className="small">Concentration of nitrogen dioxide</p>
                                </div>
                            </div>
                     
                    </div>
                </div>
            </div>
        );
    }

}