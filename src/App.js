import React, { Component } from 'react';
import './App.css';
import {Weather} from './Component/Weather';
import {Nasa} from './Component/Nasa';
import {Fact} from './Component/Fact';
import {AirQuality} from './Component/AirQuality';
import {Joke} from './Component/Joke';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Learn something today</h1>
        <div className="View">
        <section className='Grid'>
        <Weather/>
        <AirQuality/>
        <Fact/>
        </section>
        <section className='space'>
        <Nasa/>
        </section>
        <section className='Grid'>
        <Joke/>
        <AirQuality/>
        <Fact/>
        </section>
       </div>
       </div>
    );
  }
}
export default App;
