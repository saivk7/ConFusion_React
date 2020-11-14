//1.Import react and { Component }
import React, { Component } from 'react';

//import { Media } from 'reactstrap'; //REPLACING WITH THE CARD 
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';




//2. Create a class with the name Menu and add a constructor and render() methods to it
class Menu extends Component{

    constructor(props){
        super(props);

        //creating a state object which stores the properties
    

        console.log("Menu component constructor is involed");
    }

    componentDidMount(){
        console.log('Menu componenet componentDidMount is invoked');
    }

    renderDish(dish){
        if(dish!=null){
            return(

                <Card>
                    <CardImg width="80%" object src={dish.image} alt={dish.name}/>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardBody>
                        {dish.description}
                    </CardBody>
                </Card>
            );
        } else{
            return(<div></div>);
        }

    }

    //The render method returns the stuff to display on the app
    render(){

        const menu = this.props.dishes.map((dish)=>{
            return (
                //map returns an array of divs [to menu] with the following jsx 
                //review what is tag-
                <div key={dish.id} className="col-12 col-md-5  m-2">

                    <Card > 
                        {/*onClick={()=>this.props.onClick(dish.id)}*/} 

                        <CardImg width="80%" object src={dish.image} alt={dish.name}/>
                        
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                            {/*<p> {dish.description}</p>*/}
                        </CardImgOverlay>

                    </Card>
                   
                </div>
                     
                
            );
        });
        console.log("Menu component render in invoked");

        return(


            <div className="container">
                <div className="row">
                   
                        {menu};
                   
                </div>

                {/*
                <div className="row">
                    
                    {this.renderDish(this.state.selectedDish)}
                </div>
                */}

            </div>



        );
    }
}

export default Menu