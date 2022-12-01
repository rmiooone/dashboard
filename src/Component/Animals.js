import React from 'react';
import Image from 'react-bootstrap/Image';
import '../Assets/Animals.css';
import logo from '../Assets/img/animals.png';

export class Animals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            speed: '',
            species: ''
        }
    }

    componentDidUpdate() {
        fetch('https://api.api-ninjas.com/v1/animals?name=' + this.props.name, {
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
                    name: this.props.name,
                    speed: result[0].taxonomy.scientific_name,
                    species: result[0].characteristics.number_of_species
                })
            })
    }

      render() {
        return (
            <div className='Animals'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="small">Animals</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="small">{this.state.name}</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                            </div>
                            <div class="col-sm-3 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                    </div>
                    <div className='information'>
                        <p class="small">The {this.state.name} is called by the scientifics by </p>
                        <h1 class="large data">{this.state.speed}</h1>
                    </div>
                </div>
            </div>
        );
    }

}