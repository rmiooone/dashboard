import React from 'react';
import '../Assets/Fact.css';

export class AirQuality extends React.Component {
    state = {
        name: ''
    }

    componentDidMount() {
        var city = 'Paris'
        fetch('https://api.api-ninjas.com/v1/airquality?city=Paris', {
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
                    name: result.CO.concentration,
                })
                console.log(result);
            })
    }

    render() {
        return (
            <div className='Fact'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div className='location'>
                    <p>Paris</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.name}</h1>
                    </div>
                </div>
            </div>
        );
    }

}