//import { DISHES } from '../shared/dishes';
//action creators will take care of this 

import { actionTypes } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state={
    isLoading: true,
    errMess: null,
    dishes: []
    },action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload }

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null,dishes: [] } //... is a spreader 
            
            case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload ,dishes: [] } //... is a spreader 

        default:
            return state;
    }
}