import React from 'react';
import '../Assets/Joke.css';

export class Dictionnary extends React.Component {
    state = {
        name: 'code',
        word: '',
        definition: ''
    }

    componentDidMount() {
        fetch('https://api.api-ninjas.com/v1/dictionary?word=' + this.state.name, {
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
                    word: result.word,
                    definition: result.definition,
                })
                console.log(this.state.definition);
            })
    }

    render() {
        return (
            <div className='Celebrity'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div className='location'>
                    <p class="lead">Dictionnary</p>
                    </div>
                    <div className=''>
                        <h1>{this.state.word}</h1>
                    <p class="lead">{this.state.definition}</p>
                    </div>
                </div>
            </div>
        );
    }

}