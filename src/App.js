import React, { Component } from 'react';
import './App.css';
import {Widget} from './stories/Widget';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Widget/>
       </div>
    );
  }
}
export default App;
