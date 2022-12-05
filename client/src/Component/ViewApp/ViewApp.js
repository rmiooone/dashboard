import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Weather } from '../Widget/Weather';
import { Nasa } from '../Widget/Nasa';
import { AirQuality } from '../Widget/AirQuality';
import { Animals } from '../Widget/Animals';
import { Fact } from '../Widget/Fact';
import { Country } from '../Widget/Country';
import { Color } from '../Widget/Color';

import '../../Assets/ViewApp.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export class ViewApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      animals: "",
      country: "",
      city:"",
      word:"",
      inflation:""
    };
  }

  callAPIfromAnimals() {
    fetch("http://localhost:9000/routeAPI/getAll")
      .then((res) => res.json())
      .then((json) => json.filter((res) => {
        return res.display.includes("true");
    })).then((resp) => resp.filter((res) => {
      return res.type.includes("Animal");
  }))
      .then((res2) => {
        const indice = getRandomInt(res2.length);
        this.setState({ animals: res2[indice].name})
      });
  }

  callAPIfromCountry() {
    fetch("http://localhost:9000/routeAPI/getAll")
      .then((res) => res.json())
      .then((json) => json.filter((res) => {
        return res.display.includes("true");
    })).then((resp) => resp.filter((res) => {
      return res.type.includes("Country");
  }))
      .then((res2) => {
        const indice = getRandomInt(res2.length);
        this.setState({ country: res2[indice].name})
      });
  }

  callAPIfromCity() {
    fetch("http://localhost:9000/routeAPI/getAll")
      .then((res) => res.json())
      .then((json) => json.filter((res) => {
        return res.display.includes("true");
    })).then((resp) => resp.filter((res) => {
      return res.type.includes("City");
  }))
      .then((res2) => {
        const indice = getRandomInt(res2.length);
        this.setState({ city: res2[indice].name})
      });
  }

  componentDidMount() {
    this.callAPIfromAnimals();
    this.callAPIfromCountry();
    this.callAPIfromCity();
  }
  render() {
    return (
      <div className="App">
          <div class="row">
            <div class="col-12 entete">
              <div class="container">
                <div class="row">
                <div class="col-4">
                  <h1 class="large title">Random information</h1>
                </div>
                <div class="col-4"></div>
                <div class="col-4">
                <div onClick={() =>  window.location.reload()}>
                  <p class="refresh">New content</p>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <Weather name={this.state.city}/>
            </div>
            <div class="col-lg-4">
              <Animals name={this.state.animals}/>
            </div>
            <div class="col-lg-4">
              <Country name={this.state.country}/>
            </div>
          </div>
        </div>

        <div class="space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <AirQuality name={this.state.city}/>
            </div>
            <div class="col-lg-8">
              <Nasa />
            </div>
          </div>
        </div>

        <div class="space"></div>
        <div class="space"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <Fact />
            </div>
            <div class="col-lg-6">
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

