import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent'
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route , Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state={
      dishes:DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions: PROMOTIONS,
      selectedDish: null,
    };


  }

  onDishSelect(dishID){
    this.setState({selectedDish:dishID});
    }

  

  render() {
    const HomePage = ()=>{
      return(
      <Home dish= {this.state.dishes.filter((dish)=>dish.featured)[1]} 
      promotion= {this.state.promotions.filter((promo)=>promo.featured)[0]}
      leader= {this.state.leaders.filter((leader)=>leader.featured)[0]}

      />
      );
    }

    const DishWithID = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=>(dish.id===parseInt(match.params.dishId,10)))[0]} 
                    comments = {this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}
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
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}  /> 
          <Route path="/menu/:dishId" component={DishWithID} />
          <Route path="/aboutus" component={()=> <About leaders={this.state.leaders}/>} />
          <Route exact path="/contactus" component={Contact} />
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
