import { createStore, combineReducers,applyMiddleware } from 'redux';
//import { Reducer, initialState } from './reducer';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Comments } from './comments'; 
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
        }),
        
        applyMiddleware(thunk,logger),
        
        //Reducer,
        //initialState
    );

    return store;
}