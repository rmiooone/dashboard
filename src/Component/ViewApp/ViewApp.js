import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from '../Weather';
import { Nasa } from '../Nasa';
import { AirQuality } from '../AirQuality';
import { Animals } from '../Animals';
import { Dictionnary } from '../Dictionnary';
import { Country } from '../Country';

export class ViewApp extends React.Component{
  render() {
    return (
      <div className="App">
        
          <div class="row">
            <div class="col-sm-12 entete">
              <div class="container">
                <div class="row">
                <div class="col-sm-4">
                  <h1 class="large title"> Learn informations</h1>
                </div>
                </div>
              </div>
           
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <Weather />
            </div>
            <div class="col-sm-4">
              <Animals />
            </div>
            <div class="col-sm-4">
              <Country />
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <AirQuality />
            </div>
            <div class="col-sm-8">
              <Nasa />
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <Dictionnary />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

