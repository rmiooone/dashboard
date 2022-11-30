import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Weather } from './Component/Weather';
import { Nasa } from './Component/Nasa';
import { Celebrity } from './Component/Celebrity';
import { AirQuality } from './Component/AirQuality';
import { Animals} from './Component/Animals';
import {Dictionnary} from './Component/Dictionnary';
import {Country} from './Component/Country';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
            <Weather />
            </div>
            <div class="col-sm-4">
              <Animals />
            </div>
            <div class="col-sm-4">
            <Country/>
            </div>
          </div>
        </div>
        <div class= "space"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <AirQuality/>
            </div>
            <div class="col-sm-8">
              <Nasa/>
            </div>
            </div>
        </div>
        <div class= "space"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <Dictionnary/>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
export default App;
