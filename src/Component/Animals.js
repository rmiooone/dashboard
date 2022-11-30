import React from 'react';
import '../Assets/Joke.css';

export class Animals extends React.Component {
    state = {
        name: 'cheetah',
        speed: '',
        species: ''
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/animals?name=' + this.state.name, {
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
                    name: result[0].name,
                    speed: result[0].characteristics.top_speed,
                    species: result[0].characteristics.number_of_species
                })
                console.log(this.state.name);
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
                    <p class="lead">Animals</p>
                    </div>
                    <div className='bottom'>
                        <p class= "lead">The {this.state.name} has a maximum speed of</p>
                        <h1 class= "large">{this.state.speed}</h1>
                    </div>
                    <div class="lead"> They are {this.state.species} differents species of it</div>
                </div>
            </div>
        );
    }

}