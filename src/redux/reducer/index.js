import counterReducer from '../reducer/counter';
import isLoggedReducer from '../reducer/isLogged';
import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter : counterReducer,
    isLoggedIn : isLoggedReducer
})

export default allReducers;

