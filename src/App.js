import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {ViewApp} from './Component/ViewApp/ViewApp';

class App extends React.Component{
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/Home' exact element={<ViewApp/>} />
          <Route path='/' exact element={<ViewApp/>} />
          <Route path='/admin' exact element={<ViewApp/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;