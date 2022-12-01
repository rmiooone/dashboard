import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from '../Weather';
import { Nasa } from '../Nasa';
import { AirQuality } from '../AirQuality';
import { Animals } from '../Animals';
import { Dictionnary } from '../Dictionnary';
import { Country } from '../Country';
import { Color } from '../Color';

import '../../Assets/ViewApp.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export class ViewApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      animals: "",
      country: ""
    };
  }

  callAPIfromAnimals() {
    const indice = getRandomInt(5);
    fetch("http://localhost:9000/routeAPI/getanimal")
      .then((res) => res.json())
      .then((res2) =>res2[indice].name)
      .then((res2) => {
        this.setState({ animals: res2 })
      });
  }

  /*callAPIfromCountry() {
    const indice = getRandomInt(5);
    fetch("http://localhost:9000/routeAPI/getcountry")
      .then((res) => res.json())
      .then((res2) =>res2[indice])
      .then((res2) => {
        this.setState({ country: res2 })
      });

      console.log(this.state.country);
  }*/

  componentDidMount() {
    this.callAPIfromAnimals();
    //this.callAPIfromCountry();
  }
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
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                <div onClick={() => window.location.reload()}>
                  <p class="refresh">New content</p>
                  </div>
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
              <Animals name = {this.state.animals}/>
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
        <div class="space"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <Dictionnary />
            </div>
            <div class="col-sm-6">
              <Color />
            </div>
          </div>
        </div>
        <div class="space"></div>
        <div class="space"></div>
      </div>
    );
  }
}

