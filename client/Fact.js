import React from 'react';
import '../Assets/Fact.css';

export class Fact extends React.Component {
    state = {
        name: 'code',
        word: '',
        definition: '',
        Note: '',
        requete: true
    }

    componentDidUpdate() {
        if (this.state.requete == true ) {
        fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
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
                    word: result[0].fact,
                    requete: false
                })
            })
    }
}

    render() {
        return (
            <div className='Fact'>
                <div className='container'>
                    <div className='top'>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-3">
                                <div className='location'>
                                    <p class="subtitle">Fact</p>
                                </div>
                            </div>
                        </div>
                        <div className='information'>
                            <div className='definition'>
                                <p class="data">{this.state.word}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}