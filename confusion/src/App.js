import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';




class App extends Component {

 
  

  render() {
    return (
      //adding browser Router 
      <BrowserRouter>
        <div >
          
          <Main />
          {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          */}

        </div>
        
      </BrowserRouter>
        
    );
  }
}

export default App;
