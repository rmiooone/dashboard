import React from 'react';
import '../Assets/Fact.css';

export class Fact extends React.Component {
    state = {
        name: '',
        height: '',
        worth: ''
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/celebrity?name=Michael Jordan', {
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
                    height: result[0].height,
                    worth: result[0].net_worth
                })
                console.log(this.state.name);
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
                    <p>{this.state.name}</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.height} m</h1>
                    </div>
                </div>
            </div>
        );
    }

}