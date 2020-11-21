import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
 import { ConfigureStore } from './redux/configureStore';
 

 const store = ConfigureStore();


class App extends Component {

 
  

  render() {
    return (
      //adding browser Router 
      <Provider store = {store} >
          <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
      






        
    );
  }
}

export default App;
