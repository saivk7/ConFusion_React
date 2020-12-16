import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { actionTypes } from 'react-redux-form';

//addComment creates an action object and return it
export const addComment = (dishId,rating,author,comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating:rating, 
        author: author,
        comment: comment,
    }
}); //this is an action object which is for add Comment action.
//fetch dishes thunk

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(()=>{
        dispatch(addDishes( DISHES ) );
    },2000
    );


}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFalied = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});