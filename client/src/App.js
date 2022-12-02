import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {ViewApp} from './Component/ViewApp/ViewApp';
import {Profil} from './Component/Admin/Profil';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/Home' exact element={<ViewApp/>} />
          <Route path='/' exact element={<ViewApp/>} />
          <Route path='/admin' exact element={<Profil/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;