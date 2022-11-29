
import React from 'react';

export class Nasa extends React.Component {
  state = {
    name: '',
    temp: '',
    feelslike: '',
    weather: '',
    humidity: '', 
    winds: ''
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=afMksE9812wZfoNKXtb8rZSobfuqkvalcq8TpHeb')
      .then((reponse) => {
        return reponse.json()
      })
      .then((result) => {
        this.setState({ 
         main: result
        })
      })
  }

  render() {
    return (
      <div className='widget'>
        <div className='container'>
        </div>
      </div>
    );
  }

}