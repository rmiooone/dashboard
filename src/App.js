import React, { Component } from 'react';
import './App.css';
import {Widget} from './Component/Widget';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Learn something</h1>
        <Widget/>
       </div>
    );
  }
}
export default App;
