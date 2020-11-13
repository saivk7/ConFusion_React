import React, { Component } from 'react';
import { Card,  CardBody, CardTitle, CardImg } from 'reactstrap';



class DishDetail extends Component{

    
    //to convert the given date to specified date format
    convert(date){
        const retDate = new Date(date);
        var list = retDate.toUTCString().split(" ");
        const res = list[2] + " " + list[1] + ", " + list[3] ; 
        return res;
    }

    renderDish(dish){
        
        if(dish!=null){
            const comments = dish.comments.map((comment)=>{

                return(
                    <div>
                        <p> {comment.comment}</p>
                        <div>
                            <p> {comment.author} , {this.convert(comment.date)}</p>
                        </div>
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-2">
                            <Card>
                                <CardImg width="80%" object src={dish.image} alt={dish.name}/>
                                <CardBody>
                                    <CardTitle>
                                        {dish.name}
                                    </CardTitle>
                                    {dish.description}
                                    
                                </CardBody>
                            </Card>

                        </div>
                        
                        <div className="col-12 col-md-5 m-1">
                            <h3> Comments</h3>
                            <p> {comments}</p>

                        </div>

                    </div>

                </div>
                   
            );
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }


    render(){
        const dish = this.props.dish;
        return(
            <div>
                 {this.renderDish(dish)}
            </div>
        );
    }

}


export default DishDetail;