import React from 'react';
import '../Assets/Country.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Country extends React.Component {
    state = {
        name: 'United States',
        life_expectancy_male: '',
        life_expectancy_female: ''
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/country?name=' + this.state.name, {
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
                    life_expectancy_male: result[0].life_expectancy_male,
                    life_expectancy_female: result[0].life_expectancy_female
                })
            })
    }

    render() {
        return (
            <div className='Country'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div className='location'>
                    <p class="small">Country</p>
                    </div>
                    <div className=''>
                    <p class="small">The life expectancy of male in the {this.state.name} is </p>
                    <h1 class="large data">{this.state.life_expectancy_male} years</h1>
                    <p class="small">For the women, the life expectancy is </p>
                    <h1 class="large data">{this.state.life_expectancy_female} years</h1>
                    </div>
                </div>
            </div>
        );
    }

}