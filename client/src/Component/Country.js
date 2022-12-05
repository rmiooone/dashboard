import React from 'react';
import Image from 'react-bootstrap/Image';
import '../Assets/Country.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/img/country.png';
export class Country extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            life_expectancy_male: '',
            life_expectancy_female: '',
            requete: true
        }
    }

    componentDidUpdate() {
        if (this.state.requete == true) {
            fetch('https://api.api-ninjas.com/v1/country?name=' + this.props.name, {
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
                        name: result[0].name,
                        life_expectancy_male: result[0].life_expectancy_male,
                        life_expectancy_female: result[0].life_expectancy_female,
                        requete: false
                    })
                })
            }
    }

    render() {
        return (
            <div className='Country'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div className='location'>
                                    <p class="small">Country</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div className='location'>
                                    <p class="small">{this.state.name}</p>
                                </div>
                            </div>
                            <div class="col-2 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <p class="small">The life expectancy of male in the {this.state.name} is </p>
                    <h1 class="large data">{this.state.life_expectancy_male} years</h1>
                    <p class="small">For the women, the life expectancy is </p>
                    <h1 class="large data">{this.state.life_expectancy_female} years</h1>
                </div>
            </div>

        );
    }

}