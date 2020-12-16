import React, { Component } from 'react';
import { Card,  CardBody, CardTitle, CardImg, Breadcrumb,BreadcrumbItem } from 'reactstrap';

import {Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
//react-w4

import {Loading } from './loadingComponent';

class DishDetail extends Component{

    
    //to convert the given date to specified date format
    convert(date){
        const retDate = new Date(date);
        var list = retDate.toUTCString().split(" ");
        const res = list[2] + " " + list[1] + ", " + list[3] ; 
        return res;
    }

    renderDish(dish,comments,addComment,dishId){
        
        if(dish!=null){
            var num = 1;
            const comments1 = comments.map((comment)=>{

                return(
                    <div>
                        <div>
                            <p> {num++} . {comment.comment}</p>
                            <div>
                                <p> Author: {comment.author} , Date: {this.convert(comment.date)}</p>
                            </div>
                        </div>
                    </div>
                 
                );
            });

            if(this.props.isLoading){
                return (
                    <div className="container">
                        <div className='row'>
                            <Loading />

                        </div>
                    </div>
                );
            }
            else if (this.props.errMess){
                return (
                    <div className="container">
                        <div className='row'>
                            <h4> {this.props.errMess} </h4>

                        </div>
                    </div>
                );

            }
            else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'> Menu</Link> </BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name} </BreadcrumbItem>

                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                    <h2>{dish.name}</h2>
                    
                    <hr />
                    </div>
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
                        
                        {/*RENDER COMMENTS*/}
                        <div className="col-12 col-md-5 m-1">
                            <h3> Comments</h3>
                            <p> {comments1}</p>
                            <CommentForm dishId={dishId} addComment={addComment} />

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
        const comments1 = this.props.comments;
        const addComment1 = this.props.addComment;
        const dishId1 = this.props.dish.id;
        return(
            <div>
                 {this.renderDish(dish,comments1,addComment1,dishId1)}
            </div>
        );
    }

}


export default DishDetail;