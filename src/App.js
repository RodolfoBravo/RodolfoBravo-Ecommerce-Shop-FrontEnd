import './App.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import Help from './pages/help';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Shop" component={Shop} />
            <Route path="/Help" component={Help} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
