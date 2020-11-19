import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent'

import { Switch, Route , Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

const mapStateToProps = state => {

  return {
    dishes: state.dishes,
    comments:state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


class Main extends Component {

  constructor(props){
    super(props);
  }  
  


  render() {

    const HomePage = ()=>{
      return(
      <Home dish= {this.props.dishes.filter((dish)=>dish.featured)[1]} 
      promotion= {this.props.promotions.filter((promo)=>promo.featured)[0]}
      leader= {this.props.leaders.filter((leader)=>leader.featured)[0]}

      />
      );
    }

    const DishWithID = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>(dish.id===parseInt(match.params.dishId,10)))[0]} 
                    comments = {this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
        />

      );

    }

    return (
      <div >
        <Header /> 
        <Switch>
          <Route path="/home" component={HomePage} /> 
        </Switch>
        <Switch>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}  /> 
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route path="/aboutus" component={()=> <About leaders={this.props.leaders}/>} />
          <Route exact path="/contactus" component={Contact} />
        </Switch>
        <Redirect to="/home"/>
        <Footer />
        <div>
        {/*
        Replaced with react router
        <Menu dishes={this.props.dishes} 
                onClick={(dishID)=> this.onDishSelect(dishID)}/>
        <DishDetail dish={this.props.dishes.filter((dish)=> dish.id ===this.props.selectedDish)[0]} />


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

export default withRouter(connect(mapStateToProps)(Main));
