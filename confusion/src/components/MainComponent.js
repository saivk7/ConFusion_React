import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route , Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      selectedDish: null,
    };


  }

  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
    }

  

  render() {
    const HomePage = ()=>{
      return(
      <Home />
      );
    }

    return (
      <div >
        <Header /> 
        <Switch>
          <Route path="/home" component={HomePage} /> 
        </Switch>
        <Switch>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}  /> 
        </Switch>
        <Redirect to="/home"/>

        

        
        <Footer />
        <div>
        {/*
        Replaced with react router
        <Menu dishes={this.state.dishes} 
                onClick={(dishID)=> this.onDishSelect(dishID)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id ===this.state.selectedDish)[0]} />


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

export default Main;
