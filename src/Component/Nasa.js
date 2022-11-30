import React from 'react';
import '../Assets/Nasa.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

export class Nasa extends React.Component {
    state = {
        url: '',
        title: '',
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=afMksE9812wZfoNKXtb8rZSobfuqkvalcq8TpHeb')
            .then((reponse) => {
                return reponse.json()
            })
            .then((result) => {
                this.setState({
                    url: result.url,
                    title: result.title,
                })
                console.log(result);
                console.log(this.state.title);
            })
    }

    render() {
        return (
            <div className='Nasa'>
                <div className='container'>
                <Image src={this.state.url} fluid rounded />
                </div>
            </div>
        );
    }

}