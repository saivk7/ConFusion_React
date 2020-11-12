import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
    };


  }
  

  render() {
    return (
      <div >
        
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante conFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />

        <div>
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

        </div>

        
    );
  }
}

export default App;
