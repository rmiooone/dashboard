import React from 'react';
import '../Assets/Nasa.css';

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
                    <img
                        src={this.state.url}
                        alt=""
                        style={{
                            width: 500,
                            height: 500,
                            borderBottomLeftRadius: 25,
                            borderBottomRightRadius: 25,
                            borderTopRightRadius: 25,
                            borderTopLeftRadius: 25,
                            overflow: 'hidden',
                        }}
                    />
                    <div className='bottom'>
                        <div className='feels'>
                            <p>Title {this.state.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}