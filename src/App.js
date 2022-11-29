import React, { Component } from 'react';
import './App.css';
import {Weather} from './stories/Weather';
import {Nasa} from './stories/Nasa';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Weather/>
        <Nasa/>
       </div>
    );
  }
}
export default App;
