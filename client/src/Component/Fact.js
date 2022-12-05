import React from 'react';
import '../Assets/Fact.css';
import Image from 'react-bootstrap/Image';
import logo from '../Assets/img/Fact.jpg';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export class Fact extends React.Component {
    state = {
        name: 'code',
        word: '',
        definition: '',
        Note: '',
        requete: true
    }

    componentDidUpdate() {
        if (this.state.requete == true)
            fetch(`http://localhost:9000/routeAPI/getAll`)
                .then((response) => response.json())
                .then((json) => json.filter((res) => {
                    return res.display.includes("true");
                }))
                .then((resp) => resp.filter((res) => {
                    return res.type.includes("Fact");
                }))
                .then((result) => {
                    let ind = getRandomInt(result.length)
                    this.setState({
                        word: result[ind].name,
                        requete: false
                    })
        }, []);
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
                                <div class="col-6"></div>
                                <div class="col-2 logoweather">
                                <Image src={logo} fluid rounded alt="Logo of Animals category" />
                            </div>
                        </div>
                        </div>
                        <div class="container">
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