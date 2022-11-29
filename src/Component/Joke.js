import React from 'react';
import '../Assets/Fact.css';

export class Joke extends React.Component {
    state = {
        name: '',
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/jokes?limit=1', {
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
                    name: result[0].joke,
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
                </div>
            </div>
        );
    }

}