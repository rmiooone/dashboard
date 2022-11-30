import React from 'react';
import '../Assets/Celebrity.css';

export class Celebrity extends React.Component {
    state = {
        name: 'Michael Jordan',
        height: '',
        worth: '', 
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/celebrity?name=' + this.state.name, {
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
            <div className='Celebrity'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div className='location'>
                    <p class="lead">{this.state.name}</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.height} m</h1>
                    </div>
                </div>
            </div>
        );
    }

}