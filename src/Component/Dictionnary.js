import React from 'react';
import '../Assets/Dictionnary.css';

var worddefinition = [
    'code',
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export class Dictionnary extends React.Component {
    state = {
        name: 'code',
        word: '',
        definition: '',
        Note: '',
    }

    componentDidMount() {
        var def = worddefinition[getRandomInt(1)];
        fetch('https://api.api-ninjas.com/v1/dictionary?word=' + def, {
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
                    definition: result.definition.split("1.")[1].split("Note:")[0].split(2)[0],
                    note: result.definition.split("1.")[1].split("Note:")[1].split(2)[0]
                })
            })
    }

    render() {
        return (
            <div className='Dictionnary'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="">Dictionnary</p>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div className='location'>
                                    <p class="subtitle">{this.state.word}</p>
                                </div>
                            </div>
                        </div>
                        <div className='information'>
                            <div className='definition'>
                                <p class="small"><strong>Definition: </strong>{this.state.definition}</p>
                                <p class="small"><strong>Note:</strong> {this.state.note}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}