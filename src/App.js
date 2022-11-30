import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Weather } from './Component/Weather';
import { Nasa } from './Component/Nasa';
import { Fact } from './Component/Fact';
import { AirQuality } from './Component/AirQuality';
import { Joke } from './Component/Joke';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <h1>Learn something today</h1>
          <div class="row">
            <div class="col-sm-4">
              <Fact/>
            </div>
            <div class="col-sm-4">
            <Joke/>
            </div>
            <div class="col-sm-4">
            <Weather/>
            </div>
            <div class="col-sm-4">
            <AirQuality/>
            </div>
          </div>
          <div class="row">
            <Nasa/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
